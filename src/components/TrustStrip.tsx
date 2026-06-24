// Additive "As Featured In" trust strip. Brand palette via arbitrary hex so it never
// depends on tailwind config color names. Sits BELOW the hero — does not touch the hero.
//
// NOTE: we reference the pre-generated .webp siblings DIRECTLY (not the .png paths).
// The .png originals route through a fragile Accept-header rewrite, and
// d-magazine-logo.png is actually JPEG bytes served as image/png + nosniff, which
// browsers refuse to decode (rendered as a broken giant box on mobile). The .webp
// files are small, valid, and served as-is. We also hard-cap the size inline so a
// broken/missing image can never balloon to full screen on a phone.
const awards = [
  { src: "/images/awards/d-magazine-logo.webp", alt: "D Magazine Best of Big D winner" },
  { src: "/images/awards/opentable-logo.webp", alt: "OpenTable Diners' Choice award" },
  { src: "/images/awards/eater-logo.webp", alt: "Featured in Eater Dallas" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Awards and recognition" className="bg-[#F6F1E8] border-y border-[#C9A227]/30 py-5">
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3">
        <span className="font-serif text-sm sm:text-base text-[#7A4E2D] whitespace-nowrap">Serving DFW since 1988</span>
        {awards.map((a) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={a.src}
            src={a.src}
            alt={a.alt}
            width={104}
            height={28}
            loading="lazy"
            decoding="async"
            className="object-contain opacity-80 grayscale transition duration-300 hover:grayscale-0"
            style={{ height: "28px", width: "auto", maxHeight: "28px", maxWidth: "104px" }}
          />
        ))}
        <span className="font-serif text-sm sm:text-base text-[#7A4E2D] whitespace-nowrap">#1-Rated Hibachi &middot; Frisco &amp; Lewisville</span>
      </div>
    </section>
  );
}
