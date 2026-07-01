#!/usr/bin/env python3
"""
Jinbeh Weekly Performance Report — Google Search Console + GA4.

Pulls last-7-days vs prior-7-days from:
  * Google Search Console  (Search Analytics API, searchconsole v1)
  * Google Analytics 4     (Analytics Data API, analyticsdata v1beta)
compiles an HTML report, and delivers it by email (SMTP) and Slack.

Auth: a single Google service account
      n8n-automation@future-surge-485020-p6.iam.gserviceaccount.com
      (key at /opt/r1-revenue/sa.json) which has:
        - GSC "Restricted" user on sc-domain:jinbeh.com
        - GA4 "Viewer" on property 539700096
Both the "Google Search Console API" and "Google Analytics Data API" must be
ENABLED in Cloud project future-surge-485020-p6 for this to run.

Runtime deps already on the VPS host python3: google-auth,
google-api-python-client, requests. No extra pip install needed.

Usage:
  python3 gsc_ga4_report.py                # pull + email + slack
  python3 gsc_ga4_report.py --dry-run      # build, print HTML to stdout, no send
  python3 gsc_ga4_report.py --no-email     # slack only
  python3 gsc_ga4_report.py --no-slack     # email only
"""
import os
import sys
import ssl
import json
import smtplib
import argparse
import datetime as dt
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

import urllib.request
from google.oauth2 import service_account
from googleapiclient.discovery import build

# ---------------------------------------------------------------- config
SA_KEY      = os.environ.get("R1_SA_KEY", "/opt/r1-revenue/sa.json")
GSC_SITE    = os.environ.get("GSC_SITE", "sc-domain:jinbeh.com")
GA4_PROPERTY = os.environ.get("GA4_PROPERTY", "properties/539700096")
ENV_FILE    = os.environ.get("JINBEH_ENV_FILE", "/opt/jinbeh-elite/.env")
REPORT_TO   = os.environ.get("REPORT_TO", "yumyumjinbeh@gmail.com")
# Slack Incoming Webhook — supplied via env only (never hardcode the secret).
# Set R1_SLACK_URL in the cron environment / a root-only env file on the VPS.
# If unset, Slack delivery is skipped (email still sends).
SLACK_URL   = os.environ.get("R1_SLACK_URL", "").strip()

GSC_SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
GA4_SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"]

# GSC data lags ~2-3 days; end the "current" window 3 days back so it is complete.
GSC_LAG_DAYS = 3


def load_env_file(path):
    """Read KEY=VALUE lines from an .env file into a dict (no export needed)."""
    out = {}
    try:
        with open(path) as fh:
            for line in fh:
                line = line.strip()
                if not line or line.startswith("#") or "=" not in line:
                    continue
                k, v = line.split("=", 1)
                out[k.strip()] = v.strip().strip('"').strip("'")
    except FileNotFoundError:
        pass
    return out


ENV = load_env_file(ENV_FILE)


def cfg(key, default=None):
    return os.environ.get(key) or ENV.get(key) or default


# ---------------------------------------------------------------- helpers
def pct(cur, prev):
    if prev in (0, None):
        return None
    return (cur - prev) / prev * 100.0


def fmt_delta(cur, prev, unit=""):
    d = pct(cur, prev)
    if d is None:
        return '<span style="color:#888">—</span>'
    arrow = "▲" if d >= 0 else "▼"
    color = "#1a7f37" if d >= 0 else "#c8102e"
    return f'<span style="color:{color};font-weight:600">{arrow} {abs(d):.1f}%</span>'


def num(x):
    try:
        return f"{int(round(float(x))):,}"
    except (TypeError, ValueError):
        return str(x)


def daterange(days_back_end, span=7):
    """Return (start, end) date strings ending `days_back_end` days before today."""
    end = dt.date.today() - dt.timedelta(days=days_back_end)
    start = end - dt.timedelta(days=span - 1)
    return start.isoformat(), end.isoformat()


# ---------------------------------------------------------------- GSC
def gsc_client():
    creds = service_account.Credentials.from_service_account_file(SA_KEY, scopes=GSC_SCOPES)
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)


def gsc_query(svc, start, end, dimensions=None, row_limit=25):
    body = {"startDate": start, "endDate": end, "rowLimit": row_limit}
    if dimensions:
        body["dimensions"] = dimensions
    return svc.searchanalytics().query(siteUrl=GSC_SITE, body=body).execute()


def gsc_totals(svc, start, end):
    r = gsc_query(svc, start, end, dimensions=None, row_limit=1)
    rows = r.get("rows", [])
    if not rows:
        return {"clicks": 0, "impressions": 0, "ctr": 0.0, "position": 0.0}
    row = rows[0]
    return {
        "clicks": row.get("clicks", 0),
        "impressions": row.get("impressions", 0),
        "ctr": row.get("ctr", 0.0) * 100.0,
        "position": row.get("position", 0.0),
    }


def collect_gsc():
    svc = gsc_client()
    cur_s, cur_e = daterange(GSC_LAG_DAYS)             # last complete 7 days
    prv_s, prv_e = daterange(GSC_LAG_DAYS + 7)         # the 7 days before that
    cur = gsc_totals(svc, cur_s, cur_e)
    prv = gsc_totals(svc, prv_s, prv_e)
    top_q = gsc_query(svc, cur_s, cur_e, ["query"], 10).get("rows", [])
    top_p = gsc_query(svc, cur_s, cur_e, ["page"], 10).get("rows", [])
    return {
        "window": (cur_s, cur_e), "prev_window": (prv_s, prv_e),
        "cur": cur, "prev": prv, "top_queries": top_q, "top_pages": top_p,
    }


# ---------------------------------------------------------------- GA4
def ga4_client():
    creds = service_account.Credentials.from_service_account_file(SA_KEY, scopes=GA4_SCOPES)
    return build("analyticsdata", "v1beta", credentials=creds, cache_discovery=False)


GA4_METRICS = ["sessions", "totalUsers", "newUsers", "screenPageViews",
               "engagementRate", "averageSessionDuration", "keyEvents"]


def ga4_run(svc, metrics, date_ranges, dimensions=None, limit=10, order_desc=None):
    body = {
        "dateRanges": date_ranges,
        "metrics": [{"name": m} for m in metrics],
        "limit": limit,
    }
    if dimensions:
        body["dimensions"] = [{"name": d} for d in dimensions]
    if order_desc:
        body["orderBys"] = [{"metric": {"metricName": order_desc}, "desc": True}]
    return svc.properties().runReport(property=GA4_PROPERTY, body=body).execute()


def ga4_totals(svc, metrics, start, end):
    """Return {metric: float} for a single date range. Drops unknown metrics on 400."""
    ranges = [{"startDate": start, "endDate": end}]
    use = list(metrics)
    while use:
        try:
            r = ga4_run(svc, use, ranges, limit=1)
            break
        except Exception as e:
            msg = str(e)
            dropped = None
            for m in use:
                if m in msg:
                    dropped = m
                    break
            if dropped:
                use.remove(dropped)
                continue
            raise
    vals = {}
    rows = r.get("rows", [])
    heads = [h["name"] for h in r.get("metricHeaders", [])]
    if rows:
        for i, h in enumerate(heads):
            vals[h] = float(rows[0]["metricValues"][i]["value"])
    return vals, use


def collect_ga4():
    svc = ga4_client()
    cur = {"start": "7daysAgo", "end": "yesterday"}
    prv = {"start": "14daysAgo", "end": "8daysAgo"}
    cur_tot, used = ga4_totals(svc, GA4_METRICS, cur["start"], cur["end"])
    prv_tot, _ = ga4_totals(svc, used, prv["start"], prv["end"])
    # top landing pages by sessions
    land = ga4_run(svc, ["sessions"], [{"startDate": cur["start"], "endDate": cur["end"]}],
                   ["landingPage"], 10, order_desc="sessions").get("rows", [])
    # channel breakdown
    chan = ga4_run(svc, ["sessions"], [{"startDate": cur["start"], "endDate": cur["end"]}],
                   ["sessionDefaultChannelGroup"], 10, order_desc="sessions").get("rows", [])
    return {"cur": cur_tot, "prev": prv_tot, "metrics_used": used,
            "landing": land, "channels": chan}


# ---------------------------------------------------------------- render
def row_html(cells, header=False):
    tag = "th" if header else "td"
    style = ("padding:8px 10px;border-bottom:1px solid #eee;text-align:left;"
             "font-size:13px;" + ("background:#faf7f2;font-weight:600;" if header else ""))
    tds = "".join(f'<{tag} style="{style}">{c}</{tag}>' for c in cells)
    return f"<tr>{tds}</tr>"


def build_html(gsc, ga4, err_notes):
    parts = []
    parts.append("""
<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
     max-width:640px;margin:0 auto;color:#1f1f1f">
  <div style="background:#1f1f1f;color:#fff;padding:20px 24px;border-radius:8px 8px 0 0">
    <div style="font-size:20px;font-weight:700">Jinbeh Weekly Performance</div>
    <div style="font-size:13px;color:#c8102e;font-weight:600;margin-top:2px">
      Search Console &middot; Google Analytics 4</div>
  </div>
  <div style="padding:20px 24px;border:1px solid #eee;border-top:none;border-radius:0 0 8px 8px">
""")

    # ---- GSC section
    if gsc:
        cs, ce = gsc["window"]
        c, p = gsc["cur"], gsc["prev"]
        parts.append(f'<h2 style="font-size:16px;margin:6px 0 4px">🔎 Search Console</h2>')
        parts.append(f'<div style="font-size:12px;color:#888;margin-bottom:10px">'
                     f'{cs} → {ce} (vs prior 7 days)</div>')
        parts.append('<table style="width:100%;border-collapse:collapse;margin-bottom:18px">')
        parts.append(row_html(["Metric", "This week", "WoW"], header=True))
        parts.append(row_html(["Clicks", num(c["clicks"]), fmt_delta(c["clicks"], p["clicks"])]))
        parts.append(row_html(["Impressions", num(c["impressions"]), fmt_delta(c["impressions"], p["impressions"])]))
        parts.append(row_html(["Avg CTR", f'{c["ctr"]:.2f}%', fmt_delta(c["ctr"], p["ctr"])]))
        parts.append(row_html(["Avg Position", f'{c["position"]:.1f}',
                               fmt_delta(p["position"], c["position"])]))  # lower is better
        parts.append('</table>')

        if gsc["top_queries"]:
            parts.append('<div style="font-size:13px;font-weight:600;margin:4px 0 6px">Top queries</div>')
            parts.append('<table style="width:100%;border-collapse:collapse;margin-bottom:16px">')
            parts.append(row_html(["Query", "Clicks", "Impr", "CTR", "Pos"], header=True))
            for r in gsc["top_queries"]:
                parts.append(row_html([
                    r["keys"][0], num(r.get("clicks", 0)), num(r.get("impressions", 0)),
                    f'{r.get("ctr",0)*100:.1f}%', f'{r.get("position",0):.1f}']))
            parts.append('</table>')

        if gsc["top_pages"]:
            parts.append('<div style="font-size:13px;font-weight:600;margin:4px 0 6px">Top pages</div>')
            parts.append('<table style="width:100%;border-collapse:collapse;margin-bottom:16px">')
            parts.append(row_html(["Page", "Clicks", "Impr"], header=True))
            for r in gsc["top_pages"]:
                page = r["keys"][0].replace("https://jinbeh.com", "") or "/"
                parts.append(row_html([page, num(r.get("clicks", 0)), num(r.get("impressions", 0))]))
            parts.append('</table>')

    # ---- GA4 section
    if ga4:
        c, p = ga4["cur"], ga4["prev"]
        parts.append(f'<h2 style="font-size:16px;margin:14px 0 4px">📈 Google Analytics 4</h2>')
        parts.append('<div style="font-size:12px;color:#888;margin-bottom:10px">'
                     'Last 7 days (vs prior 7 days)</div>')
        parts.append('<table style="width:100%;border-collapse:collapse;margin-bottom:18px">')
        parts.append(row_html(["Metric", "This week", "WoW"], header=True))
        labels = [("sessions", "Sessions"), ("totalUsers", "Total users"),
                  ("newUsers", "New users"), ("screenPageViews", "Page views"),
                  ("keyEvents", "Key events (conv.)")]
        for key, label in labels:
            if key in c:
                parts.append(row_html([label, num(c[key]), fmt_delta(c[key], p.get(key, 0))]))
        if "engagementRate" in c:
            parts.append(row_html(["Engagement rate", f'{c["engagementRate"]*100:.1f}%',
                                   fmt_delta(c["engagementRate"], p.get("engagementRate", 0))]))
        if "averageSessionDuration" in c:
            secs = c["averageSessionDuration"]
            parts.append(row_html(["Avg session", f'{int(secs//60)}m {int(secs%60)}s',
                                   fmt_delta(c["averageSessionDuration"], p.get("averageSessionDuration", 0))]))
        parts.append('</table>')

        if ga4["channels"]:
            parts.append('<div style="font-size:13px;font-weight:600;margin:4px 0 6px">Sessions by channel</div>')
            parts.append('<table style="width:100%;border-collapse:collapse;margin-bottom:16px">')
            parts.append(row_html(["Channel", "Sessions"], header=True))
            for r in ga4["channels"]:
                parts.append(row_html([r["dimensionValues"][0]["value"],
                                       num(r["metricValues"][0]["value"])]))
            parts.append('</table>')

        if ga4["landing"]:
            parts.append('<div style="font-size:13px;font-weight:600;margin:4px 0 6px">Top landing pages</div>')
            parts.append('<table style="width:100%;border-collapse:collapse;margin-bottom:8px">')
            parts.append(row_html(["Landing page", "Sessions"], header=True))
            for r in ga4["landing"]:
                parts.append(row_html([r["dimensionValues"][0]["value"],
                                       num(r["metricValues"][0]["value"])]))
            parts.append('</table>')

    if err_notes:
        parts.append('<div style="background:#fff4f4;border:1px solid #f3c2c2;border-radius:6px;'
                     'padding:10px 12px;margin-top:14px;font-size:12px;color:#a11">'
                     '<b>Notes:</b><br>' + "<br>".join(err_notes) + '</div>')

    parts.append(f'<div style="font-size:11px;color:#aaa;margin-top:18px">'
                 f'Generated {dt.datetime.now().strftime("%Y-%m-%d %H:%M %Z")} '
                 f'&middot; source: GSC {GSC_SITE}, GA4 {GA4_PROPERTY}</div>')
    parts.append("</div></div>")
    return "".join(parts)


def build_slack(gsc, ga4, err_notes):
    lines = ["*📊 Jinbeh Weekly Performance*"]
    if gsc:
        c, p = gsc["cur"], gsc["prev"]
        d = pct(c["clicks"], p["clicks"])
        dd = f"({d:+.0f}% WoW)" if d is not None else ""
        lines.append(f"🔎 *Search:* {num(c['clicks'])} clicks {dd}, "
                     f"{num(c['impressions'])} impr, {c['ctr']:.1f}% CTR, pos {c['position']:.1f}")
    if ga4:
        c, p = ga4["cur"], ga4["prev"]
        if "sessions" in c:
            d = pct(c["sessions"], p.get("sessions", 0))
            dd = f"({d:+.0f}% WoW)" if d is not None else ""
            ke = f", {num(c['keyEvents'])} key events" if "keyEvents" in c else ""
            lines.append(f"📈 *GA4:* {num(c['sessions'])} sessions {dd}, "
                         f"{num(c.get('totalUsers',0))} users{ke}")
    if err_notes:
        lines.append("⚠️ " + " | ".join(err_notes))
    return "\n".join(lines)


# ---------------------------------------------------------------- delivery
def send_slack(text):
    if not SLACK_URL:
        print("slack skipped (R1_SLACK_URL not set)")
        return
    body = json.dumps({"text": text}).encode()
    req = urllib.request.Request(SLACK_URL, data=body,
                                 headers={"Content-Type": "application/json"})
    urllib.request.urlopen(req, timeout=15).read()
    print("slack sent")


def send_email(html, subject):
    host = cfg("SMTP_HOST", "smtp.gmail.com")
    port = int(cfg("SMTP_PORT", "465"))
    user = cfg("SMTP_USER")
    pw   = cfg("SMTP_PASS")
    frm  = cfg("SMTP_FROM", user)
    if not (user and pw):
        raise RuntimeError("SMTP_USER/SMTP_PASS not found in env or " + ENV_FILE)
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = frm
    msg["To"] = REPORT_TO
    msg.attach(MIMEText("Weekly performance report (view in an HTML mail client).", "plain"))
    msg.attach(MIMEText(html, "html"))
    ctx = ssl.create_default_context()
    if port == 465:
        with smtplib.SMTP_SSL(host, port, context=ctx, timeout=30) as s:
            s.login(user, pw)
            s.sendmail(frm, [REPORT_TO], msg.as_string())
    else:
        with smtplib.SMTP(host, port, timeout=30) as s:
            s.starttls(context=ctx)
            s.login(user, pw)
            s.sendmail(frm, [REPORT_TO], msg.as_string())
    print(f"email sent to {REPORT_TO}")


# ---------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true", help="print HTML, do not send")
    ap.add_argument("--no-email", action="store_true")
    ap.add_argument("--no-slack", action="store_true")
    args = ap.parse_args()

    err_notes = []
    gsc = ga4 = None
    try:
        gsc = collect_gsc()
    except Exception as e:
        err_notes.append(f"GSC pull failed: {type(e).__name__}: {str(e)[:180]}")
        print(err_notes[-1], file=sys.stderr)
    try:
        ga4 = collect_ga4()
    except Exception as e:
        err_notes.append(f"GA4 pull failed: {type(e).__name__}: {str(e)[:180]}")
        print(err_notes[-1], file=sys.stderr)

    if not gsc and not ga4:
        # total failure -> reliable Slack alert, nonzero exit
        try:
            send_slack(":rotating_light: *Weekly GSC/GA4 report FAILED* — both pulls errored.\n"
                       + "\n".join(err_notes))
        except Exception as e:
            print(f"(slack alert failed: {e})", file=sys.stderr)
        sys.exit(1)

    html = build_html(gsc, ga4, err_notes)
    slack_text = build_slack(gsc, ga4, err_notes)
    subject = f"Jinbeh Weekly Performance — {dt.date.today().isoformat()}"

    if args.dry_run:
        print(html)
        print("\n--- SLACK ---\n" + slack_text)
        return

    if not args.no_email:
        try:
            send_email(html, subject)
        except Exception as e:
            print(f"email failed: {e}", file=sys.stderr)
            err_notes.append(f"email delivery failed: {str(e)[:120]}")
    if not args.no_slack:
        try:
            send_slack(slack_text)
        except Exception as e:
            print(f"slack failed: {e}", file=sys.stderr)


if __name__ == "__main__":
    main()
