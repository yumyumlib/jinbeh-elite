"use client";

/**
 * CallLink — a drop-in replacement for a plain <a href="tel:..."> that fires
 * the Google Ads "phone_call" conversion when clicked.
 *
 * Why it exists:
 *   The global nav / hero / sticky CTA / location picker already fire the
 *   "phone_call" conversion via onClick (see src/lib/gtag.ts). But the dozens
 *   of static SEO pages (server components) render plain
 *   <a href="tel:2146191200"> links whose clicks were NOT tracked — which is
 *   why the "Phone call – click" conversion read as Inactive. This client
 *   component closes that gap so EVERY click-to-call link fires the conversion.
 *
 * Usage (drop-in — same props as <a>):
 *   <CallLink href="tel:2146191200" className="...">(214) 619-1200</CallLink>
 *
 * Behavior:
 *   - Fires the "phone_call" conversion, then lets the default tel: action run
 *     (opens the dialer). Fire-and-forget matches the existing wired CTAs; a
 *     tel: link does not navigate the page, so the ping has time to leave.
 *   - Respects a caller-supplied onClick (runs first; if it preventDefaults,
 *     we still record the click intent but don't override its behavior).
 */

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { fireConversion } from "@/lib/gtag";

type CallLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export default function CallLink({ href, children, onClick, ...rest }: CallLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    fireConversion("phone_call");
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
