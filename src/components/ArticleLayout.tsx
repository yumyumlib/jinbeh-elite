import Link from "next/link";
import Image from "next/image";
import { ReadingProgress, ArticleReveal } from "@/components/ArticleEnhancements";
import { ShimmerCTA, ShinyBadge } from "@/components/MagicUI";
import { BorderBeam } from "@/components/ui/BorderBeam";

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleLayoutProps {
  title: string;
  metaDescription: string;
  heroImage?: string;
  heroAlt?: string;
  category: string;
  categorySlug: string;
  slug: string;
  publishDate: string;
  readTime: string;
  faqs?: FAQItem[];
  keyTakeaway?: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  metaDescription,
  heroImage,
  heroAlt,
  category,
  categorySlug,
  slug,
  publishDate,
  readTime,
  faqs,
  keyTakeaway,
  children,
}: ArticleLayoutProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jinbeh.com/blog" },
      { "@type": "ListItem", "position": 3, "name": category, "item": `https://jinbeh.com/blog/category/${categorySlug}` },
      { "@type": "ListItem", "position": 4, "name": title },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": metaDescription,
    "image": heroImage ? `https://jinbeh.com${heroImage}` : "https://jinbeh.com/images/jinbeh-og.jpg",
    "datePublished": publishDate,
    "author": { "@type": "Organization", "name": "Jinbeh Japanese Restaurant" },
    "publisher": {
      "@type": "Organization",
      "name": "Jinbeh Japanese Restaurant",
      "logo": { "@type": "ImageObject", "url": "https://jinbeh.com/images/logos/jinbeh-logo.png" },
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://jinbeh.com/blog/${slug}` },
  };

  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ReadingProgress />
      {/* Breadcrumb — fade in from left */}
      <nav className="bg-soft-white border-b border-warm-ivory">
        <div className="container mx-auto px-6 py-3">
          <ArticleReveal direction="left" delay={0}>
            <ol className="flex items-center gap-2 text-sm text-charcoal/80">
              <li>
                <Link href="/" className="hover:text-accent-red transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-accent-red transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href={`/blog/category/${categorySlug}`}
                  className="hover:text-accent-red transition-colors"
                >
                  {category}
                </Link>
              </li>
              <li>/</li>
              <li className="text-charcoal font-medium truncate max-w-[200px]">
                {title}
              </li>
            </ol>
          </ArticleReveal>
        </div>
      </nav>

      <main>
        <article className="bg-soft-white">
          {/* Hero Section — staggered entrance */}
          <header className="container mx-auto px-6 py-8 md:py-12">
            <div className="max-w-4xl mx-auto">
              <ArticleReveal delay={100}>
                <div className="flex items-center gap-4 mb-6">
                  <Link
                    href={`/blog/category/${categorySlug}`}
                    className="bg-accent-red/10 text-accent-red px-4 py-1 rounded-full text-sm font-medium hover:bg-accent-red/20 transition-colors"
                  >
                    <ShinyBadge>{category}</ShinyBadge>
                  </Link>
                  <span className="text-charcoal/70 text-sm">{readTime}</span>
                  <span className="text-charcoal/70 text-sm">•</span>
                  <time className="text-charcoal/70 text-sm">{publishDate}</time>
                </div>
              </ArticleReveal>

              <ArticleReveal delay={200} blur>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                  {title}
                </h1>
              </ArticleReveal>

              <ArticleReveal delay={350}>
                <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed">
                  {metaDescription}
                </p>
              </ArticleReveal>
            </div>
          </header>

          {/* Hero Image — scale-in with blur clear */}
          {heroImage && (
            <ArticleReveal delay={400} blur>
              <div className="container mx-auto px-6 mb-8 md:mb-12">
                <div className="max-w-5xl mx-auto">
                  <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-lg article-hero-image">
                    <Image
                      src={heroImage}
                      alt={heroAlt || title}
                      fill
                      className="object-cover"
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                    />
                  </div>
                </div>
              </div>
            </ArticleReveal>
          )}

          {/* Article Content */}
          <div className="container mx-auto px-6 pb-12 md:pb-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-charcoal max-w-none article-prose">
                {/* Key Takeaway Box — slide in with accent border */}
                {keyTakeaway && (
                  <ArticleReveal direction="left" delay={100}>
                    <div className="not-prose relative bg-soft-gold/10 border-l-4 border-soft-gold rounded-r-xl p-5 md:p-6 mb-8 md:mb-10 overflow-hidden">
                      <BorderBeam size={150} duration={8} borderWidth={1.5} />
                      <div className="flex items-start gap-3 relative z-10">
                        <span className="text-2xl flex-shrink-0">💡</span>
                        <div>
                          <p className="font-heading font-bold text-charcoal text-sm uppercase tracking-wider mb-1">Key Takeaway</p>
                          <p className="text-charcoal/80 leading-relaxed">{keyTakeaway}</p>
                        </div>
                      </div>
                    </div>
                  </ArticleReveal>
                )}
                {children}
              </div>

              {/* FAQ Section */}
              {faqs && faqs.length > 0 && (
                <section className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-warm-ivory">
                  <ArticleReveal>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-6 md:mb-8">
                      Frequently Asked Questions
                    </h2>
                  </ArticleReveal>
                  <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                      <ArticleReveal key={index} delay={index * 80}>
                        <details
                          className="group bg-warm-ivory/30 rounded-xl p-5 md:p-6 faq-accordion"
                        >
                          <summary className="font-semibold text-base md:text-lg text-charcoal cursor-pointer list-none flex items-center justify-between gap-4">
                            {faq.question}
                            <span className="text-accent-red group-open:rotate-180 transition-transform duration-300 flex-shrink-0">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </summary>
                          <p className="mt-4 text-charcoal/80 leading-relaxed">
                            {faq.answer}
                          </p>
                        </details>
                      </ArticleReveal>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA Section */}
              <ArticleReveal delay={100}>
                <section className="mt-12 md:mt-16 bg-gradient-to-br from-charcoal to-deep-indigo rounded-2xl p-6 md:p-8 lg:p-12 text-center">
                  <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-warm-ivory mb-4">
                    Ready to Experience Jinbeh?
                  </h2>
                  <p className="text-warm-ivory/80 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
                    Join us for an unforgettable hibachi dinner and a show. Family-owned since 1988,
                    serving North Texas with authentic Japanese cuisine and warm hospitality.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <Link href="/reservations">
                      <ShimmerCTA className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold">
                        Make a Reservation
                      </ShimmerCTA>
                    </Link>
                    <Link
                      href="/menu"
                      className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-warm-ivory/10 text-warm-ivory font-semibold rounded-lg hover:bg-warm-ivory/20 transition-colors border border-warm-ivory/30 text-sm md:text-base"
                    >
                      View Our Menu
                    </Link>
                  </div>
                </section>
              </ArticleReveal>

              {/* Related Articles */}
              <section className="mt-12 md:mt-16">
                <ArticleReveal>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-charcoal mb-4 md:mb-6">
                    Related Articles
                  </h2>
                </ArticleReveal>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  <ArticleReveal delay={0}>
                    <Link
                      href="/blog/types-of-sushi"
                      className="group bg-warm-ivory/30 rounded-xl p-5 md:p-6 hover:bg-warm-ivory/50 transition-all duration-300 hover:shadow-md block"
                    >
                      <span className="text-accent-red text-sm font-medium">
                        Japanese Cuisine
                      </span>
                      <h3 className="font-heading font-semibold text-base md:text-lg text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                        Types of Sushi: Must-Try Varieties and Rolls
                      </h3>
                    </Link>
                  </ArticleReveal>
                  <ArticleReveal delay={80}>
                    <Link
                      href="/blog/hibachi-birthday-party-ideas"
                      className="group bg-warm-ivory/30 rounded-xl p-5 md:p-6 hover:bg-warm-ivory/50 transition-all duration-300 hover:shadow-md block"
                    >
                      <span className="text-accent-red text-sm font-medium">
                        Celebrations
                      </span>
                      <h3 className="font-heading font-semibold text-base md:text-lg text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                        Hibachi Birthday Party Ideas: Ultimate Guide
                      </h3>
                    </Link>
                  </ArticleReveal>
                  <ArticleReveal delay={160}>
                    <Link
                      href="/blog/discover-teppanyaki"
                      className="group bg-warm-ivory/30 rounded-xl p-5 md:p-6 hover:bg-warm-ivory/50 transition-all duration-300 hover:shadow-md block"
                    >
                      <span className="text-accent-red text-sm font-medium">
                        Japanese Cuisine
                      </span>
                      <h3 className="font-heading font-semibold text-base md:text-lg text-charcoal mt-2 group-hover:text-accent-red transition-colors">
                        Discover Teppanyaki: A Japanese Culinary Art
                      </h3>
                    </Link>
                  </ArticleReveal>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
