#!/usr/bin/env python3
import urllib.request, re

def fetch(u):
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=15) as r:
            return r.status, r.read().decode('utf-8', 'ignore')
    except Exception as e:
        return None, str(e)

paths = ['/', '/frisco/specials', '/lewisville/specials', '/about',
         '/celebrations/family-gatherings', '/gallery', '/happy-hour',
         '/blog/best-happy-hour-frisco-tx', '/celebrations/date-night']

for path in paths:
    s, body = fetch('https://staging.jinbeh.com' + path)
    print(f'--- {path} : HTTP {s} | {len(body) if body else 0} bytes ---')
    if not body:
        continue
    hh_old = re.findall(r'\$5\s?[Aa]ppetiz|\$3\s?[Dd]omestic|4:00.{0,4}6:00', body)
    hh_new = re.findall(r'\$4\s?Japanese\s?[Dd]raft|\$5\s?[Ss]ake|\$6\s?[Ww]ine|5:00.{0,4}6:30', body)
    video_ref = 'jinbeh-frisco-family-hibachi-dinner-as-seen-on-dfw-moms' in body
    dfw_moms = 'dfwmoms' in body.lower()
    print(f'  WRONG HH content (should be 0): {len(hh_old)}')
    print(f'  CORRECT HH content found: {len(hh_new)}')
    print(f'  video referenced: {video_ref}')
    print(f'  dfwmoms mentioned: {dfw_moms}')
