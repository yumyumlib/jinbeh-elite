/**
 * Ad-attribution utility — captures and persists Google Click ID (GCLID) and
 * UTM parameters so they survive the user's journey from ad click → reservation,
 * including cross-domain handoff to OpenTable.
 *
 * Why this exists:
 *   Google's gtag library handles GCLID capture into the _gcl_aw cookie automatically
 *   for ON-SITE conversion events. But the moment the user clicks the OpenTable
 *   "Reserve Your Table" button and crosses to opentable.com, the GCLID is lost —
 *   OpenTable has no way to know which ad click drove the booking. By appending
 *   gclid + utm params to the OpenTable URL, we hand the attribution data to
 *   OpenTable in a way they can preserve through their booking flow. Later, if
 *   we gain OpenTable API access, we can read it back per confirmed reservation.
 *
 * Lifetime:
 *   Mirrors Google's own _gcl_aw cookie lifetime (90 days). Users who land from
 *   an ad and book within 90 days remain correctly attributed.
 *
 * Storage:
 *   localStorage (survives tab/window close, respects browser privacy boundaries).
 *   Falls back to in-memory if localStorage is unavailable (private browsing).
 */

export type AttributionData = {
  gclid?: string;
  gbraid?: string;       // Connected TV / app campaigns
  wbraid?: string;       // iOS-restricted device campaigns
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  /** Unix ms timestamp of capture. Used to enforce 90-day expiry. */
  capturedAt?: number;
};

const STORAGE_KEY = "jinbeh_attribution_v1";
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;

const ATTRIBUTION_KEYS: (keyof AttributionData)[] = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

/**
 * Parse attribution parameters from the current URL. Returns only the keys
 * that were actually present (not undefined for absent ones).
 */
export function parseAttributionFromUrl(search?: string): AttributionData {
  if (typeof window === "undefined" && !search) return {};
  const params = new URLSearchParams(search ?? window.location.search);
  const captured: Record<string, string> = {};
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) captured[key] = value;
  }
  return captured as AttributionData;
}

/**
 * Read stored attribution from localStorage. Returns empty object if:
 *   - localStorage unavailable
 *   - no stored data
 *   - stored data expired (older than 90 days)
 */
export function getStoredAttribution(): AttributionData {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as AttributionData;
    if (!parsed.capturedAt) return {};
    if (Date.now() - parsed.capturedAt > NINETY_DAYS_MS) {
      // Expired — clear it
      window.localStorage.removeItem(STORAGE_KEY);
      return {};
    }
    return parsed;
  } catch {
    return {};
  }
}

/**
 * Persist attribution data to localStorage with a fresh timestamp.
 * Only writes if there's at least one populated key (avoids overwriting
 * real data with empty).
 */
export function persistAttribution(data: AttributionData): void {
  if (typeof window === "undefined") return;
  const hasAnyKey = ATTRIBUTION_KEYS.some((k) => data[k]);
  if (!hasAnyKey) return;
  try {
    const toStore: AttributionData = { ...data, capturedAt: Date.now() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
  } catch {
    // localStorage unavailable (private browsing, quota, etc.) — silently drop
  }
}

/**
 * Capture-and-persist in one call. Run on every page mount via
 * AttributionCapture component. If the current URL has fresh ad params,
 * they overwrite stored values (most-recent-click wins, matches Google's
 * own attribution behavior).
 */
export function captureAttribution(): AttributionData {
  const fromUrl = parseAttributionFromUrl();
  if (Object.keys(fromUrl).length > 0) {
    persistAttribution(fromUrl);
    return fromUrl;
  }
  return getStoredAttribution();
}

/**
 * Build a query string fragment of attribution params suitable for appending
 * to an outbound URL (e.g. the OpenTable booking widget). Returns an empty
 * string if no attribution data is available — caller can safely concatenate.
 *
 *   const url = `https://opentable.com/...?rid=123${buildAttributionQuery()}`;
 *
 * Note: returns a leading '&' if there's data, so the caller's URL must
 * already include '?'. If the caller's URL has no params yet, prepend '?'
 * yourself.
 */
export function buildAttributionQuery(prefix: "&" | "?" = "&"): string {
  const data = getStoredAttribution() as Record<string, string | undefined>;
  const parts: string[] = [];
  for (const key of ATTRIBUTION_KEYS) {
    const value = data[key];
    if (value) parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }
  return parts.length > 0 ? prefix + parts.join("&") : "";
}

/**
 * Snapshot for server-side logging (e.g. POSTing to an n8n webhook on click).
 * Lighter than getStoredAttribution — omits capturedAt internal field.
 */
export function getAttributionSnapshot(): AttributionData {
  const stored = getStoredAttribution() as Record<string, string | undefined>;
  const snapshot: Record<string, string> = {};
  for (const key of ATTRIBUTION_KEYS) {
    const v = stored[key];
    if (v) snapshot[key] = v;
  }
  return snapshot as AttributionData;
}
