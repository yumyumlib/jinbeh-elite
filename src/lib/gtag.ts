/**
 * Google Ads conversion event helpers.
 *
 * Usage:
 *   import { fireConversion } from "@/lib/gtag";
 *   <a onClick={() => fireConversion("reservation")}>Reserve</a>
 *
 * Wiring with Google Ads:
 *   1. Each conversion action created in Google Ads has its own "Conversion Label"
 *      (a short token like "AbC-XyZ"). Paste each label below in CONVERSION_LABELS.
 *   2. The Conversion ID (account-wide, format AW-XXXXXXXXXX) lives in layout.tsx
 *      and in the NEXT_PUBLIC_GOOGLE_ADS_ID environment variable.
 *   3. After deploy, verify with Google Tag Assistant: click each tracked button
 *      and confirm a "conversion" event fires with the right send_to value.
 *
 * Values match what we set in Google Ads:
 *   - Reservation / Phone call / Catering lead: $120 (blended dinner+lunch party value)
 *   - Get Directions: $25 (micro-conversion, observe only — not used for bidding)
 */

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "set",
      action: string,
      params?: Record<string, unknown>,
    ) => void;
    dataLayer?: unknown[];
  }
}

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18150861653";

// Conversion Labels — captured from Google Ads account 278-359-1446 on 2026-05-28.
// Each Label is the unique token after the slash in the Conversion ID
// (e.g. "AW-18150861653/abcDEFghi"). To rotate or replace a single conversion,
// recreate it under Goals → Conversions and paste the new Label here.
export const CONVERSION_LABELS = {
  reservation: "fFK4CJ7bm7UcENXWgM9D", // Submit lead form — Reservation – OpenTable click ($120)
  // OpenTable Reservation conversion (created 2026-06-22, "Book appointment", $25).
  // Fires alongside `reservation` on every OpenTable "Reserve" click — see
  // COMPANION_CONVERSIONS below. Was created in Google Ads but never installed
  // on the site ("Untitled tag"); wiring it here installs it.
  opentable_reservation: "W4VzCPnC28McENXWgM9D",
  phone_call: "i2vVCKTbm7UcENXWgM9D",  // Phone call lead — Phone call – click ($120)
  catering: "UT9WCKHbm7UcENXWgM9D",    // Submit lead form — Catering lead form ($120)
  directions: "vr0UCKfbm7UcENXWgM9D",  // Get directions — Get Directions click ($25)
  // Lead-form conversions for Enhanced Conversions for Leads (added 2026-06-29).
  // For each: create the conversion action in Google Ads (Goals → Conversions →
  // New → "Submit lead form"), turn on "Enhanced conversions for leads" and
  // accept the customer-data terms, then paste the Label here. Until a real
  // label is pasted these safely no-op (see the `_PLACEHOLDER` guard below).
  vip: "VIP_LABEL_PLACEHOLDER",            // VIP Club sign-up (email only)
  event_inquiry: "EVENT_LABEL_PLACEHOLDER", // Event / contact inquiry lead
} as const;

export type ConversionAction = keyof typeof CONVERSION_LABELS;

const DEFAULT_VALUES: Record<ConversionAction, number> = {
  reservation: 120,
  opentable_reservation: 25,
  phone_call: 120,
  catering: 120,
  directions: 25,
  vip: 25,
  event_inquiry: 120,
};

/**
 * Some user actions should record more than one Google Ads conversion. An
 * OpenTable "Reserve" click fires BOTH the original "Reservation – OpenTable
 * click" action and the newer "OpenTable Reservation" (Book appointment)
 * action, so both stay populated and either can be promoted to Primary later
 * without re-instrumenting every CTA.
 *
 * Companion conversions are fired fire-and-forget; only the PRIMARY action
 * gates navigation in fireConversionAndOpen(). Companions must not themselves
 * declare companions (no recursion).
 */
const COMPANION_CONVERSIONS: Partial<Record<ConversionAction, ConversionAction[]>> = {
  reservation: ["opentable_reservation"],
};

/** Internal: send one conversion ping, fire-and-forget. No-op if not configured. */
function sendConversion(
  action: ConversionAction,
  value: number | undefined,
  currency: string,
): void {
  if (typeof window === "undefined" || !window.gtag) return;
  const label = CONVERSION_LABELS[action];
  if (!label || label.endsWith("_PLACEHOLDER")) return;
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    value: value ?? DEFAULT_VALUES[action],
    currency,
  });
}

/**
 * Fire a Google Ads conversion event.
 * Safe to call from any client component — no-ops if gtag hasn't loaded yet
 * or if the conversion label is still a placeholder.
 *
 * Fire-and-forget version. Use `fireConversionAndOpen()` for clicks that
 * navigate to another domain — that variant guarantees the ping completes
 * before the browser starts the new navigation.
 */
export function fireConversion(
  action: ConversionAction,
  value?: number,
  currency: string = "USD",
): void {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  const label = CONVERSION_LABELS[action];
  if (!label || label.endsWith("_PLACEHOLDER")) {
    // Conversion label not configured yet. Log in dev so it's obvious during setup,
    // silent in production so we don't spam customer consoles.
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(`[gtag] Conversion label for "${action}" not set yet — skipping fire.`);
    }
    return;
  }

  const conversionValue = value ?? DEFAULT_VALUES[action];

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    value: conversionValue,
    currency,
  });

  // Fire any companion conversions (e.g. opentable_reservation alongside reservation).
  for (const companion of COMPANION_CONVERSIONS[action] ?? []) {
    sendConversion(companion, undefined, currency);
  }
}

/**
 * Fire a Google Ads conversion event AND open the destination URL — once the
 * ping has been acknowledged (or 1 second has passed, whichever is sooner).
 *
 * This is the pattern Google publishes in their "Click" event snippet:
 *   https://support.google.com/google-ads/answer/6331314
 *
 * Why it matters: when an onClick handler fires gtag() and then the browser
 * navigates (same-tab) or opens a new tab (`target="_blank"`), the conversion
 * ping is async (50–250ms over the network). On Safari/iOS the originating
 * tab is aggressively suspended when focus shifts, which can cancel the
 * in-flight ping. Even on Chrome, low-priority background tab throttling can
 * drop the request. The `event_callback` pattern delays navigation until the
 * ping has at least been queued for transmission, giving it time to actually
 * leave the browser.
 *
 * Usage:
 *
 *   <a
 *     href="https://opentable.com/..."
 *     onClick={(e) => {
 *       e.preventDefault();
 *       fireConversionAndOpen("reservation", e.currentTarget.href, true);
 *     }}
 *   >Reserve</a>
 *
 * Or with the helper:
 *
 *   <a href={url} onClick={handleReserveClick(url)}>Reserve</a>
 */
export function fireConversionAndOpen(
  action: ConversionAction,
  url: string,
  newTab: boolean = true,
  value?: number,
  currency: string = "USD",
): void {
  if (typeof window === "undefined") return;

  const openDestination = () => {
    if (newTab) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };

  // If gtag isn't loaded yet (e.g. ad blocker, slow third-party load),
  // open the destination immediately so we never block the user.
  if (!window.gtag) {
    openDestination();
    return;
  }

  const label = CONVERSION_LABELS[action];
  if (!label || label.endsWith("_PLACEHOLDER")) {
    openDestination();
    return;
  }

  const conversionValue = value ?? DEFAULT_VALUES[action];

  // Use a one-shot callback wrapper so we only navigate once — whichever of
  // (gtag ack | 1 s timeout) fires first wins.
  let navigated = false;
  const navigateOnce = () => {
    if (navigated) return;
    navigated = true;
    openDestination();
  };

  // Hard safety timeout: never let a missing/blocked gtag delay the user
  // more than 1 second.
  window.setTimeout(navigateOnce, 1000);

  // Fire companion conversions first (fire-and-forget) so they're queued
  // before navigation; only the PRIMARY action below gates the open.
  for (const companion of COMPANION_CONVERSIONS[action] ?? []) {
    sendConversion(companion, undefined, currency);
  }

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    value: conversionValue,
    currency,
    event_callback: navigateOnce,
  });
}

/* -------------------------------------------------------------------------- *
 * Enhanced Conversions for Leads
 *
 * Sends a HASHED copy of the lead's email/phone alongside the conversion so
 * Google can match the lead back to the originating ad click (improves match
 * rates and lets form leads be measured even when the booking/CRM step is
 * off-site). We hash client-side with SHA-256 (Web Crypto) so raw PII never
 * leaves the browser.
 *
 * ONE-TIME GOOGLE ADS SETUP (required, or the hashed data is ignored):
 *   Goals → Settings → "Enhanced conversions for leads" → turn on, choose the
 *   Google tag method, and accept the customer-data terms.
 *
 * Usage — call BEFORE firing the conversion, on a confirmed form submit:
 *   await setEnhancedConversionData({ email, phone });
 *   fireConversion("catering");
 * -------------------------------------------------------------------------- */

/** Normalize an email per Google's rules: trim + lowercase. */
function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/** Normalize a phone to E.164 (+1XXXXXXXXXX for 10-digit US numbers). */
function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
}

/** SHA-256 → lowercase hex. Returns null if Web Crypto is unavailable (http). */
async function sha256Hex(value: string): Promise<string | null> {
  if (typeof crypto === "undefined" || !crypto.subtle) return null;
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Hash the lead's email/phone and hand them to gtag for Enhanced Conversions.
 * Safe anywhere: no-ops without gtag, without Web Crypto (non-HTTPS), or when
 * both fields are empty. MUST run before the conversion event fires so the
 * user_data is attached to it.
 */
export async function setEnhancedConversionData(input: {
  email?: string | null;
  phone?: string | null;
}): Promise<void> {
  if (typeof window === "undefined" || !window.gtag) return;

  const userData: { sha256_email_address?: string; sha256_phone_number?: string } = {};

  const email = (input.email ?? "").toString();
  if (email.trim()) {
    const hashed = await sha256Hex(normalizeEmail(email));
    if (hashed) userData.sha256_email_address = hashed;
  }

  const phone = (input.phone ?? "").toString();
  if (phone.trim()) {
    const normalized = normalizePhone(phone);
    if (normalized) {
      const hashed = await sha256Hex(normalized);
      if (hashed) userData.sha256_phone_number = hashed;
    }
  }

  if (!userData.sha256_email_address && !userData.sha256_phone_number) return;

  window.gtag("set", "user_data", userData);
}

/**
 * Convenience helpers — drop into onClick directly.
 *
 *   <a onClick={onReserveClick}>Reserve</a>
 *
 * NOTE: These are the legacy fire-and-forget helpers. For cross-domain links
 * (OpenTable, etc.) prefer `fireConversionAndOpen()` — see its docstring.
 */
export const onReserveClick = () => fireConversion("reservation");
export const onPhoneCallClick = () => fireConversion("phone_call");
export const onCateringFormSubmit = () => fireConversion("catering");
export const onDirectionsClick = () => fireConversion("directions");
