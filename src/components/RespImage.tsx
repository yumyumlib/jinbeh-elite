"use client";

// Responsive image for the homepage.
//
// The site runs with `images.unoptimized: true` (the built-in /_next/image
// optimizer 400's in this Next 16 standalone build). With that global flag,
// next/image ignores a per-image `loader`/`unoptimized={false}` and emits the
// raw full-size `src` with no srcset — so on a cell connection the ~25 full-size
// homepage images time out and render as broken-image icons.
//
// To get real responsive sizing we bypass next/image and render a native <img>
// with an explicit srcSet pointing at pre-generated webp variants under
// /public/images/responsive/<path>-<width>.webp (see scripts/generate-responsive.js).
// The browser then downloads the smallest variant that fits the slot — a phone
// pulls ~20-30 KB thumbnails instead of 100-600 KB originals.

import type { CSSProperties } from "react";

const BUCKETS = [384, 640, 828, 1200];

function variantPath(src: string, w: number): string {
  const m = src.match(/^\/images\/(.+)\.(jpe?g|png|webp)$/i);
  if (!m) return src;
  return `/images/responsive/${m[1]}-${w}.webp`;
}

type RespImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  /** Absolute-fill the (positioned) parent, like next/image `fill`. */
  fill?: boolean;
  /** Eager-load + high fetch priority (use for above-the-fold hero only). */
  priority?: boolean;
  width?: number;
  height?: number;
  style?: CSSProperties;
};

export default function RespImage({
  src,
  alt,
  sizes = "100vw",
  className,
  fill = false,
  priority = false,
  width,
  height,
  style,
}: RespImageProps) {
  const isLocal = /^\/images\/.+\.(jpe?g|png|webp)$/i.test(src);
  const srcSet = isLocal
    ? BUCKETS.map((w) => `${variantPath(src, w)} ${w}w`).join(", ")
    : undefined;
  // Fallback src: a mid-size variant that always exists (never the heavy original).
  const finalSrc = isLocal ? variantPath(src, 640) : src;

  const fillStyle: CSSProperties | undefined = fill
    ? { position: "absolute", inset: 0, height: "100%", width: "100%", ...style }
    : style;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={finalSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      style={fillStyle}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}
