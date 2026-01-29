import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import blogData from "@/data/blog-posts.json";

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    heroImage: string;
    heroVideo: string | null;
    author: string;
    publishedAt: string;
    readTime: number;
    relatedPosts: string[];
}

interface Category {
    id: string;
    name: string;
    slug: string;
    icon: string;
    color: string;
}

export async function generateStaticParams() {
    return blogData.posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const post = blogData.posts.find((p) => p.slug === params.slug) as BlogPost | undefined;
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
        keywords: [post.primaryKeyword, ...post.secondaryKeywords],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.publishedAt,
            authors: [post.author],
            images: [
                {
                    url: post.heroImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.heroImage],
        },
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogData.posts.find((p) => p.slug === params.slug) as BlogPost | undefined;
    const categories = blogData.categories as Category[];
    const allPosts = blogData.posts as BlogPost[];

    if (!post) {
        notFound();
    }

    const category = categories.find((c) => c.id === post.category);
    const relatedArticles = post.relatedPosts
        .map((slug) => allPosts.find((p) => p.slug === slug))
        .filter(Boolean) as BlogPost[];

    // Article Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: `https://jinbeh.com${post.heroImage}`,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
            "@type": "Organization",
            name: "Jinbeh Japanese Restaurant",
            url: "https://jinbeh.com",
        },
        publisher: {
            "@type": "Organization",
            name: "Jinbeh Japanese Restaurant",
            logo: {
                "@type": "ImageObject",
                url: "https://jinbeh.com/images/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://jinbeh.com/blog/${post.slug}`,
        },
    };

    return (
        <main className="min-h-screen bg-warm-ivory">
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-end">
                {post.heroVideo ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        poster={post.heroImage}
                    >
                        <source src={post.heroVideo} type="video/mp4" />
                    </video>
                ) : (
                    <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 pb-12">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        {category && (
                            <>
                                <Link href={`/blog?category=${category.id}`} className="hover:text-white">
                                    {category.name}
                                </Link>
                                <span>/</span>
                            </>
                        )}
                        <span className="text-warm-ivory/50 truncate max-w-[200px]">{post.title}</span>
                    </nav>

                    {/* Category Badge */}
                    {category && (
                        <Link
                            href={`/blog?category=${category.id}`}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium text-white mb-4"
                            style={{ backgroundColor: category.color }}
                        >
                            {category.icon} {category.name}
                        </Link>
                    )}

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-heading font-bold text-white max-w-4xl hero-headline">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mt-4 text-warm-ivory/70 text-sm">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                        <span>•</span>
                        <span>{post.readTime} min read</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                                {/* Article intro - placeholder for actual content */}
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>

                                    <div className="border-l-4 border-accent-red pl-6 py-4 bg-warm-ivory rounded-r-lg my-8">
                                        <p className="text-charcoal font-medium italic">
                                            "At Jinbeh, we believe every meal should be an experience. Since 1988, our family has been dedicated to bringing authentic Japanese cuisine and entertainment to North Texas."
                                        </p>
                                    </div>

                                    <h2 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">
                                        Why Choose Jinbeh?
                                    </h2>
                                    <p className="text-charcoal/80 leading-relaxed">
                                        With over 37 years of tradition, Jinbeh offers an unmatched dining experience. Our skilled hibachi chefs perform tableside, creating not just a meal but a show. Combined with our fresh sushi bar and warm hospitality, every visit becomes a celebration.
                                    </p>

                                    <h2 className="text-2xl font-heading font-bold text-charcoal mt-8 mb-4">
                                        The Jinbeh Experience
                                    </h2>
                                    <ul className="space-y-3 text-charcoal/80">
                                        <li className="flex items-start gap-3">
                                            <span className="text-accent-red">✓</span>
                                            Family-owned since 1988 with two convenient locations
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-accent-red">✓</span>
                                            Expert hibachi chefs with years of experience
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-accent-red">✓</span>
                                            Fresh sushi prepared daily by skilled sushi chefs
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-accent-red">✓</span>
                                            Perfect for celebrations, date nights, and family gatherings
                                        </li>
                                    </ul>
                                </div>

                                {/* CTA */}
                                <div className="mt-12 p-8 bg-gradient-to-br from-accent-red to-deep-indigo rounded-2xl text-center">
                                    <h3 className="text-2xl font-heading font-bold text-white mb-4">
                                        Ready to Experience Jinbeh?
                                    </h3>
                                    <p className="text-white/90 mb-6">
                                        Reserve your table today at either location.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link
                                            href="/frisco#reserve"
                                            className="btn bg-white text-accent-red hover:bg-warm-ivory px-6 py-3 rounded-xl font-semibold"
                                        >
                                            Reserve at Frisco
                                        </Link>
                                        <Link
                                            href="/lewisville#reserve"
                                            className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-6 py-3 rounded-xl font-semibold"
                                        >
                                            Reserve at Lewisville
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            {/* Related Articles */}
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                                <h3 className="text-lg font-heading font-bold text-charcoal mb-6">
                                    Related Articles
                                </h3>
                                <div className="space-y-4">
                                    {relatedArticles.length > 0 ? (
                                        relatedArticles.map((related) => {
                                            const relatedCat = categories.find((c) => c.id === related.category);
                                            return (
                                                <Link
                                                    key={related.slug}
                                                    href={`/blog/${related.slug}`}
                                                    className="flex gap-4 group"
                                                >
                                                    <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={related.heroImage}
                                                            alt={related.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        {relatedCat && (
                                                            <span className="text-xs font-medium" style={{ color: relatedCat.color }}>
                                                                {relatedCat.icon} {relatedCat.name}
                                                            </span>
                                                        )}
                                                        <h4 className="text-sm font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2">
                                                            {related.title}
                                                        </h4>
                                                    </div>
                                                </Link>
                                            );
                                        })
                                    ) : (
                                        <p className="text-charcoal/60 text-sm">More articles coming soon!</p>
                                    )}
                                </div>

                                {/* Categories */}
                                <div className="mt-8 pt-6 border-t border-warm-ivory-dark">
                                    <h3 className="text-lg font-heading font-bold text-charcoal mb-4">
                                        Categories
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map((cat) => (
                                            <Link
                                                key={cat.id}
                                                href={`/blog?category=${cat.id}`}
                                                className="px-3 py-1 rounded-full text-sm font-medium bg-warm-ivory hover:bg-warm-ivory-dark text-charcoal transition-colors"
                                            >
                                                {cat.icon} {cat.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
