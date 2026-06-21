"use client";
import { usePathname } from "next/navigation";
import PageSeoBoost from "@/components/PageSeoBoost";

// Renders the per-route unique SEO content section on blog posts, which share
// src/app/blog/layout.tsx and have no per-page <Footer> anchor. Delegates to
// PageSeoBoost (which renders nothing when no content exists for the route).
export default function BlogSeoBoost() {
  const pathname = usePathname();
  return <PageSeoBoost route={pathname || ""} />;
}
