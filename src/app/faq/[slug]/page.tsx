import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import paaData from "@/data/paa-content.json";

// ---- TYPES ----
interface InternalLink {
    label: string;
    url: string;
}
interface PaaQuestion {
    slug: string;
    question: string;
    cluster: string;
    primaryKeyword: string;
    answer: string;
    expandedContent?: string;
    relatedQuestionSlugs?: string[];
    internalLinks?: InternalLink[];
    metaTitle?: string;
    metaDescription?: string;
}
interface Cluster {
    id: string;
    name: string;
    description: string;
    icon?: string;
}

const questions = paaData.questions as PaaQuestion[];
const clusters = paaData.clusters as Cluster[];

// ---- STATIC PARAMS ----
export async function generateStaticParams() {
    return questions.map((q) => ({ slug: q.slug }));
}

// ---- METADATA ----
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const q = questions.find((x) => x.slug === slug);
    if (!q) return {};

    return {
        title: q.metaTitle ?? `${q.question} | Jinbeh Japanese Restaurant`,
        description:
            q.metaDescription ??
            q.answer.substring(0, 155).replace(/\s+\S*$/, "") + "...",
        keywords: [q.primaryKeyword, "jinbeh", "japanese restaurant frisco", "japanese restaurant lewisville"],
        alternates: {
            canonical: `https://jinbeh.com/faq/${q.slug}`,
        },
        openGraph: {
            title: q.metaTitle ?? `${q.question} | Jinbeh Japanese Restaurant`,
            description: q.metaDescription ?? q.answer.substring(0, 155),
            type: "article",
            url: `https://jinbeh.com/faq/${q.slug}`,
        },
    };
}

// ---- PAGE ----
export default async function PaaPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const q = questions.find((x) => x.slug === slug);
    if (!q) notFound();

    const cluster = clusters.find((c) => c.id === q.cluster);
    const related = (q.relatedQuestionSlugs ?? [])
        .map((s) => questions.find((x) => x.slug === s))
        .filter(Boolean) as PaaQuestion[];

    // FAQPage schema — the H1 must EXACTLY match q.question per AEO best practice
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: q.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: q.answer,
                },
            },
            ...related.map((r) => ({
                "@type": "Question",
                name: r.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: r.answer,
                },
            })),
        ],
    };

    // BreadcrumbList schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
            { "@type": "ListItem", position: 2, name: "FAQ", item: "https://jinbeh.com/faq" },
            ...(cluster
                ? [{ "@type": "ListItem", position: 3, name: cluster.name, item: `https://jinbeh.com/faq#${cluster.id}` }]
                : []),
            { "@type": "ListItem", position: cluster ? 4 : 3, name: q.question, item: `https://jinbeh.com/faq/${q.slug}` },
        ],
    };

    return (
        <>
            <Header />
            <main id="main-content" className="min-h-screen bg-warm-ivory">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />

                <div className="container mx-auto max-w-3xl px-4 py-8 md:py-12">
                    <BreadcrumbNav
                        items={[
                            { label: "FAQ", href: "/faq" },
                            ...(cluster ? [{ label: cluster.name, href: `/faq#${cluster.id}` }] : []),
                            { label: q.question, href: `/faq/${q.slug}` },
                        ]}
                    />

                    {cluster && (
                        <div className="mt-4 mb-2">
                            <Link
                                href={`/faq#${cluster.id}`}
                                className="text-sm text-rich-charcoal/60 hover:text-imperial-red transition uppercase tracking-wider"
                            >
                                {cluster.icon} {cluster.name}
                            </Link>
                        </div>
                    )}

                    {/* H1 — must exactly match the question for AEO citation */}
                    <h1 className="font-serif text-3xl md:text-5xl text-rich-charcoal leading-tight mt-2 mb-6">
                        {q.question}
                    </h1>

                    {/* The 120-word direct answer block — first paragraph is what AI evaluates */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg md:text-xl text-rich-charcoal leading-relaxed font-medium">
                            {q.answer}
                        </p>

                        {q.expandedContent && (
                            <div className="mt-6 text-base text-rich-charcoal/85 leading-relaxed">
                                {q.expandedContent.split("\n\n").map((para, i) => (
                                    <p key={i} className="mb-4">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Internal links to commercial pages — AI follows these */}
                    {q.internalLinks && q.internalLinks.length > 0 && (
                        <div className="mt-10 p-6 bg-cream/40 border border-traditional-gold/20 rounded-lg">
                            <h2 className="font-serif text-xl text-rich-charcoal mb-4">
                                Continue exploring
                            </h2>
                            <ul className="space-y-2">
                                {q.internalLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.url}
                                            className="text-imperial-red hover:text-traditional-gold underline-offset-2 hover:underline transition"
                                        >
                                            → {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Related questions within the cluster */}
                    {related.length > 0 && (
                        <div className="mt-10">
                            <h2 className="font-serif text-2xl text-rich-charcoal mb-4">
                                Related questions
                            </h2>
                            <div className="grid gap-3 md:grid-cols-2">
                                {related.map((r) => (
                                    <Link
                                        key={r.slug}
                                        href={`/faq/${r.slug}`}
                                        className="block p-4 bg-white border border-rich-charcoal/10 rounded-lg hover:border-imperial-red/40 hover:shadow-md transition"
                                    >
                                        <p className="font-medium text-rich-charcoal">
                                            {r.question}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="mt-12 p-6 bg-rich-charcoal text-warm-ivory rounded-lg text-center">
                        <p className="font-serif text-xl mb-4">
                            Ready to experience Jinbeh?
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link
                                href="/reservations"
                                className="inline-block px-6 py-2 bg-imperial-red text-warm-ivory rounded hover:bg-traditional-gold transition"
                            >
                                Reserve a table
                            </Link>
                            <Link
                                href="/menu"
                                className="inline-block px-6 py-2 border border-warm-ivory text-warm-ivory rounded hover:bg-warm-ivory hover:text-rich-charcoal transition"
                            >
                                View the menu
                            </Link>
                            <Link
                                href="/faq"
                                className="inline-block px-6 py-2 border border-warm-ivory/40 text-warm-ivory/80 rounded hover:bg-warm-ivory/10 transition"
                            >
                                All FAQs
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
