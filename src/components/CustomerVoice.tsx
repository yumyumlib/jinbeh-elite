"use client";

import React from "react";

// Platform icon components
function GoogleIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
    );
}

function YelpIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.965 5.835a1.073 1.073 0 0 1-.932 1.326 9.265 9.265 0 0 1-4.023-.646 1.073 1.073 0 0 1-.373-1.655l3.004-3.963c.601-.79 1.81-.39 1.827.612l.497 4.326z" />
        </svg>
    );
}

function OpenTableIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="5" />
        </svg>
    );
}

function TripAdvisorIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <circle cx="8" cy="14" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="16" cy="14" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="14" r="1" />
            <circle cx="16" cy="14" r="1" />
            <path d="M4 11c0-1.5 1.5-4 8-4s8 2.5 8 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 7V5M9 7l-1-2M15 7l1-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

const platformIcons: Record<string, { icon: React.FC<{ className?: string }>; color: string; bgColor: string }> = {
    Google: { icon: GoogleIcon, color: "text-accent-red", bgColor: "bg-accent-red/10" },
    Yelp: { icon: YelpIcon, color: "text-[#FF1A1A]", bgColor: "bg-[#FF1A1A]/10" },
    OpenTable: { icon: OpenTableIcon, color: "text-[#DA3743]", bgColor: "bg-[#DA3743]/10" },
    TripAdvisor: { icon: TripAdvisorIcon, color: "text-[#34E0A1]", bgColor: "bg-[#34E0A1]/10" },
};

function StarRating({ rating = 5 }: { rating?: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "text-soft-gold" : "text-stone-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

// ─── Quote Card Variant ──────────────────────
// Full card with stars, quote, attribution, platform icon
export function QuoteCard({
    quote,
    author,
    platform = "Google",
    category,
    className = "",
}: {
    quote: string;
    author: string;
    platform?: "Google" | "Yelp" | "OpenTable" | "TripAdvisor";
    category?: string;
    className?: string;
}) {
    const platformData = platformIcons[platform];
    const Icon = platformData.icon;

    return (
        <div className={`relative p-6 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}>
            {category && (
                <span className="inline-block bg-accent-red/10 text-accent-red text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-accent-red/20">
                    {category}
                </span>
            )}
            <StarRating />
            <blockquote className="text-charcoal/80 mt-3 mb-4 leading-relaxed text-sm">
                &ldquo;{quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${platformData.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${platformData.color}`} />
                </div>
                <div>
                    <p className="font-semibold text-charcoal text-sm">{author}</p>
                    <p className="text-xs text-charcoal/60">{platform} Review</p>
                </div>
            </div>
        </div>
    );
}

// ─── Quote Strip Variant ──────────────────────
// Compact horizontal quote for accent placement between sections
export function QuoteStrip({
    quote,
    author,
    className = "",
}: {
    quote: string;
    author: string;
    className?: string;
}) {
    return (
        <div className={`text-center py-8 px-6 ${className}`}>
            <blockquote className="text-xl md:text-2xl font-heading italic text-cedar-brown/90 max-w-3xl mx-auto leading-relaxed">
                &ldquo;{quote}&rdquo;
            </blockquote>
            <p className="mt-3 text-sm text-charcoal/60 font-medium">
                — {author}
            </p>
        </div>
    );
}

// ─── Customer Voice Section ──────────────────────
// A complete section with header + grid of quote cards
export function CustomerVoiceSection({
    heading = "What Our Guests Say",
    subheading,
    quotes,
    columns = 3,
    className = "",
}: {
    heading?: string;
    subheading?: string;
    quotes: Array<{
        quote: string;
        author: string;
        platform?: "Google" | "Yelp" | "OpenTable" | "TripAdvisor";
        category?: string;
    }>;
    columns?: 2 | 3 | 4;
    className?: string;
}) {
    const gridCols = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-2 lg:grid-cols-4",
    };

    return (
        <section className={`py-16 ${className}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <span className="inline-block w-16 h-1 bg-gradient-to-r from-soft-gold to-accent-red rounded-full mb-6" />
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-3">
                        {heading}
                    </h2>
                    {subheading && (
                        <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                            {subheading}
                        </p>
                    )}
                    <div className="flex items-center justify-center gap-2 mt-3 text-charcoal/60 text-sm">
                        <StarRating />
                        <span>from <strong>1,200+</strong> reviews</span>
                    </div>
                </div>
                <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 max-w-5xl mx-auto`}>
                    {quotes.map((q, i) => (
                        <QuoteCard
                            key={i}
                            quote={q.quote}
                            author={q.author}
                            platform={q.platform}
                            category={q.category}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
