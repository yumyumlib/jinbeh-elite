/**
 * Single source of truth for Jinbeh Happy Hour.
 *
 * IMPORTANT — IF HAPPY HOUR CHANGES, EDIT THIS FILE ONLY.
 * Pages and components import from here. Components that hard-code HH facts
 * elsewhere are bugs and should be migrated to use HAPPY_HOUR.
 *
 * Last verified: May 2, 2026 (drinks-only program, no appetizer pricing)
 */

export const HAPPY_HOUR = {
  daysShort: "Mon-Fri",
  daysLong: "Monday through Friday",
  timeShort: "5-6:30 PM",
  timeLong: "5:00 PM to 6:30 PM",
  // Calendar/structured-data friendly versions
  startTime: "17:00",
  endTime: "18:30",
  // Drinks-only program. Appetizers are NOT part of Happy Hour.
  drinks: [
    { name: "Japanese Draft Beer", price: 4, priceLabel: "$4", desc: "Sapporo, Asahi, Kirin, and more on draft", emoji: "🍺" },
    { name: "Sake",                price: 5, priceLabel: "$5", desc: "Hot or cold, from our curated selection", emoji: "🍶" },
    { name: "Wine",                price: 6, priceLabel: "$6", desc: "Curated wines by the glass", emoji: "🍷" },
  ],
  // Reusable copy snippets for SEO meta and inline prose
  shortLine: "$4 Japanese draft beer, $5 sake, $6 wine. Mon-Fri 5-6:30pm.",
  inlineSentence:
    "Happy Hour at Jinbeh runs Monday through Friday from 5:00 to 6:30 PM with $4 Japanese draft beer, $5 sake, and $6 wine at both Frisco and Lewisville.",
  oneLiner: "$4 draft beer, $5 sake, $6 wine, Mon-Fri 5–6:30 PM",
} as const;

export type HappyHour = typeof HAPPY_HOUR;
