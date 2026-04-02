"use client";

/**
 * SocialProofBar — Consistent ratings display across all pages.
 * 
 * Strategy (Hormozi Proof Checklist):
 * #5  Others Saying It > You Saying It — we attribute every rating to a platform
 * #10 More Proof > Less Proof — we show total review count across platforms
 * #11 Third Party Verification — we name the actual platforms (Uber Eats, Grubhub, etc.)
 * #12 Numbers > No Numbers — we show specific counts, not vague claims
 * 
 * Platform selection per location — lead with strongest:
 * - Frisco:     Uber Eats 4.8 (180+) · Facebook 4.7 (94%) · Grubhub 4.7 (231)
 * - Lewisville: Grubhub 4.8 (111) · OpenTable 4.7 · Google 4.5 (300+)
 * - Combined:   "Rated 4.7–4.8 across major platforms"
 */

type Platform = {
    name: string;
    rating: string;
    detail?: string; // e.g. "180+ ratings", "94% recommend"
    icon: string;    // emoji
};

const friscoProof: Platform[] = [
    { name: "Uber Eats", rating: "4.8", detail: "180+ ratings", icon: "🟢" },
    { name: "Facebook", rating: "4.7", detail: "94% recommend", icon: "📘" },
    { name: "Grubhub", rating: "4.7", detail: "231 ratings", icon: "🟠" },
];

const lewisvilleProof: Platform[] = [
    { name: "Grubhub", rating: "4.8", detail: "111 ratings", icon: "🟠" },
    { name: "OpenTable", rating: "4.7", detail: "", icon: "🔴" },
    { name: "Google", rating: "4.5", detail: "300+ reviews", icon: "⭐" },
];

const combinedProof: Platform[] = [
    { name: "Uber Eats", rating: "4.8", detail: "", icon: "🟢" },
    { name: "Grubhub", rating: "4.7–4.8", detail: "340+ ratings", icon: "🟠" },
    { name: "Facebook", rating: "4.7", detail: "94% recommend", icon: "📘" },
];

function Stars({ rating }: { rating: string }) {
    const numericRating = parseFloat(rating);
    return (
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((i) => (
                <svg
                    key={i}
                    className={`w-3.5 h-3.5 ${i <= Math.round(numericRating) ? "text-soft-gold" : "text-stone-300"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

type SocialProofBarProps = {
    location?: "frisco" | "lewisville" | "combined";
    variant?: "compact" | "full" | "inline";
    className?: string;
};

export default function SocialProofBar({
    location = "combined",
    variant = "compact",
    className = "",
}: SocialProofBarProps) {
    const platforms =
        location === "frisco" ? friscoProof :
            location === "lewisville" ? lewisvilleProof :
                combinedProof;

    if (variant === "inline") {
        return (
            <div className={`flex flex-wrap items-center gap-3 text-sm ${className}`}>
                <span className="text-charcoal/50 font-medium">As rated on:</span>
                {platforms.map((p) => (
                    <span key={p.name} className="inline-flex items-center gap-1 text-charcoal/80">
                        <span>{p.icon}</span>
                        <span className="font-semibold">{p.rating}</span>
                        <span className="text-charcoal/50">{p.name}</span>
                    </span>
                ))}
            </div>
        );
    }

    if (variant === "full") {
        return (
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 ${className}`}>
                {platforms.map((p) => (
                    <div
                        key={p.name}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-sm border border-stone-100"
                    >
                        <p className="text-2xl font-heading font-bold text-charcoal">
                            {p.rating}<span className="text-sm text-soft-gold">★</span>
                        </p>
                        <Stars rating={p.rating} />
                        <p className="text-sm font-semibold text-charcoal/80 mt-1">{p.icon} {p.name}</p>
                        {p.detail && (
                            <p className="text-xs text-charcoal/50 mt-0.5">{p.detail}</p>
                        )}
                    </div>
                ))}
            </div>
        );
    }

    // Compact (default) — single row
    return (
        <div className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-3 ${className}`}>
            {platforms.map((p, i) => (
                <div key={p.name} className="flex items-center gap-2">
                    {i > 0 && (
                        <span className="hidden sm:inline text-charcoal/20 mr-2">|</span>
                    )}
                    <span className="text-lg">{p.icon}</span>
                    <div>
                        <span className="font-heading font-bold text-charcoal">{p.rating}</span>
                        <span className="text-charcoal/60 text-sm ml-1">{p.name}</span>
                        {p.detail && (
                            <span className="text-charcoal/40 text-xs ml-1">({p.detail})</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

/** Export the raw data for use in schema and other components */
export const socialProofData = {
    frisco: {
        platforms: friscoProof,
        googleRating: "4.2",
        googleReviewCount: "424",
        bestRating: "4.8",
        bestPlatform: "Uber Eats",
        totalRatings: "835+",
    },
    lewisville: {
        platforms: lewisvilleProof,
        googleRating: "4.5",
        googleReviewCount: "300",
        bestRating: "4.8",
        bestPlatform: "Grubhub",
        totalRatings: "810+",
    },
    combined: {
        totalRatings: "1,600+",
        ratingRange: "4.5–4.8",
        bestRating: "4.8",
        bestPlatforms: "Uber Eats & Grubhub",
    },
};
