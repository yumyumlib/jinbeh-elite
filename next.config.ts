import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployment
  output: 'standalone',

  // Enforce no trailing slash for consistent URLs and canonical hygiene
  trailingSlash: false,

  // Image optimization
  images: {
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

      // Legacy PDF menus → new menu pages (specific rules BEFORE catch-all)
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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.opentable.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; frame-src https://www.opentable.com https://www.google.com; media-src 'self' https://jinbeh.com;",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), camera=(), microphone=()",
          },
        ],
      },
      // Cache static assets for 1 year
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
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
