// Responsive image loader for homepage images.
//
// The site runs with `images.unoptimized: true` because the built-in
// /_next/image optimizer 400's in this Next 16 standalone build. That means
// images are normally served at full resolution — fine on desktop/wifi, but on
// a cell connection the homepage's ~25 full-size images can time out and render
// as broken-image icons.
//
// To restore responsive sizing WITHOUT the optimizer, we pre-generate webp
// variants under /public/images/responsive/<path>-<width>.webp (see
// scripts/generate-responsive.js) and attach this loader to the homepage
// <Image> components (with `unoptimized={false}`). Next then builds a proper
// srcset by calling this loader for each candidate width, and the browser
// downloads the smallest variant that fits the slot.
//
// Only attach this loader to images that actually have generated variants.
const BUCKETS = [384, 640, 828, 1200];

export default function respLoader({ src, width }: { src: string; width: number; quality?: number }): string {
  const m = src.match(/^\/images\/(.+)\.(jpe?g|png|webp)$/i);
  // Unknown / external src: serve as-is so we never point at a missing file.
  if (!m) return src;
  // Snap any requested width up to the nearest available bucket (cap at largest)
  // so the returned variant always exists.
  const bucket = BUCKETS.find((b) => b >= width) ?? BUCKETS[BUCKETS.length - 1];
  return `/images/responsive/${m[1]}-${bucket}.webp`;
}
