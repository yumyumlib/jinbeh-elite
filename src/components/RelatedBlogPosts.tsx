import Link from "next/link";
import Image from "next/image";
import blogData from "@/data/blog-posts.json";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  heroImage: string;
  readTime: number;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface RelatedBlogPostsProps {
  // Filter by category IDs
  categories?: string[];
  // Or filter by specific slugs
  slugs?: string[];
  // Maximum number of posts to show
  limit?: number;
  // Section title
  title?: string;
  // Section subtitle
  subtitle?: string;
  // Show only featured posts
  featuredOnly?: boolean;
  // Layout style
  layout?: "grid" | "list" | "compact";
  // Background color
  bgColor?: "white" | "ivory" | "charcoal";
}

export default function RelatedBlogPosts({
  categories,
  slugs,
  limit = 3,
  title = "From Our Blog",
  subtitle,
  featuredOnly = false,
  layout = "grid",
  bgColor = "ivory",
}: RelatedBlogPostsProps) {
  const allPosts = blogData.posts as BlogPost[];
  const allCategories = blogData.categories as Category[];

  // Filter posts
  let filteredPosts = allPosts;

  if (slugs && slugs.length > 0) {
    filteredPosts = allPosts.filter((post) => slugs.includes(post.slug));
  } else if (categories && categories.length > 0) {
    filteredPosts = allPosts.filter((post) => categories.includes(post.category));
  }

  if (featuredOnly) {
    filteredPosts = filteredPosts.filter((post) => (post as unknown as { featured?: boolean }).featured);
  }

  const posts = filteredPosts.slice(0, limit);

  if (posts.length === 0) return null;

  const bgClasses = {
    white: "bg-white",
    ivory: "bg-warm-ivory",
    charcoal: "bg-charcoal text-warm-ivory",
  };

  const textClasses = {
    white: "text-charcoal",
    ivory: "text-charcoal",
    charcoal: "text-warm-ivory",
  };

  const getCategoryInfo = (categoryId: string) => {
    return allCategories.find((c) => c.id === categoryId);
  };

  return (
    <section className={`py-16 ${bgClasses[bgColor]}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className={`text-3xl font-heading font-bold mb-3 ${textClasses[bgColor]}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`${bgColor === "charcoal" ? "text-warm-ivory/70" : "text-charcoal/70"}`}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid Layout */}
        {layout === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const category = getCategoryInfo(post.category);
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
                      <span className="text-sm text-accent-red font-medium">
                        Read more →
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}

        {/* List Layout */}
        {layout === "list" && (
          <div className="space-y-6">
            {posts.map((post) => {
              const category = getCategoryInfo(post.category);
              return (
                <article
                  key={post.slug}
                  className="group flex flex-col md:flex-row gap-6 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                >
                  <Link href={`/blog/${post.slug}`} className="md:w-1/3">
                    <div className="relative aspect-[16/10] md:aspect-square overflow-hidden">
                      <Image
                        src={post.heroImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  <div className="flex-1 p-6 md:py-8">
                    {category && (
                      <span
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
                        style={{ backgroundColor: category.color }}
                      >
                        {category.icon} {category.name}
                      </span>
                    )}
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-heading font-semibold text-charcoal mb-2 group-hover:text-accent-red transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-charcoal/70 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-accent-red font-medium hover:underline"
                    >
                      Read article →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Compact Layout */}
        {layout === "compact" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.map((post) => {
              const category = getCategoryInfo(post.category);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex items-start gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                >
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    {category && (
                      <span className="text-xs font-medium" style={{ color: category.color }}>
                        {category.icon} {category.name}
                      </span>
                    )}
                    <h3 className="font-medium text-charcoal group-hover:text-accent-red transition-colors line-clamp-2 mt-1">
                      {post.title}
                    </h3>
                    <span className="text-xs text-charcoal/70 mt-1 block">
                      {post.readTime} min read
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* View All Link */}
        <div className="mt-10 text-center">
          <Link
            href={categories && categories.length === 1 ? `/blog?category=${categories[0]}` : "/blog"}
            className={`inline-flex items-center gap-2 font-medium ${
              bgColor === "charcoal"
                ? "text-soft-gold hover:text-warm-ivory"
                : "text-accent-red hover:text-accent-red-hover"
            } transition-colors`}
          >
            View all articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
