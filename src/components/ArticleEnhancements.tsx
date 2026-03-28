"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────────
   1. ProTip — Chef's insider advice callout
   ───────────────────────────────────────────── */
export function ProTip({ children, variant = "chef" }: { children: React.ReactNode; variant?: "chef" | "insider" | "health" }) {
    const icons = { chef: "👨‍🍳", insider: "🔑", health: "💪" };
    const labels = { chef: "Chef's Pro Tip", insider: "Insider Tip", health: "Health Tip" };

    return (
        <div className="not-prose my-8 bg-gradient-to-r from-soft-gold/20 to-warm-ivory rounded-xl border border-soft-gold/30 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-soft-gold" />
            <div className="flex items-start gap-3 ml-2">
                <span className="text-2xl flex-shrink-0 mt-0.5">{icons[variant]}</span>
                <div>
                    <p className="font-heading font-bold text-charcoal text-sm uppercase tracking-wider mb-2">
                        {labels[variant]}
                    </p>
                    <div className="text-charcoal/80 leading-relaxed text-[15px]">{children}</div>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   2. DidYouKnow — Animated fact card
   ───────────────────────────────────────────── */
export function DidYouKnow({ fact, source }: { fact: string; source?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`not-prose my-8 bg-deep-indigo/5 border border-deep-indigo/15 rounded-xl p-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
            <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5">🎓</span>
                <div>
                    <p className="font-heading font-bold text-deep-indigo text-sm uppercase tracking-wider mb-2">
                        Did You Know?
                    </p>
                    <p className="text-charcoal/80 leading-relaxed">{fact}</p>
                    {source && (
                        <p className="text-xs text-charcoal/50 mt-2 italic">Source: {source}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   3. Timeline — Vertical step-by-step process
   ───────────────────────────────────────────── */
interface TimelineStep {
    icon: string;
    title: string;
    description: string;
}

export function Timeline({ steps, title }: { steps: TimelineStep[]; title?: string }) {
    return (
        <div className="not-prose my-10">
            {title && (
                <h3 className="font-heading text-xl font-bold text-charcoal mb-6">{title}</h3>
            )}
            <div className="relative pl-8 space-y-8">
                {/* Vertical line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-red via-deep-indigo to-soft-gold" />

                {steps.map((step, i) => (
                    <div key={i} className="relative group">
                        {/* Dot */}
                        <div className="absolute -left-8 top-1 w-8 h-8 rounded-full bg-white border-2 border-deep-indigo flex items-center justify-center text-sm shadow-sm group-hover:border-accent-red group-hover:scale-110 transition-all">
                            {step.icon}
                        </div>
                        <div className="bg-warm-ivory/40 rounded-xl p-5 border border-warm-ivory hover:border-soft-gold/50 transition-colors">
                            <p className="font-heading font-bold text-charcoal mb-1">
                                <span className="text-accent-red/60 mr-2 text-sm">Step {i + 1}</span>
                                {step.title}
                            </p>
                            <p className="text-charcoal/70 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   4. IngredientSpotlight — Rich ingredient card
   ───────────────────────────────────────────── */
interface IngredientInfo {
    name: string;
    japaneseName?: string;
    icon: string;
    origin?: string;
    season?: string;
    flavor: string;
    pairsWith: string;
    jinbehDish?: string;
    jinbehDishLink?: string;
}

export function IngredientSpotlight({ ingredient }: { ingredient: IngredientInfo }) {
    return (
        <div className="not-prose my-8 bg-white rounded-2xl shadow-md border border-warm-ivory overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-deep-indigo to-accent-red p-4">
                <div className="flex items-center gap-3">
                    <span className="text-3xl">{ingredient.icon}</span>
                    <div>
                        <h4 className="font-heading font-bold text-white text-lg">{ingredient.name}</h4>
                        {ingredient.japaneseName && (
                            <p className="text-white/70 text-sm italic">{ingredient.japaneseName}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="p-5 grid grid-cols-2 gap-4 text-sm">
                {ingredient.origin && (
                    <div>
                        <p className="text-charcoal/50 text-xs uppercase tracking-wider mb-1">Origin</p>
                        <p className="text-charcoal font-medium">{ingredient.origin}</p>
                    </div>
                )}
                {ingredient.season && (
                    <div>
                        <p className="text-charcoal/50 text-xs uppercase tracking-wider mb-1">Peak Season</p>
                        <p className="text-charcoal font-medium">{ingredient.season}</p>
                    </div>
                )}
                <div>
                    <p className="text-charcoal/50 text-xs uppercase tracking-wider mb-1">Flavor Profile</p>
                    <p className="text-charcoal font-medium">{ingredient.flavor}</p>
                </div>
                <div>
                    <p className="text-charcoal/50 text-xs uppercase tracking-wider mb-1">Pairs With</p>
                    <p className="text-charcoal font-medium">{ingredient.pairsWith}</p>
                </div>
                {ingredient.jinbehDish && (
                    <div className="col-span-2 pt-3 border-t border-warm-ivory">
                        <p className="text-charcoal/50 text-xs uppercase tracking-wider mb-1">Try at Jinbeh</p>
                        {ingredient.jinbehDishLink ? (
                            <Link href={ingredient.jinbehDishLink} className="text-accent-red font-semibold hover:underline">
                                {ingredient.jinbehDish} →
                            </Link>
                        ) : (
                            <p className="text-charcoal font-semibold">{ingredient.jinbehDish}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   5. CompareCard — Side-by-side comparison
   ───────────────────────────────────────────── */
interface CompareItem {
    title: string;
    icon: string;
    features: string[];
    cta?: { label: string; href: string };
    highlight?: boolean;
}

export function CompareCards({ items, vsLabel = "VS" }: { items: [CompareItem, CompareItem]; vsLabel?: string }) {
    return (
        <div className="not-prose my-10 flex flex-col md:flex-row gap-4 items-stretch">
            {items.map((item, i) => (
                <React.Fragment key={i}>
                    <div
                        className={`flex-1 rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${item.highlight
                            ? "border-accent-red bg-accent-red/5 shadow-md"
                            : "border-warm-ivory bg-white"
                            }`}
                    >
                        <div className="text-center mb-4">
                            <span className="text-4xl block mb-2">{item.icon}</span>
                            <h4 className="font-heading font-bold text-xl text-charcoal">{item.title}</h4>
                        </div>
                        <ul className="space-y-2">
                            {item.features.map((f, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-charcoal/70">
                                    <span className={item.highlight ? "text-accent-red" : "text-deep-indigo"}>✓</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                        {item.cta && (
                            <div className="mt-5 text-center">
                                <Link
                                    href={item.cta.href}
                                    className={`inline-block px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${item.highlight
                                        ? "bg-accent-red text-white hover:bg-accent-red/90"
                                        : "bg-charcoal/10 text-charcoal hover:bg-charcoal/20"
                                        }`}
                                >
                                    {item.cta.label}
                                </Link>
                            </div>
                        )}
                    </div>
                    {i === 0 && (
                        <div className="flex items-center justify-center py-2 md:py-0">
                            <span className="bg-deep-indigo text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                {vsLabel}
                            </span>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

/* ─────────────────────────────────────────────
   6. StatBlock — Animated number tickers
   ───────────────────────────────────────────── */
interface Stat {
    value: string;
    label: string;
    icon?: string;
}

export function StatBlock({ stats }: { stats: Stat[] }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="not-prose my-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
                <div
                    key={i}
                    className={`bg-white rounded-xl p-5 text-center shadow-sm border border-warm-ivory transition-all duration-500 hover:shadow-md ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                >
                    {stat.icon && <span className="text-2xl mb-1 block">{stat.icon}</span>}
                    <p className="font-heading text-2xl md:text-3xl font-bold text-deep-indigo">{stat.value}</p>
                    <p className="text-charcoal/60 text-sm mt-1">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}

/* ─────────────────────────────────────────────
   7. ReadingProgress — Top progress bar
   ───────────────────────────────────────────── */
export function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
        };
        window.addEventListener("scroll", updateProgress, { passive: true });
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-accent-red to-soft-gold transition-[width] duration-100 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

/* ─────────────────────────────────────────────
   8. TableOfContents — Floating sidebar TOC
   ───────────────────────────────────────────── */
interface TOCItem {
    id: string;
    label: string;
    level?: number;
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter(e => e.isIntersecting);
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
        );
        items.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [items]);

    return (
        <nav className="not-prose hidden lg:block sticky top-24 bg-white/80 backdrop-blur-sm rounded-xl border border-warm-ivory p-5 shadow-sm max-h-[70vh] overflow-y-auto">
            <p className="font-heading font-bold text-sm text-charcoal uppercase tracking-wider mb-3 flex items-center gap-2">
                <span>📖</span> In This Article
            </p>
            <ul className="space-y-1.5">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`block text-sm py-1 px-3 rounded-md transition-all ${item.level === 3 ? "ml-3 text-xs" : ""
                                } ${activeId === item.id
                                    ? "bg-accent-red/10 text-accent-red font-medium border-l-2 border-accent-red"
                                    : "text-charcoal/60 hover:text-charcoal hover:bg-warm-ivory/50"
                                }`}
                        >
                            {activeId === item.id && <span className="mr-1">→</span>}
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

/* ─────────────────────────────────────────────
   9. LocationCTA — Contextual location card
   ───────────────────────────────────────────── */
export function LocationCTA({ location = "frisco" }: { location?: "frisco" | "lewisville" | "both" }) {
    const locations = {
        frisco: {
            name: "Jinbeh Frisco",
            address: "2693 Preston Rd, Frisco, TX 75034",
            landmark: "Near Stonebriar Centre",
            phone: "(214) 619-1200",
            rating: "4.4",
            ratingSource: "Google",
            reviews: "752",
            mapLink: "https://maps.google.com/?q=Jinbeh+Japanese+Restaurant+Frisco",
            pageLink: "/frisco",
        },
        lewisville: {
            name: "Jinbeh Lewisville",
            address: "1543 E Hwy 121, Lewisville, TX 75056",
            landmark: "Easy access from I-35E",
            phone: "(214) 488-2224",
            rating: "4.4",
            ratingSource: "Google",
            reviews: "901",
            mapLink: "https://maps.google.com/?q=Jinbeh+Japanese+Restaurant+Lewisville",
            pageLink: "/lewisville",
        },
    };

    const locs = location === "both" ? [locations.frisco, locations.lewisville] : [locations[location]];

    return (
        <div className={`not-prose my-10 grid gap-4 ${locs.length > 1 ? "md:grid-cols-2" : ""}`}>
            {locs.map((loc) => (
                <div key={loc.name} className="bg-white rounded-2xl shadow-md border border-warm-ivory overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-charcoal p-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">📍</span>
                            <h4 className="font-heading font-bold text-warm-ivory text-lg">{loc.name}</h4>
                            <span className="ml-auto bg-soft-gold/20 text-soft-gold text-xs font-bold px-2 py-1 rounded-full">
                                ⭐ {loc.rating} {loc.ratingSource}
                            </span>
                        </div>
                    </div>
                    <div className="p-5 space-y-3">
                        <p className="text-charcoal text-sm">{loc.address}</p>
                        <p className="text-charcoal/60 text-xs">{loc.landmark} · {loc.reviews} reviews</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                            <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 bg-charcoal/5 text-charcoal text-sm font-medium rounded-lg hover:bg-charcoal/10 transition-colors">
                                🗺️ Directions
                            </a>
                            <Link href="/reservations" className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent-red text-white text-sm font-medium rounded-lg hover:bg-accent-red/90 transition-colors">
                                🪑 Reserve
                            </Link>
                            <a href={`tel:${loc.phone.replace(/[^\d]/g, "")}`} className="inline-flex items-center gap-1.5 px-4 py-2 bg-charcoal/5 text-charcoal text-sm font-medium rounded-lg hover:bg-charcoal/10 transition-colors">
                                📞 Call
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ─────────────────────────────────────────────
  10. MenuItemCard — Contextual dish callout
   ───────────────────────────────────────────── */
interface MenuItemInfo {
    name: string;
    description: string;
    image?: string;
    badge?: string;
    menuLink?: string;
}

export function MenuItemCard({ item }: { item: MenuItemInfo }) {
    return (
        <div className="not-prose my-6 bg-white rounded-xl shadow-sm border border-warm-ivory overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow">
            {item.image && (
                <div className="relative w-full sm:w-36 h-32 sm:h-auto flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
            )}
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="font-heading font-bold text-charcoal mb-1">{item.name}</h4>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{item.description}</p>
                    {item.badge && (
                        <span className="inline-block mt-2 bg-soft-gold/20 text-soft-gold text-xs font-bold px-2.5 py-1 rounded-full">
                            ⭐ {item.badge}
                        </span>
                    )}
                </div>
                <div className="flex gap-2 mt-3">
                    <Link href="/menu" className="text-xs font-semibold text-accent-red hover:underline">
                        View on Menu →
                    </Link>
                    {item.menuLink && (
                        <Link href={item.menuLink} className="text-xs font-semibold text-deep-indigo hover:underline ml-3">
                            Learn More →
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   11. ComparisonTable — Structured data for scannability
   ───────────────────────────────────────────── */
interface TableColumn {
    header: string;
    accessorKey: string;
}

interface TableProps {
    title?: string;
    description?: string;
    columns: TableColumn[];
    data: Record<string, any>[];
}

export function ComparisonTable({ title, description, columns, data }: TableProps) {
    return (
        <div className="my-10">
            {(title || description) && (
                <div className="mb-6">
                    {title && <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">{title}</h3>}
                    {description && <p className="text-charcoal/70">{description}</p>}
                </div>
            )}
            <div className="overflow-x-auto rounded-xl border border-warm-ivory bg-white shadow-sm">
                <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                        <tr className="bg-warm-ivory/50 text-charcoal font-heading">
                            {columns.map((col, i) => (
                                <th key={i} className="p-4 border-b border-warm-ivory font-bold">{col.header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-warm-ivory">
                        {data.map((row, i) => (
                            <tr key={i} className="hover:bg-warm-ivory/30 transition-colors">
                                {columns.map((col, j) => (
                                    <td key={j} className="p-4 text-charcoal/80">
                                        {row[col.accessorKey]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   12. PillarCTA — Contextual conversion link
   ───────────────────────────────────────────── */
interface PillarCTAProps {
    type: "reservations" | "catering" | "vip" | "hub";
    title?: string;
    description?: string;
    linkText?: string;
    href?: string;
    image?: string;
}

export function PillarCTA({ type, title, description, linkText, href, image }: PillarCTAProps) {
    const defaultContent = {
        reservations: {
            title: "Experience Jinbeh Elite",
            description: "Ready to taste the freshest sushi in DFW? Reserve your table at our Frisco or Lewisville locations for an unforgettable dining experience.",
            linkText: "Book Your Table",
            href: "/reservations",
            icon: "🥢",
            bgClass: "from-accent-red/10 to-charcoal/5",
            borderClass: "border-accent-red/30"
        },
        catering: {
            title: "Elevate Your Next Event",
            description: "Bring the theater of hibachi and the elegance of premium sushi to your next private party or corporate gathering.",
            linkText: "Explore Catering Options",
            href: "/catering",
            icon: "🍱",
            bgClass: "from-soft-gold/10 to-amber-50",
            borderClass: "border-soft-gold/30"
        },
        vip: {
            title: "Join the Jinbeh VIP Club",
            description: "Unlock exclusive birthday rewards, seasonal menu previews, and priority seating by joining our elite dining club.",
            linkText: "Become a VIP",
            href: "/vip",
            icon: "✨",
            bgClass: "from-deep-indigo/10 to-charcoal/5",
            borderClass: "border-deep-indigo/30"
        },
        hub: {
            title: "Explore Our Locations",
            description: "Discover the unique atmosphere and specialized menus at our premier DFW dining destinations.",
            linkText: "View Locations",
            href: "/#locations",
            icon: "🏛️",
            bgClass: "from-warm-ivory to-white",
            borderClass: "border-warm-ivory-dark"
        }
    };

    const content = defaultContent[type];
    const finalTitle = title || content.title;
    const finalDesc = description || content.description;
    const finalLink = href || content.href;
    const finalLinkText = linkText || content.linkText;

    // Structured Data for the CTA link (improves contextual relevance for search engines)
    const ctaSchema = {
        "@context": "https://schema.org",
        "@type": "WebPageElement",
        "name": finalTitle,
        "description": finalDesc,
        "url": `https://jinbeh.com${finalLink}`
    };

    return (
        <aside className={`not-prose my-12 bg-gradient-to-br ${content.bgClass} border-2 ${content.borderClass} rounded-2xl overflow-hidden shadow-md flex flex-col sm:flex-row items-center w-full`}>
            {/* SEO Structured Data */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ctaSchema) }} />

            {/* Optional Image */}
            {image && (
                <div className="relative w-full sm:w-1/3 aspect-[4/3] sm:aspect-auto sm:h-full min-h-[200px] flex-shrink-0">
                    <Image src={image} alt={finalTitle} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
            )}

            {/* Content Area */}
            <div className="p-6 md:p-8 flex-1 w-full text-center sm:text-left flex flex-col justify-center">
                <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                    <span className="text-3xl" aria-hidden="true">{content.icon}</span>
                    <h3 className="text-2xl font-heading font-bold text-charcoal leading-tight">
                        {finalTitle}
                    </h3>
                </div>
                <p className="text-charcoal/80 mb-6 max-w-xl text-base leading-relaxed">
                    {finalDesc}
                </p>
                <div className="mt-auto">
                    <Link
                        href={finalLink}
                        className="inline-flex items-center justify-center px-6 py-3 bg-charcoal text-white font-semibold rounded-xl hover:bg-accent-red hover:shadow-lg transition-all duration-300 group w-full sm:w-auto text-sm sm:text-base border border-charcoal/20"
                        title={finalLinkText} // Added explicit title attribute for SEO
                    >
                        {finalLinkText}
                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </aside>
    );
}

/* ─────────────────────────────────────────────
   13. ArticleReveal — Scroll-reveal wrapper for article content
   ───────────────────────────────────────────── */
export function ArticleReveal({
    children,
    delay = 0,
    direction = "up" as "up" | "down" | "left" | "right" | "none",
    blur = false,
}: {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    blur?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: "40px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    const getTranslate = () => {
        const d = 20;
        switch (direction) {
            case "up": return `translateY(${d}px)`;
            case "down": return `translateY(-${d}px)`;
            case "left": return `translateX(${d}px)`;
            case "right": return `translateX(-${d}px)`;
            default: return "none";
        }
    };

    return (
        <div
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "none" : `${getTranslate()} scale(0.98)`,
                filter: blur ? (isVisible ? "blur(0px)" : "blur(4px)") : undefined,
                transition: [
                    "opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    blur ? "filter 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" : "",
                ].filter(Boolean).join(", "),
                willChange: isVisible ? "auto" : "opacity, transform",
            }}
        >
            {children}
        </div>
    );
}

