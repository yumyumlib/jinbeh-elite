// Generate responsive webp variants for homepage images.
//
// WHY: the site runs with `images.unoptimized: true` (the Next 16 standalone
// /_next/image optimizer 400's in this build), and a per-image loader is
// overridden by that global flag. So we pre-generate width variants and serve
// them via a native <img srcset> in src/components/RespImage.tsx. This keeps the
// homepage light on cell connections (a phone pulls ~25-30 KB thumbnails
// instead of 100-600 KB originals).
//
// USAGE:  node scripts/generate-responsive.js
// OUTPUT: public/images/responsive/<path>-<width>.webp  (widths: 384/640/828/1200)
//
// Add a src to SRCS below if you put a new image on the homepage, then re-run.

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUB = "public";
const OUTROOT = "public/images/responsive";
const WIDTHS = [384, 640, 828, 1200];

const SRCS = [
  "/images/hero/jinbeh-hero-poster.jpg",
  "/images/OnionVolcanoAndVeggiesOnGrill.webp",
  "/images/catalog/homemade-sauces.jpg",
  "/images/Party.jpg",
  "/images/catalog/12-C060324-6551.jpg",
  "/images/hq/cooking-on-grill.jpg",
  "/images/hq/sushi-rolls-2026.jpg",
  "/images/hq/lewisville-sushi-1.jpg",
  "/images/hq/jinbeh-cocktail.jpg",
  "/images/instagram/lobster-spread-overhead.jpg",
  "/images/instagram/tuna-tower-bar-bokeh.jpg",
  "/images/instagram/sushi-roll-portrait.jpg",
  "/images/instagram/avocado-sunflower.jpg",
  "/images/instagram/crab-pinwheel-roll.jpg",
  "/images/instagram/sushi-feast-flatlay.jpg",
  "/images/instagram/fried-roll-bar-ambiance.jpg",
  "/images/instagram/specialty-roll-closeup.jpg",
  "/images/instagram/hibachi-steak-plate.jpg",
  "/images/instagram/salmon-roll-closeup.jpg",
  "/images/celebrations/jinbeh_group.jpg",
  "/images/instagram/branded-sushi-plate.jpg",
  "/images/instagram/sushi-feast-overhead.jpg",
  "/images/instagram/mochi-desserts.jpg",
  "/images/frisco/FriscoLocation_Bar_Front.jpg",
  "/images/interior/bar.jpg",
];

function findSrc(rel) {
  const base = path.join(PUB, rel.replace(/^\//, ""));
  if (fs.existsSync(base)) return base;
  const noext = base.replace(/\.[^.]+$/, "");
  for (const e of [".webp", ".jpg", ".jpeg", ".png"]) {
    if (fs.existsSync(noext + e)) return noext + e;
  }
  return null;
}

(async () => {
  let made = 0;
  const missing = [];
  for (const s of SRCS) {
    const inp = findSrc(s);
    if (!inp) { missing.push(s); continue; }
    const meta = await sharp(inp).metadata();
    const relNoExt = s.replace(/^\/images\//, "").replace(/\.[^.]+$/, "");
    for (const w of WIDTHS) {
      const outdir = path.join(OUTROOT, path.dirname(relNoExt));
      fs.mkdirSync(outdir, { recursive: true });
      const outp = path.join(OUTROOT, relNoExt + "-" + w + ".webp");
      const targetW = Math.min(w, meta.width || w);
      await sharp(inp).resize({ width: targetW, withoutEnlargement: true }).webp({ quality: 72 }).toFile(outp);
      made++;
    }
  }
  console.log("variants generated:", made);
  if (missing.length) console.log("MISSING SOURCES:", missing.join(", "));
})().catch((e) => { console.error(e); process.exit(1); });
