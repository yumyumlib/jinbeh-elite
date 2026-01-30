import Link from "next/link";
import Image from "next/image";
import contentClusters from "@/data/content-clusters.json";

interface RelatedArticlesProps {
  currentSlug: string;
  maxArticles?: number;
}

interface Article {
  slug: string;
  title: string;
  priority: number;
}

interface Cluster {
  name: string;
  pillarPage: string;
  description: string;
  keywords: string[];
  articles: Article[];
}

// Get cluster for a given article slug
function getClusterForArticle(slug: string): { cluster: Cluster; clusterKey: string } | null {
  for (const [key, cluster] of Object.entries(contentClusters.clusters)) {
    const typedCluster = cluster as Cluster;
    if (typedCluster.articles.some((a) => a.slug === slug)) {
      return { cluster: typedCluster, clusterKey: key };
    }
  }
  return null;
}

// Get related articles from the same cluster
function getRelatedArticles(currentSlug: string, maxArticles: number = 4): Article[] {
  const clusterInfo = getClusterForArticle(currentSlug);
  if (!clusterInfo) return [];

  const { cluster } = clusterInfo;

  // Filter out current article, sort by priority, take max
  return cluster.articles
    .filter((a) => a.slug !== currentSlug)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, maxArticles);
}

// Get cross-cluster recommendations (from different but related clusters)
function getCrossClusterArticles(currentSlug: string, maxArticles: number = 2): Article[] {
  const clusterInfo = getClusterForArticle(currentSlug);
  if (!clusterInfo) return [];

  const { clusterKey } = clusterInfo;

  // Define related cluster mappings
  const relatedClusters: Record<string, string[]> = {
    "hibachi": ["sushi", "catering", "celebrations"],
    "sushi": ["hibachi", "sake-drinks", "frisco"],
    "sake-drinks": ["sushi", "hibachi", "frisco"],
    "celebrations": ["hibachi", "private-dining", "catering"],
    "private-dining": ["celebrations", "catering", "hibachi"],
    "catering": ["hibachi", "celebrations", "private-dining"],
    "frisco": ["sushi", "hibachi", "celebrations"],
    "lewisville": ["sushi", "hibachi", "celebrations"],
    "dallas-dining": ["sushi", "hibachi", "frisco"],
    "jinbeh-services": ["catering", "celebrations", "hibachi"],
  };

  const related = relatedClusters[clusterKey] || [];
  const crossArticles: Article[] = [];

  for (const relatedKey of related) {
    const relatedCluster = contentClusters.clusters[relatedKey as keyof typeof contentClusters.clusters] as Cluster;
    if (relatedCluster) {
      // Get top priority article from related cluster
      const topArticle = relatedCluster.articles
        .sort((a, b) => a.priority - b.priority)[0];
      if (topArticle) {
        crossArticles.push(topArticle);
      }
    }
    if (crossArticles.length >= maxArticles) break;
  }

  return crossArticles.slice(0, maxArticles);
}

export default function RelatedArticles({ currentSlug, maxArticles = 4 }: RelatedArticlesProps) {
  const clusterInfo = getClusterForArticle(currentSlug);
  const relatedArticles = getRelatedArticles(currentSlug, maxArticles);
  const crossClusterArticles = getCrossClusterArticles(currentSlug, 2);

  if (relatedArticles.length === 0 && crossClusterArticles.length === 0) {
    return null;
  }

  return (
    <aside className="bg-warm-ivory rounded-2xl p-6 lg:p-8">
      {/* Cluster Info */}
      {clusterInfo && (
        <div className="mb-6 pb-6 border-b border-cedar-brown/20">
          <p className="text-sm text-cedar-brown font-medium uppercase tracking-wider mb-2">
            Part of our {clusterInfo.cluster.name} Guide
          </p>
          <Link
            href={clusterInfo.cluster.pillarPage}
            className="text-deep-indigo hover:text-accent-red transition-colors font-semibold"
          >
            View Complete Guide →
          </Link>
        </div>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="mb-6">
          <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
            Related Articles
          </h3>
          <ul className="space-y-3">
            {relatedArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-white transition-colors"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-accent-red group-hover:bg-deep-indigo transition-colors flex-shrink-0" />
                  <span className="text-charcoal group-hover:text-deep-indigo transition-colors">
                    {article.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cross-Cluster Recommendations */}
      {crossClusterArticles.length > 0 && (
        <div className="pt-6 border-t border-cedar-brown/20">
          <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
            You Might Also Like
          </h3>
          <ul className="space-y-3">
            {crossClusterArticles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-white transition-colors"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-soft-gold group-hover:bg-accent-red transition-colors flex-shrink-0" />
                  <span className="text-charcoal group-hover:text-deep-indigo transition-colors">
                    {article.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="mt-8 p-4 bg-gradient-to-br from-deep-indigo to-charcoal rounded-xl text-white text-center">
        <p className="font-heading font-bold mb-2">Ready to Visit?</p>
        <p className="text-sm text-warm-ivory/80 mb-4">
          Experience the best hibachi & sushi in DFW
        </p>
        <div className="flex gap-2 justify-center">
          <Link
            href="/frisco#reserve"
            className="px-4 py-2 bg-accent-red hover:bg-accent-red/90 rounded-lg text-sm font-medium transition-colors"
          >
            Frisco
          </Link>
          <Link
            href="/lewisville#reserve"
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors"
          >
            Lewisville
          </Link>
        </div>
      </div>
    </aside>
  );
}

// Export utility functions for use in individual pages
export { getClusterForArticle, getRelatedArticles, getCrossClusterArticles };
