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
  phone_call: "i2vVCKTbm7UcENXWgM9D",  // Phone call lead — Phone call – click ($120)
  catering: "UT9WCKHbm7UcENXWgM9D",    // Submit lead form — Catering lead form ($120)
  directions: "vr0UCKfbm7UcENXWgM9D",  // Get directions — Get Directions click ($25)
} as const;

export type ConversionAction = keyof typeof CONVERSION_LABELS;

const DEFAULT_VALUES: Record<ConversionAction, number> = {
  reservation: 120,
  phone_call: 120,
  catering: 120,
  directions: 25,
};

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

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    value: conversionValue,
    currency,
    event_callback: navigateOnce,
  });
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
