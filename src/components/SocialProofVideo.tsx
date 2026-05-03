"use client";

/**
 * SocialProofVideo — vertical-reel embed for paid-partnership / press features.
 *
 * Optimized for fast page loads:
 *   - Renders only a poster image until the user scrolls within 200px
 *     (IntersectionObserver lazy mount).
 *   - <video> tag uses preload="none" so no bytes are pulled until play tap.
 *   - Two <source> elements (WebM first, MP4 fallback) — smaller browsers serve
 *     ~2 MB instead of the ~7 MB MP4.
 *   - Click-to-play with a play overlay; we don't autoplay (saves data + CLS).
 *   - Emits VideoObject JSON-LD so Google can show this in video-rich results.
 *
 * Used on:
 *   - /about (social-proof section)
 *   - /celebrations/family-gatherings (audience match)
 *   - /gallery (featured "as seen on" item)
 */

import { useEffect, useRef, useState } from "react";

export interface SocialProofVideoProps {
  /** Path under /public, no extension. e.g. "videos/jinbeh-frisco-family-hibachi-dinner-as-seen-on-dfw-moms" */
  basePath: string;
  /** Poster image path (full path under /public). */
  poster: string;
  /** Width of the source media (used by VideoObject schema and aspect ratio container). */
  width?: number;
  /** Height of the source media. */
  height?: number;
  /** Headline above the player. */
  title?: string;
  /** Sub-headline / attribution line. */
  attribution?: string;
  /** Single-paragraph description shown beside the video on desktop. */
  description?: string;
  /** Source URL on the originating platform (Instagram link). */
  contentUrl?: string;
  /** Upload date in ISO 8601 — for VideoObject schema. */
  uploadDate?: string;
  /** Duration in seconds — for VideoObject schema. */
  durationSeconds?: number;
  /** Optional className to control outer wrapper layout. */
  className?: string;
}

export default function SocialProofVideo({
  basePath,
  poster,
  width = 720,
  height = 1280,
  title = "As seen on @dfwmoms",
  attribution = "Family hibachi dinner at Jinbeh Frisco — paid partnership with DFW Moms",
  description,
  contentUrl,
  uploadDate,
  durationSeconds,
  className = "",
}: SocialProofVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldMount, setShouldMount] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Lazy-mount the <video> element only when we're near the viewport.
  // Until then, only a static poster image is in the DOM (zero video bytes).
  useEffect(() => {
    if (!containerRef.current || shouldMount) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShouldMount(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px 0px" }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [shouldMount]);

  function handlePlayClick() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  }

  // ISO 8601 duration (e.g. "PT53S") for VideoObject schema
  const isoDuration = durationSeconds
    ? `PT${Math.round(durationSeconds)}S`
    : undefined;

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description: attribution + (description ? ` — ${description}` : ""),
    thumbnailUrl: `https://jinbeh.com${poster}`,
    contentUrl: `https://jinbeh.com/${basePath}.mp4`,
    embedUrl: contentUrl,
    uploadDate,
    duration: isoDuration,
    publisher: {
      "@type": "Organization",
      name: "Jinbeh Japanese Restaurant",
      logo: {
        "@type": "ImageObject",
        url: "https://jinbeh.com/icons/icon-192x192.png",
      },
    },
  };

  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${className}`}>
      {/* Schema.org VideoObject — helps Google show this in video-rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* Vertical 9:16 player container, capped at a sensible size */}
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden bg-charcoal shadow-2xl"
      >
        {/* Poster image — instant paint, no JS required */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster}
          alt={`${title} — poster frame`}
          loading="lazy"
          width={width}
          height={height}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
        />

        {/* Lazy-mounted video. preload="none" means zero bytes until play. */}
        {shouldMount && (
          <video
            ref={videoRef}
            poster={poster}
            preload="none"
            playsInline
            controls={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            className="absolute inset-0 w-full h-full object-cover"
            aria-label={title}
          >
            <source src={`/${basePath}.webm`} type="video/webm" />
            <source src={`/${basePath}.mp4`} type="video/mp4" />
            Your browser does not support HTML5 video.
            {contentUrl && (
              <>
                {" "}
                <a href={contentUrl} target="_blank" rel="noopener noreferrer">
                  Watch on Instagram
                </a>
                .
              </>
            )}
          </video>
        )}

        {/* Play overlay — visible only when paused, large enough to tap on mobile */}
        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlayClick}
            disabled={!shouldMount}
            aria-label={`Play ${title}`}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
          >
            <span className="sr-only">{`Play ${title}`}</span>
            <svg
              viewBox="0 0 80 80"
              className="w-20 h-20 text-white drop-shadow-lg group-hover:scale-110 transition-transform"
              fill="currentColor"
              aria-hidden="true"
            >
              <circle cx="40" cy="40" r="38" fill="rgba(0,0,0,0.45)" />
              <path d="M32 26 L58 40 L32 54 Z" fill="white" />
            </svg>
          </button>
        )}
      </div>

      {/* Side panel with attribution + optional description */}
      <div className="text-charcoal">
        <p className="text-accent-red font-bold tracking-wider uppercase mb-2 text-sm">
          As featured on Instagram
        </p>
        <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
          {title}
        </h3>
        <p className="text-charcoal/80 mb-4 leading-relaxed">{attribution}</p>
        {description && (
          <p className="text-charcoal/70 mb-6 leading-relaxed">{description}</p>
        )}
        {contentUrl && (
          <a
            href={contentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-red hover:underline font-semibold"
          >
            Watch the original on Instagram
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </div>
  );
}
