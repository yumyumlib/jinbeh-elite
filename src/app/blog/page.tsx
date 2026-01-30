import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import blogData from "@/data/blog-posts.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Blog | Jinbeh Japanese Restaurant",
    description:
        "Explore Japanese cuisine, hibachi tips, sushi guides, sake pairings and more. Discover the art of Japanese dining at Jinbeh.",
    openGraph: {
        title: "Jinbeh Blog | Japanese Dining Tips & Guides",
        description: "Your guide to hibachi, sushi, sake and Japanese cuisine.",
        url: "https://jinbeh.com/blog",
    },
};

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    heroImage: string;
    publishedAt: string;
    readTime: number;
    featured: boolean;
}

interface Category {
    id: string;
    name: string;
    slug: string;
    icon: string;
    color: string;
}

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}) {
    const { category } = await searchParams;
    const activeCategory = category || "all";
    const categories = blogData.categories as Category[];
    const allPosts = blogData.posts as BlogPost[];

    const filteredPosts = activeCategory === "all"
        ? allPosts
        : allPosts.filter((post) => post.category === activeCategory);

    const featuredPosts = allPosts.filter((post) => post.featured);

    return (
        <>
        <Header />
        <main className="min-h-screen bg-warm-ivory">
            {/* Hero Header */}
            <section className="bg-charcoal text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 hero-headline">
                            Jinbeh Blog
                        </h1>
                        <p className="text-lg text-warm-ivory/80 text-readable">
                            Your guide to Japanese cuisine, hibachi experiences, sushi tips,
                            and the art of dining well.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="sticky top-0 z-40 bg-white border-b border-warm-ivory-dark shadow-sm">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
                        <Link
                            href="/blog"
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeCategory === "all"
                                    ? "bg-accent-red text-white"
                                    : "bg-warm-ivory hover:bg-warm-ivory-dark text-charcoal"
                                }`}
                        >
                            All Posts
                        </Link>
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/blog?category=${cat.id}`}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${activeCategory === cat.id
                                        ? "text-white"
                                        : "bg-warm-ivory hover:bg-warm-ivory-dark text-charcoal"
                                    }`}
                                style={{
                                    backgroundColor:
                                        activeCategory === cat.id ? cat.color : undefined,
                                }}
                            >
                                <span>{cat.icon}</span>
                                {cat.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </section>

            {/* Featured Posts (only show on "all") */}
            {activeCategory === "all" && featuredPosts.length > 0 && (
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl font-heading font-bold text-charcoal mb-8">
                            Featured Articles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredPosts.slice(0, 4).map((post) => {
                                const category = categories.find((c) => c.id === post.category);
                                return (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group relative rounded-2xl overflow-hidden bg-charcoal aspect-[4/5] flex flex-col justify-end"
                                    >
                                        <div className="absolute inset-0">
                                            <Image
                                                src={post.heroImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                        </div>
                                        <div className="relative z-10 p-6">
                                            {category && (
                                                <span
                                                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
                                                    style={{ backgroundColor: category.color }}
                                                >
                                                    {category.icon} {category.name}
                                                </span>
                                            )}
                                            <h3 className="text-lg font-heading font-semibold text-white mb-2 group-hover:text-soft-gold transition-colors line-clamp-2 text-shadow-md">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-warm-ivory/70">
                                                {post.readTime} min read
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* All Posts Grid */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-heading font-bold text-charcoal">
                            {activeCategory === "all"
                                ? "All Articles"
                                : categories.find((c) => c.id === activeCategory)?.name}
                        </h2>
                        <span className="text-charcoal/60">
                            {filteredPosts.length} article{filteredPosts.length !== 1 && "s"}
                        </span>
                    </div>

                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => {
                                const category = categories.find((c) => c.id === post.category);
                                return (
                                    <article
                                        key={post.slug}
                                        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
                                    >
                                        <Link href={`/blog/${post.slug}`}>
                                            <div className="relative aspect-[16/10] overflow-hidden">
                                                <Image
                                                    src={post.heroImage}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                {category && (
                                                    <span
                                                        className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white"
                                                        style={{ backgroundColor: category.color }}
                                                    >
                                                        {category.icon} {category.name}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-lg font-heading font-semibold text-charcoal mb-2 group-hover:text-accent-red transition-colors line-clamp-2">
                                                    {post.title}
                                                </h3>
                                                <p className="text-charcoal/70 text-sm line-clamp-2 mb-4">
                                                    {post.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between text-xs text-charcoal/50">
                                                    <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                                                    <span>{post.readTime} min read</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </article>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-charcoal/60 text-lg">
                                No articles in this category yet. Check back soon!
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-4">
                        Ready for the Experience?
                    </h2>
                    <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                        Join us at Jinbeh for hibachi entertainment, fresh sushi, and
                        unforgettable moments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/frisco#reserve"
                            className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-3 rounded-xl font-semibold"
                        >
                            Reserve at Frisco
                        </Link>
                        <Link
                            href="/lewisville#reserve"
                            className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-3 rounded-xl font-semibold"
                        >
                            Reserve at Lewisville
                        </Link>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
}
