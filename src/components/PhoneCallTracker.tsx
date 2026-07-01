"use client";

/**
 * PhoneCallTracker — fires a GA4 `phone_call` event on any click-to-call.
 *
 * Why it exists:
 *   GA4's enhanced measurement only tracks OUTBOUND http link clicks, so
 *   `tel:` taps are invisible to GA4 — there was no `phone_call` event to mark
 *   as a Key Event or surface in the weekly performance report. CallLink fires
 *   the Google *Ads* phone_call conversion, but that ping never reaches GA4,
 *   and the dozens of static SEO pages use plain <a href="tel:..."> anyway.
 *
 *   This single document-level (capture-phase) listener catches EVERY click on
 *   a tel: link site-wide and emits a GA4 `phone_call` event, routed to GA4
 *   only via `send_to` so it does not collide with the existing Ads conversion.
 *   `phone_call` is marked as a Key Event in the GA4 property, so it flows into
 *   the weekly GSC/GA4 report's key-events total.
 *
 * Mounted once in the root layout. Safe no-op if gtag is unavailable.
 */

import { useEffect } from "react";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || "G-8ZW7KHER0C";

export default function PhoneCallTracker() {
  useEffect(() => {
    function handleClick(e: globalThis.MouseEvent) {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"]') as HTMLAnchorElement | null;
      if (!link) return;
      if (typeof window.gtag !== "function") return;
      const href = link.getAttribute("href") || "";
      window.gtag("event", "phone_call", {
        send_to: GA4_ID,
        phone_number: href.replace(/^tel:/, ""),
        link_url: href,
        link_text: (link.textContent || "").trim().slice(0, 100),
      });
    }
    // Capture phase so the event fires even if a handler stops propagation,
    // and before the default tel: action hands off to the dialer.
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
