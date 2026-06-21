import Image from "next/image";

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
