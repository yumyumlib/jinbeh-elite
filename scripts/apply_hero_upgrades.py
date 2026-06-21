#!/usr/bin/env python3
"""
Apply the audited hero-image upgrades to the Jinbeh site. Idempotent + safe to re-run.
Run from repo root:  python3 scripts/apply_hero_upgrades.py
Does:
  1) Swap each page's hero image to the audited "best" image (page.tsx + menu-items data).
  2) Update the alt text of each swapped <Image> (best-effort, keyword-rich).
  3) Generate responsive 768/1280/1920w WebP variants for every new hero image.
  4) Create + wire the additive TrustStrip ("As Featured In") below the homepage hero.
  5) Write HERO_SWAP_CHANGELOG_2026-06-20.md listing every change.
Skips: the 3 gradient pages (order-online/reservations/vip) and any page with no detectable
       current hero (handled manually). Never changes the homepage HERO image.
"""
import os, re, json, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public")
MAP = json.load(open(os.path.join(ROOT, "scripts", "hero_swap_map.json")))
changelog = []

TRUSTSTRIP_TSX = '''import Image from "next/image";

// Additive "As Featured In" trust strip. Brand palette via arbitrary hex so it never
// depends on tailwind config color names. Sits BELOW the hero — does not touch the hero.
const awards = [
  { src: "/images/awards/d-magazine-logo.png", alt: "D Magazine Best of Big D winner" },
  { src: "/images/awards/opentable-logo.png", alt: "OpenTable Diners' Choice award" },
  { src: "/images/awards/eater-logo.png", alt: "Featured in Eater Dallas" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Awards and recognition" className="bg-[#F6F1E8] border-y border-[#C9A227]/30 py-5">
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <span className="font-serif text-sm sm:text-base text-[#7A4E2D] whitespace-nowrap">Serving DFW since 1988</span>
        {awards.map((a) => (
          <Image key={a.src} src={a.src} alt={a.alt} width={104} height={30}
            className="h-7 w-auto object-contain opacity-80 grayscale hover:grayscale-0 transition duration-300" />
        ))}
        <span className="font-serif text-sm sm:text-base text-[#7A4E2D] whitespace-nowrap">#1-Rated Hibachi &middot; Frisco &amp; Lewisville</span>
      </div>
    </section>
  );
}
'''

BLOGSEOBOOST_TSX = '''"use client";
import { usePathname } from "next/navigation";
import PageSeoBoost from "@/components/PageSeoBoost";

// Renders the per-route unique SEO content section on blog posts, which share
// src/app/blog/layout.tsx and have no per-page <Footer> anchor. Delegates to
// PageSeoBoost (which renders nothing when no content exists for the route).
export default function BlogSeoBoost() {
  const pathname = usePathname();
  return <PageSeoBoost route={pathname || ""} />;
}
'''

def update_alt(txt, newpath, alt):
    esc = re.escape(newpath)
    for pat in [
        r'(<(?:Resp)?Image\b[^>]*?src=["\']' + esc + r'["\'][^>]*?\balt=["\'])[^"\']*(["\'])',
        r'(<(?:Resp)?Image\b[^>]*?\balt=["\'])[^"\']*(["\'][^>]*?src=["\']' + esc + r'["\'])',
    ]:
        new, n = re.subn(pat, lambda m: m.group(1) + alt + m.group(2), txt, count=1, flags=re.S)
        if n:
            return new
    return txt

# 1) + 2) hero swaps + alt
for s in MAP:
    if s.get("mechanism") == "gradient_skip":
        continue
    fp = os.path.join(ROOT, s["file"])
    if not os.path.exists(fp):
        continue
    if s["new"].startswith("/images/") and not os.path.exists(PUB + s["new"]):
        continue  # safety: never point at a missing image
    txt = open(fp, encoding="utf-8").read()
    orig = txt
    if s["mechanism"] == "menu_items":
        txt = re.sub(r"(slug:\s*'" + re.escape(s["slug"]) + r"'.*?heroImage:\s*')[^']+(')",
                     lambda m: m.group(1) + s["new"] + m.group(2), txt, count=1, flags=re.S)
    elif s["mechanism"] == "page_src":
        if not s.get("old") or s["old"] not in txt:
            continue
        txt = txt.replace(s["old"], s["new"])
        if s.get("alt"):
            txt = update_alt(txt, s["new"], s["alt"])
    if txt != orig:
        open(fp, "w", encoding="utf-8").write(txt)
        changelog.append((s["route"], s["file"], s.get("old", ""), s["new"]))

# 3) responsive webp variants for every new image
news = sorted({s["new"] for s in MAP if s.get("new", "").startswith("/images/")})
variants = 0
for rel in news:
    src = PUB + rel
    if not os.path.exists(src):
        continue
    stem, _ = os.path.splitext(src)
    for w in (768, 1280, 1920):
        out = f"{stem}-{w}w.webp"
        if not os.path.exists(out):
            subprocess.run(["convert", src, "-resize", f"{w}x{w}>", "-strip", "-quality", "80", out], check=False)
            variants += 1

# 4) TrustStrip component + wire below homepage hero (additive; hero untouched)
comp = os.path.join(ROOT, "src/components/TrustStrip.tsx")
if not os.path.exists(comp):
    open(comp, "w", encoding="utf-8").write(TRUSTSTRIP_TSX)
page = os.path.join(ROOT, "src/app/page.tsx")
pt = open(page, encoding="utf-8").read()
if "TrustStrip" not in pt and "<HeroSection />" in pt:
    pt = pt.replace('import HeroSection from "@/components/HeroSection";',
                    'import HeroSection from "@/components/HeroSection";\nimport TrustStrip from "@/components/TrustStrip";', 1)
    pt = pt.replace("<HeroSection />", "<HeroSection />\n        <TrustStrip />", 1)
    open(page, "w", encoding="utf-8").write(pt)

# 4c) wire BlogSeoBoost into the shared blog layout (covers ALL blog posts in one place)
blogcomp = os.path.join(ROOT, "src/components/BlogSeoBoost.tsx")
if not os.path.exists(blogcomp):
    open(blogcomp, "w", encoding="utf-8").write(BLOGSEOBOOST_TSX)
bl = os.path.join(ROOT, "src/app/blog/layout.tsx")
if os.path.exists(bl):
    blt = open(bl, encoding="utf-8").read()
    if "BlogSeoBoost" not in blt:
        blt = blt.replace('import Footer from "@/components/Footer";',
                          'import Footer from "@/components/Footer";\nimport BlogSeoBoost from "@/components/BlogSeoBoost";', 1)
        blt = re.sub(r'(\n(\s*)<Footer\s*/>)', lambda m: "\n" + m.group(2) + "<BlogSeoBoost />" + m.group(1), blt, count=1)
        open(bl, "w", encoding="utf-8").write(blt)

# 4b) inject PageSeoBoost (unique per-page content + FAQ) for routes that have content
content_src = os.path.join(ROOT, "src/data/page-seo-content.ts")
injected = 0
if os.path.exists(content_src):
    content_routes = re.findall(r'^\s{2}"(/[^"]*)":\s*\{', open(content_src, encoding="utf-8").read(), re.M)
    for route in content_routes:
        rel = "src/app" + ("" if route == "/" else route) + "/page.tsx"
        fp = os.path.join(ROOT, rel)
        if not os.path.exists(fp):
            continue
        txt = open(fp, encoding="utf-8").read()
        orig = txt
        if "PageSeoBoost" in txt or "<Footer" not in txt:
            continue  # already done, or no safe anchor
        m = re.search(r'^import .*?;\n', txt, re.M)
        if m:
            txt = txt[:m.end()] + 'import PageSeoBoost from "@/components/PageSeoBoost";\n' + txt[m.end():]
        def _ins(mm, _r=route):
            return "\n" + mm.group(2) + '<PageSeoBoost route="' + _r + '" />' + mm.group(1)
        txt = re.sub(r'(\n(\s*)<Footer)', _ins, txt, count=1)
        if txt != orig:
            open(fp, "w", encoding="utf-8").write(txt)
            injected += 1

# 5) changelog
open(os.path.join(ROOT, "HERO_SWAP_CHANGELOG_2026-06-20.md"), "w", encoding="utf-8").write(
    "# Hero Swap Changelog (2026-06-20)\n\n"
    + f"{len(changelog)} hero swaps applied; {variants} responsive variants generated; "
    + f"{injected} unique SEO content sections injected; TrustStrip wired below homepage hero.\n\n"
    + "\n".join(f"- `{r}` ({f}): `{o}` -> `{n}`" for r, f, o, n in changelog) + "\n")

print(f"DONE: {len(changelog)} hero swaps | {variants} responsive variants | {injected} SEO content sections | TrustStrip added.")
