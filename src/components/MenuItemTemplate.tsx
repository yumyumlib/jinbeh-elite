"use client";

import Link from "next/link";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { BlurFade } from "@/components/ui/blur-fade";
import type { MenuItem, LocationInfo, MenuCategory } from "@/data/menu-item-types";
import { categoryLabels } from "@/data/menu-items";

interface MenuItemTemplateProps {
    item: MenuItem;
    location: LocationInfo;
}

function HeatIndicator({ level }: { level: string }) {
    const levels = { none: 0, mild: 1, medium: 2, hot: 3 };
    const filled = levels[level as keyof typeof levels] || 0;
    return (
        <div className="flex gap-1 items-center">
            {[1, 2, 3].map((i) => (
                <span key={i} className={`w-2.5 h-2.5 rounded-full ${i <= filled ? 'bg-accent-red' : 'bg-charcoal/15'}`} />
            ))}
        </div>
    );
}

function DietaryBadges({ dietary }: { dietary: MenuItem['dietary'] }) {
    const badges: { key: string; label: string; icon: string }[] = [];
    if (dietary.vegetarian) badges.push({ key: 'veg', label: 'Vegetarian', icon: '🌱' });
    if (dietary.pescatarian) badges.push({ key: 'pesc', label: 'Pescatarian', icon: '🐟' });
    if (dietary.glutenFree) badges.push({ key: 'gf', label: 'Gluten-Free', icon: '🌾' });
    if (dietary.dairyFree) badges.push({ key: 'df', label: 'Dairy-Free', icon: '🥛' });
    if (dietary.cooked) badges.push({ key: 'cooked', label: 'Fully Cooked', icon: '🔥' });
    if (dietary.raw) badges.push({ key: 'raw', label: 'Raw / Sashimi-Grade', icon: '🍣' });
    if (badges.length === 0) return null;
    return (
        <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
                <span key={b.key} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-warm-ivory rounded-full text-xs font-medium text-charcoal/80">
                    <span>{b.icon}</span> {b.label}
                </span>
            ))}
        </div>
    );
}

function getCategoryPath(category: MenuCategory): string {
    return category;
}

export default function MenuItemTemplate({ item, location }: MenuItemTemplateProps) {
    const otherLoc = location.otherLocation;
    const categoryPath = getCategoryPath(item.category);
    const categoryLabel = categoryLabels[item.category];

    return (
        <main className="min-h-screen bg-warm-ivory">
            {/* Breadcrumb */}
            <nav className="bg-white border-b border-warm-ivory-dark">
                <div className="container mx-auto px-6 py-3">
                    <ol className="flex items-center gap-2 text-sm text-charcoal/80 flex-wrap">
                        <li><Link href="/" className="hover:text-accent-red">Home</Link></li>
                        <li>/</li>
                        <li><Link href={`/${location.id}`} className="hover:text-accent-red">{location.displayName}</Link></li>
                        <li>/</li>
                        <li><Link href={`/${location.id}/menu`} className="hover:text-accent-red">Menu</Link></li>
                        <li>/</li>
                        <li><Link href={`/${location.id}/${categoryPath}`} className="hover:text-accent-red">{categoryLabel}</Link></li>
                        <li>/</li>
                        <li className="text-charcoal font-medium">{item.name}</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <BlurFade delay={0.1}>
                <section className="relative py-20 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${item.heroImage}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/75 to-charcoal/90" />
                    <div className="relative z-10 container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-soft-gold font-medium tracking-wider uppercase mb-3 text-sm">
                                {categoryLabel} • {location.name}
                            </p>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight">
                                {item.name}
                            </h1>
                            <p className="text-xl md:text-2xl text-warm-ivory/90 font-light max-w-2xl mx-auto">
                                {item.tagline}
                            </p>
                        </div>
                    </div>
                </section>
            </BlurFade>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto space-y-12">

                        {/* Description + Dietary */}
                        <BlurFade delay={0.2}>
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                                <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                                    About {item.name}
                                </h2>
                                <p className="text-charcoal/80 leading-relaxed text-lg mb-6">
                                    {item.description}
                                </p>
                                <DietaryBadges dietary={item.dietary} />
                            </div>
                        </BlurFade>

                        {/* Taste Profile Cards */}
                        <BlurFade delay={0.3}>
                            <div>
                                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6 px-1">
                                    Taste Profile
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <MagicCard className="bg-white border-warm-ivory-dark" gradientColor="#C8A96E" gradientOpacity={0.15}>
                                        <div className="p-6">
                                            <div className="w-12 h-12 rounded-xl bg-soft-gold/10 flex items-center justify-center mb-4">
                                                <span className="text-2xl">🍽️</span>
                                            </div>
                                            <h3 className="font-heading font-bold text-charcoal mb-2">Flavor</h3>
                                            <p className="text-charcoal/70 text-sm leading-relaxed">{item.tasteProfile.flavor}</p>
                                        </div>
                                    </MagicCard>
                                    <MagicCard className="bg-white border-warm-ivory-dark" gradientColor="#C8A96E" gradientOpacity={0.15}>
                                        <div className="p-6">
                                            <div className="w-12 h-12 rounded-xl bg-soft-gold/10 flex items-center justify-center mb-4">
                                                <span className="text-2xl">✨</span>
                                            </div>
                                            <h3 className="font-heading font-bold text-charcoal mb-2">Texture</h3>
                                            <p className="text-charcoal/70 text-sm leading-relaxed">{item.tasteProfile.texture}</p>
                                        </div>
                                    </MagicCard>
                                    <MagicCard className="bg-white border-warm-ivory-dark" gradientColor="#C8A96E" gradientOpacity={0.15}>
                                        <div className="p-6">
                                            <div className="w-12 h-12 rounded-xl bg-soft-gold/10 flex items-center justify-center mb-4">
                                                <span className="text-2xl">🌶️</span>
                                            </div>
                                            <h3 className="font-heading font-bold text-charcoal mb-2">Heat Level</h3>
                                            <div className="flex items-center gap-3 mb-1">
                                                <HeatIndicator level={item.tasteProfile.heat} />
                                                <span className="text-charcoal/70 text-sm">{item.tasteProfile.heatLabel}</span>
                                            </div>
                                        </div>
                                    </MagicCard>
                                </div>
                            </div>
                        </BlurFade>

                        {/* Preparation + Pro Tip */}
                        <BlurFade delay={0.35}>
                            <div className="relative bg-white rounded-2xl p-8 md:p-10 shadow-lg overflow-hidden">
                                <BorderBeam size={200} duration={8} />
                                <h2 className="text-2xl font-heading font-bold text-charcoal mb-4">
                                    How It&apos;s Prepared
                                </h2>
                                <p className="text-charcoal/80 leading-relaxed mb-6">
                                    {item.preparation}
                                </p>

                                {/* Key Ingredients */}
                                <div className="mb-6">
                                    <h3 className="font-heading font-semibold text-charcoal mb-3">Key Ingredients</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.keyIngredients.map((ing) => (
                                            <span key={ing} className="px-3 py-1.5 bg-warm-ivory rounded-full text-sm text-charcoal/80 font-medium">
                                                {ing}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* What's Included (hibachi only) */}
                                {item.includes && item.includes.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="font-heading font-semibold text-charcoal mb-3">Complete Dinner Includes</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {item.includes.map((inc) => (
                                                <div key={inc} className="flex items-center gap-2 text-charcoal/80">
                                                    <svg className="w-4 h-4 text-soft-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-sm">{inc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Pro Tip */}
                                <div className="bg-gradient-to-r from-soft-gold/10 to-accent-red/5 rounded-xl p-5 border border-soft-gold/20">
                                    <p className="text-charcoal/90 text-sm">
                                        <span className="font-bold text-soft-gold">💡 Pro Tip:</span>{' '}
                                        {item.proTip}
                                    </p>
                                </div>
                            </div>
                        </BlurFade>

                        {/* Perfect Pairings */}
                        <BlurFade delay={0.4}>
                            <div>
                                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6 px-1">
                                    Perfect Pairings
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {item.pairsWith.map((pairing) => (
                                        <Link
                                            key={pairing.slug}
                                            href={`/${location.id}/${getCategoryPath(pairing.category)}/${pairing.slug}`}
                                            className="group block"
                                        >
                                            <MagicCard className="bg-white border-warm-ivory-dark h-full" gradientColor="#B91C1C" gradientOpacity={0.1}>
                                                <div className="p-6">
                                                    <span className="text-xs font-medium text-accent-red uppercase tracking-wider">
                                                        {categoryLabels[pairing.category]}
                                                    </span>
                                                    <h3 className="font-heading font-bold text-charcoal mt-1 mb-2 group-hover:text-accent-red transition-colors">
                                                        {pairing.name}
                                                    </h3>
                                                    <p className="text-charcoal/60 text-sm leading-relaxed">
                                                        {pairing.why}
                                                    </p>
                                                </div>
                                            </MagicCard>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>

                        {/* CTA */}
                        <BlurFade delay={0.45}>
                            <div className="bg-gradient-to-br from-accent-red to-deep-indigo rounded-2xl p-8 md:p-10 text-white text-center">
                                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                                    Ready to Try {item.name}?
                                </h2>
                                <p className="text-white/90 mb-6 max-w-lg mx-auto">
                                    Reserve your table at {location.name} and experience this dish prepared fresh for you.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href={`https://www.opentable.com/booking/restref/availability?rid=${location.reservationRid}&lang=en-US`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-3 font-semibold rounded-xl transition-colors"
                                    >
                                        Reserve a Table
                                    </Link>
                                    <a
                                        href={`tel:${location.phoneClean}`}
                                        className="btn bg-white/20 text-white border border-white/50 hover:bg-white hover:text-charcoal px-8 py-3 font-semibold rounded-xl transition-colors"
                                    >
                                        Call {location.phone}
                                    </a>
                                </div>
                            </div>
                        </BlurFade>

                        {/* FAQ Section */}
                        {item.faqs.length > 0 && (
                            <BlurFade delay={0.5}>
                                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                                    <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                                        Frequently Asked Questions
                                    </h2>
                                    <div className="space-y-4">
                                        {item.faqs.map((faq, i) => (
                                            <details key={i} className="group border-b border-warm-ivory pb-4 last:border-0">
                                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                                    <h3 className="font-medium text-charcoal pr-4">{faq.question}</h3>
                                                    <span className="text-accent-red group-open:rotate-180 transition-transform flex-shrink-0">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </span>
                                                </summary>
                                                <p className="mt-3 text-charcoal/70 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            </BlurFade>
                        )}

                        {/* Related Items */}
                        <BlurFade delay={0.55}>
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6">
                                    More {categoryLabel} at {location.name}
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {item.relatedItems.map((related) => (
                                        <Link
                                            key={related.slug}
                                            href={`/${location.id}/${getCategoryPath(related.category)}/${related.slug}`}
                                            className="block p-4 bg-warm-ivory rounded-xl hover:bg-warm-ivory-dark transition-colors text-center group"
                                        >
                                            <h3 className="font-medium text-charcoal group-hover:text-accent-red transition-colors text-sm">
                                                {related.name}
                                            </h3>
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6 text-center">
                                    <Link
                                        href={`/${location.id}/${categoryPath}`}
                                        className="text-deep-indigo hover:text-accent-red font-medium transition-colors"
                                    >
                                        View All {categoryLabel} →
                                    </Link>
                                </div>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </section>

            {/* Cross-Location Link */}
            <section className="py-8 bg-charcoal text-white text-center">
                <div className="container mx-auto px-6">
                    <p className="text-warm-ivory/80">
                        Also available at our{' '}
                        <Link
                            href={`/${otherLoc}/${categoryPath}/${item.slug}`}
                            className="text-soft-gold hover:underline"
                        >
                            {location.otherLocationName} location
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    );
}
