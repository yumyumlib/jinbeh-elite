"use client";

/**
 * ReserveLink — a drop-in replacement for a plain <a> that links to OpenTable.
 *
 * Why it exists:
 *   The global nav / hero / sticky CTA already fire the Google Ads "reservation"
 *   conversion via fireConversionAndOpen() (see src/lib/gtag.ts). But the dozens
 *   of static SEO landing pages (nearby/*, celebrations/*, blog/*) are server
 *   components that rendered plain <a href="https://www.opentable.com/...">
 *   buttons — those clicks were NOT tracked. This client component closes that
 *   gap so EVERY "Reserve" button on the site fires the same conversion.
 *
 * Usage (drop-in — same props as <a>):
 *   <ReserveLink href="https://www.opentable.com/..." className="...">
 *     Reserve at Frisco
 *   </ReserveLink>
 *
 * Behavior:
 *   - Fires the "reservation" Google Ads conversion, then opens OpenTable.
 *   - Respects an explicit target="_blank" (defaults to opening a new tab).
 *   - Falls back to a normal navigation if gtag is blocked/unavailable
 *     (handled inside fireConversionAndOpen).
 */

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { fireConversionAndOpen } from "@/lib/gtag";

type ReserveLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export default function ReserveLink({
  href,
  children,
  onClick,
  target,
  ...rest
}: ReserveLinkProps) {
  const newTab = target === "_blank";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Let the caller's own onClick run first (e.g. closing a menu).
    onClick?.(e);
    if (e.defaultPrevented) return;
    e.preventDefault();
    fireConversionAndOpen("reservation", href, newTab);
  };

  return (
    <a href={href} target={target} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
