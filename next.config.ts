import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',

  // Enforce no trailing slash for consistent URLs and canonical hygiene
  trailingSlash: false,

  // Image optimization
  // NOTE: `unoptimized: true` bypasses the Next.js /_next/image optimizer endpoint.
  // The optimizer's loopback subrequest is being 400'd by middleware/host validation
  // in this build (Next.js 16 + Turbopack standalone), causing all blog index thumbnails
  // to render the alt-text fallback. Bypassing it serves the raw image files directly
  // via Express static middleware, which we've confirmed returns 200 for every asset.
  // Trade-off: no automatic AVIF/WebP conversion or responsive resizing — but the source
  // images are already reasonably sized, and serving them raw is far better than the
  // current state where they don't render at all.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jinbeh.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media-cdn.grubhub.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Experimental optimizations
  experimental: {
    optimizeCss: true,
  },

  // Rewrites — serve pre-generated WebP siblings for clients that support WebP.
  // We pre-build a `.webp` next to every `.jpg`/`.jpeg`/`.png` under /public/images
  // via `scripts/generate-webp.sh`. With `images.unoptimized: true` we lose the
  // built-in /_next/image conversion path, so this rewrite re-introduces format
  // negotiation at the static-serve layer based on the request's Accept header.
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/images/:path*.jpg",
          has: [{ type: "header", key: "accept", value: "(.*image/webp.*)" }],
          destination: "/images/:path*.webp",
        },
        {
          source: "/images/:path*.jpeg",
          has: [{ type: "header", key: "accept", value: "(.*image/webp.*)" }],
          destination: "/images/:path*.webp",
        },
        {
          source: "/images/:path*.png",
          has: [{ type: "header", key: "accept", value: "(.*image/webp.*)" }],
          destination: "/images/:path*.webp",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },

  // Redirects for SEO and legacy WordPress migration
  async redirects() {
    return [
      // Existing redirects
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/join",
        destination: "/vip",
        permanent: true,
      },
      {
        source: "/vip-club",
        destination: "/vip",
        permanent: true,
      },

      // Legacy WordPress pages
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/test",
        destination: "/",
        permanent: true,
      },

      // PAA FAQ pages are now live at /faq/[slug] — the holding redirect was removed May 30, 2026
      // (Previous version routed /faq/:slug → /faq while PAA pages were being built)

      // Legacy PDF menus → new menu pages (specific rules BEFORE catch-all)
      {
        source: "/wp-content/uploads/2023/12/Lewisville-Lunch-Hibachi.pdf",
        destination: "/lewisville/menu",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/12/Jinbeh-Frisco-Lunch.pdf",
        destination: "/frisco/menu",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/Jinbeh-Frisco-Dinner-4.pdf",
        destination: "/frisco/menu",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/04/2023-Frisco-Official-Sushi-Menu.pdf",
        destination: "/frisco/sushi-rolls",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2026/01/Lewisville-Lunch-Hibachi-2.pdf",
        destination: "/lewisville/menu",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2025/05/Lewisville-Dinner-Hibachi-3.pdf",
        destination: "/lewisville/menu",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/07/Lewisville-Sushi.pdf",
        destination: "/lewisville/sushi-rolls",
        permanent: true,
      },

      // WordPress infrastructure catch-alls
      {
        source: "/wp-content/:path*",
        destination: "/menu",
        permanent: true,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-sitemap-posts-page-1.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/wp-sitemap-index.xsl",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/wp-sitemap.xsl",
        destination: "/sitemap.xml",
        permanent: true,
      },

      // SEO cannibalization fixes — 301 redirects for duplicate/variant slugs
      {
        source: "/blog/sushi-platters-near-me",
        destination: "/blog/sushi-platter-near-me",
        permanent: true,
      },
      {
        source: "/blog/japanese-restaurants-lewisville",
        destination: "/blog/japanese-restaurants-lewisville-tx",
        permanent: true,
      },
      {
        source: "/blog/best-hibachi-dallas",
        destination: "/blog/best-hibachi-dallas-tx",
        permanent: true,
      },

      // Legacy / 404 cleanup (May 31 2026) — URLs Google reported under
      // "Not found (404)" that should resolve to a relevant live page
      // instead of returning 404.
      {
        source: "/blog/types-of-sushi-rolls",
        destination: "/blog/types-of-sushi",
        permanent: true,
      },
      {
        source: "/blog/what-is-hibachi",
        destination: "/blog/hibachi-vs-teppanyaki-explained",
        permanent: true,
      },
      {
        source: "/lewisville.htm",
        destination: "/lewisville",
        permanent: true,
      },
      {
        source: "/frisco.htm",
        destination: "/frisco",
        permanent: true,
      },

      // World Cup 2026 — alias slugs route to canonical pillar
      {
        source: "/world-cup",
        destination: "/world-cup-2026",
        permanent: true,
      },
      {
        source: "/fifa-2026",
        destination: "/world-cup-2026",
        permanent: true,
      },
      {
        source: "/samurai-blue",
        destination: "/world-cup-2026",
        permanent: true,
      },
      {
        source: "/japan-world-cup",
        destination: "/world-cup-2026",
        permanent: true,
      },
    ];
  },

  // Headers for security and caching
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.opentable.com https://www.googletagmanager.com https://www.google-analytics.com https://f.vimeocdn.com https://player.vimeo.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://*.vimeo.com https://*.vimeocdn.com; frame-src https://www.opentable.com https://www.google.com https://player.vimeo.com; media-src 'self' https://jinbeh.com https://*.vimeo.com https://*.vimeocdn.com;",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), camera=(), microphone=()",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      // Cache static assets for 1 year. Vary on Accept so the WebP rewrite
      // (see `rewrites()` above) doesn't poison caches with the wrong format
      // when a client without WebP support fetches the same URL.
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Vary",
            value: "Accept",
          },
        ],
      },
      // Cache fonts
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache video assets
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
