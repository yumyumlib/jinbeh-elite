import Image from "next/image";
import seoContent, { type SeoContentEntry } from "@/data/page-seo-content";

/**
 * Renders a unique, page-specific SEO content section (heading + paragraphs + FAQ)
 * pulled from src/data/page-seo-content.ts, keyed by route. Renders nothing when the
 * route has no entry, so it is safe to drop onto any page. Visible content only —
 * it does NOT emit a second FAQPage JSON-LD, to avoid duplicate-schema conflicts with
 * pages that already ship FAQ schema. Brand palette via arbitrary hex (config-independent).
 */
export default function PageSeoBoost({ route }: { route: string }) {
  const c: SeoContentEntry | undefined = (seoContent as Record<string, SeoContentEntry>)[route];
  if (!c) return null;
  return (
    <section aria-label="More about this page" className="bg-[#F6F1E8] py-12 sm:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl text-[#1F1F1F] mb-5">{c.heading}</h2>
        {c.image && (
          <figure className="sm:float-right sm:ml-6 mb-5 mx-auto max-w-[240px] sm:max-w-[300px]">
            <Image
              src={c.image}
              alt={c.imageAlt || c.heading}
              width={300}
              height={400}
              sizes="(max-width: 640px) 240px, 300px"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
            {c.imageCaption && (
              <figcaption className="text-xs text-[#1F1F1F]/60 mt-2 text-center">{c.imageCaption}</figcaption>
            )}
          </figure>
        )}
        {c.paragraphs.map((p, i) => (
          <p key={i} className="text-[#1F1F1F]/90 leading-relaxed mb-4">{p}</p>
        ))}
        {c.faqs && c.faqs.length > 0 && (
          <div className="mt-8">
            <h3 className="font-serif text-xl text-[#7A4E2D] mb-3">Frequently Asked Questions</h3>
            {c.faqs.map((f, i) => (
              <details key={i} className="border-b border-[#C9A227]/30 py-3">
                <summary className="font-medium text-[#1F1F1F] cursor-pointer">{f.q}</summary>
                <p className="text-[#1F1F1F]/85 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
