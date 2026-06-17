'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution, buildAttributionQuery } from "@/lib/attribution";

/**
 * Mount-once client component that:
 *
 *   1. Captures Google Click ID + UTM params from the landing URL into
 *      localStorage (90-day expiry).
 *   2. Rewrites every <a href> pointing at OpenTable's booking domain to
 *      append the stored attribution params, so the GCLID survives the
 *      cross-domain handoff into OpenTable's booking flow.
 *
 * Both effects re-run on Next.js route changes (via usePathname). The link
 * rewrite is idempotent: links already carrying gclid/utm_source are left
 * alone, so it's safe to run multiple times.
 *
 * Renders nothing — purely a side-effect.
 *
 * Mount in app/layout.tsx so it runs on every page load and every client-side
 * navigation. Never blocks rendering, never throws, never logs in production.
 */
export default function AttributionCapture() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      captureAttribution();
    } catch {
      // Fail closed — attribution capture should never crash the page
    }
  }, []);

  useEffect(() => {
    try {
      const query = buildAttributionQuery("&");
      if (!query) return;
      // Strip the leading '&' once; we re-apply with the correct separator below
      const params = query.replace(/^&/, "");

      const selector =
        'a[href*="opentable.com/booking"], a[href*="opentable.com/restref"], a[href*="opentable.com/r/"]';
      const links = document.querySelectorAll<HTMLAnchorElement>(selector);

      links.forEach((a) => {
        const href = a.getAttribute("href");
        if (!href) return;
        // Skip links that already carry attribution — keeps the operation idempotent
        if (href.includes("gclid=") || href.includes("utm_source=")) return;
        const separator = href.includes("?") ? "&" : "?";
        a.setAttribute("href", href + separator + params);
      });
    } catch {
      // Never let DOM rewriting break the page
    }
  }, [pathname]);

  return null;
}
