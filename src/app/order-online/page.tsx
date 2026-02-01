'use client';

import Link from "next/link";
import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Note: Metadata is defined at the bottom after the component for proper export

export const metadata: Metadata = {
    title: "Order Online | Jinbeh Japanese Restaurant - Food Delivery",
    description: "Order Jinbeh's authentic hibachi and sushi online for delivery. Available on DoorDash, UberEats, and Grubhub. Quick phone ordering available at Frisco (972-668-1100) and Lewisville (972-315-3982).",
    keywords: [
        "jinbeh order online",
        "hibachi delivery",
        "sushi delivery frisco",
        "japanese food delivery lewisville",
        "doordash",
        "ubereats",
        "grubhub",
    ],
    openGraph: {
        title: "Order Online | Jinbeh Japanese Restaurant",
        description: "Order authentic Japanese hibachi and sushi online for delivery or phone ordering.",
        url: "https://jinbeh.com/order-online",
    },
};

// JSON-LD Schema for Restaurant and Menu
const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Jinbeh Japanese Restaurant",
    image: "https://jinbeh.com/images/og-image.jpg",
    description: "Authentic Japanese hibachi and sushi restaurant",
    address: [
        {
            "@type": "PostalAddress",
            streetAddress: "3200 Dallas Pkwy Suite 115",
            addressLocality: "Frisco",
            addressRegion: "TX",
            postalCode: "75034",
            addressCountry: "US",
        },
        {
            "@type": "PostalAddress",
            streetAddress: "400 W Main St Suite 115",
            addressLocality: "Lewisville",
            addressRegion: "TX",
            postalCode: "75057",
            addressCountry: "US",
        },
    ],
    telephone: ["+1-972-668-1100", "+1-972-315-3982"],
    url: "https://jinbeh.com",
    servesCuisine: "Japanese",
    priceRange: "$$",
    orderAction: {
        "@type": "OrderAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.doordash.com/store/jinbeh-japanese-restaurant-frisco-2408978/",
            actionPlatform: ["DesktopWebPlatform", "MobileWebPlatform"],
        },
    },
    menu: {
        "@type": "Menu",
        name: "Jinbeh Menu",
        hasMenuSection: [
            {
                "@type": "MenuSection",
                name: "Hibachi Entrees",
                description: "Traditional Japanese teppanyaki grilled entrees",
                hasMenuItem: [
                    {
                        "@type": "MenuItem",
                        name: "Filet Mignon",
                        description: "Premium beef grilled to perfection",
                    },
                    {
                        "@type": "MenuItem",
                        name: "Salmon Teriyaki",
                        description: "Fresh Atlantic salmon with teriyaki glaze",
                    },
                    {
                        "@type": "MenuItem",
                        name: "Chicken & Shrimp Combination",
                        description: "Tender chicken and succulent shrimp",
                    },
                ],
            },
            {
                "@type": "MenuSection",
                name: "Sushi & Rolls",
                description: "Fresh sushi and specialty rolls",
                hasMenuItem: [
                    {
                        "@type": "MenuItem",
                        name: "Dragon Roll",
                        description: "Eel, cucumber, avocado with eel sauce",
                    },
                    {
                        "@type": "MenuItem",
                        name: "Rainbow Roll",
                        description: "Assorted fresh fish over California roll",
                    },
                    {
                        "@type": "MenuItem",
                        name: "Omakase Selection",
                        description: "Chef's choice assortment of premium sushi",
                    },
                ],
            },
        ],
    },
};

const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Jinbeh Japanese Restaurant Menu",
    hasMenuSection: [
        {
            "@type": "MenuSection",
            name: "Appetizers",
            description: "Perfect for sharing",
            hasMenuItem: [
                {
                    "@type": "MenuItem",
                    name: "Gyoza (6 pieces)",
                    description: "Pan-fried pork dumplings",
                    offers: {
                        "@type": "Offer",
                        priceCurrency: "USD",
                        price: "7.95",
                    },
                },
                {
                    "@type": "MenuItem",
                    name: "Edamame",
                    description: "Steamed soybeans with sea salt",
                    offers: {
                        "@type": "Offer",
                        priceCurrency: "USD",
                        price: "4.95",
                    },
                },
                {
                    "@type": "MenuItem",
                    name: "Vegetable Spring Rolls",
                    description: "Crispy rolls with fresh vegetables",
                    offers: {
                        "@type": "Offer",
                        priceCurrency: "USD",
                        price: "6.95",
                    },
                },
            ],
        },
    ],
};

export default function OrderOnlinePage() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const faqItems = [
        {
            question: "What are the best items to order for delivery?",
            answer: "We recommend ordering our sushi rolls, nigiri, and appetizers as they travel well during delivery. Our hibachi entrees can also be delivered but travel best with our special insulated packaging. Avoid ordering items that don't reheat well - sashimi and delicate appetizers are best enjoyed fresh.",
        },
        {
            question: "How should I reheat my hibachi order?",
            answer: "For hibachi entrees: Reheat in a 350°F oven for 10-12 minutes covered with foil to maintain moisture. For sushi and rolls: Keep chilled and eat within 2 hours of delivery for best quality. Rice-based dishes can be reheated in the microwave for 1-2 minutes.",
        },
        {
            question: "Do you offer vegetarian options?",
            answer: "Yes! We have excellent vegetarian hibachi options including vegetable combinations, edamame, vegetable sushi rolls (vegetable roll, avocado roll, cucumber roll), and miso soup. Most appetizers can also be made vegetarian. Please let us know your dietary preferences when ordering.",
        },
        {
            question: "Is there a minimum order for delivery?",
            answer: "Minimum order amounts vary by delivery platform and location. DoorDash typically requires $15+ orders, while UberEats requires $20+. These minimums are set by the delivery platforms. We recommend checking your preferred app for current minimums.",
        },
        {
            question: "Can I order for a large party?",
            answer: "Absolutely! For orders of 15+ items, we recommend calling directly: Frisco (972-668-1100) or Lewisville (972-315-3982). We can often provide better pricing on bulk orders and ensure everything arrives hot and fresh. We can prepare special requests with advance notice.",
        },
        {
            question: "What are your delivery hours?",
            answer: "Delivery hours match our restaurant hours: Lunch 11am-2:30pm, Dinner 5pm-10pm. Delivery times vary based on your location and the delivery platform used. We recommend checking your preferred app for exact delivery times to your area.",
        },
        {
            question: "Do you offer curbside pickup?",
            answer: "Yes! Both locations offer quick curbside pickup. When placing your order via phone, let us know you'll be picking up curbside. We'll have your order ready at the appointed time. Call Frisco (972-668-1100) or Lewisville (972-315-3982).",
        },
        {
            question: "Can I customize my order?",
            answer: "Yes, customization is available! You can add special instructions when ordering through delivery apps, or call us directly for more complex requests. Common customizations include: no sauce, extra sauce, no raw fish, etc. Our team is happy to accommodate dietary restrictions.",
        },
    ];

    const popularItems = [
        {
            name: "Dragon Roll",
            description: "Eel, cucumber, avocado topped with eel sauce",
            icon: "🐉",
            category: "Sushi",
        },
        {
            name: "Filet Mignon Hibachi",
            description: "Premium beef grilled and seasoned to perfection",
            icon: "🥩",
            category: "Hibachi",
        },
        {
            name: "Rainbow Roll",
            description: "Fresh assorted fish over California roll base",
            icon: "🌈",
            category: "Sushi",
        },
        {
            name: "Salmon Teriyaki",
            description: "Fresh Atlantic salmon with sweet teriyaki glaze",
            icon: "🐟",
            category: "Hibachi",
        },
        {
            name: "Gyoza (6pcs)",
            description: "Pan-fried pork dumplings with dipping sauce",
            icon: "🥟",
            category: "Appetizers",
        },
        {
            name: "Edamame",
            description: "Steamed soybeans with sea salt",
            icon: "🫘",
            category: "Appetizers",
        },
    ];

    const orderingTips = [
        {
            title: "Best Items for Delivery",
            description: "Sushi rolls and nigiri travel exceptionally well. Hibachi entrees stay warm in our insulated packaging. Avoid ordering delicate appetizers.",
            icon: "📦",
        },
        {
            title: "Proper Reheating",
            description: "Oven reheating (350°F, 10-12 min) works best for hibachi. Microwave works for rice-based items. Keep sushi chilled until serving.",
            icon: "🔥",
        },
        {
            title: "Fresh Ingredients",
            description: "All orders use fresh, premium ingredients. Fish is selected daily. We recommend eating delivery orders within 2 hours for best quality.",
            icon: "✨",
        },
        {
            title: "Quick Phone Orders",
            description: "Skip the app! Call us directly for instant ordering and often better availability. Ask about daily specials not listed online.",
            icon: "☎️",
        },
        {
            title: "Special Requests",
            description: "Have dietary restrictions or preferences? Call us! We happily customize orders - no raw fish, extra vegetables, spice levels, etc.",
            icon: "🎯",
        },
        {
            title: "Party Orders",
            description: "Ordering for a group? Call for bulk pricing and to ensure fresh preparation. We love handling office orders and celebrations.",
            icon: "🎉",
        },
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-warm-ivory">
                {/* JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
                />

                {/* Hero Section */}
                <section className="relative py-24 bg-gradient-to-br from-charcoal to-deep-indigo text-white overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-red rounded-full mix-blend-multiply blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-gold rounded-full mix-blend-multiply blur-3xl"></div>
                    </div>

                    <div className="relative container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* Left: Text Content */}
                            <div>
                                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                                    Order Authentic Japanese Cuisine
                                </h1>
                                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                    Fresh hibachi, sushi, and appetizers delivered hot to your door. Available through your favorite delivery apps or direct phone ordering.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="btn btn-primary px-8 py-4 text-lg font-semibold hover:shadow-lg transition-all">
                                        Browse All Items
                                    </button>
                                    <Link
                                        href="/menu"
                                        className="btn bg-white text-charcoal hover:bg-warm-ivory px-8 py-4 text-lg font-semibold transition-all"
                                    >
                                        View Full Menu
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Visual Element */}
                            <div className="relative h-96 bg-gradient-to-br from-accent-red/20 to-deep-indigo/20 rounded-3xl overflow-hidden border-4 border-soft-gold/30">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-9xl mb-4">🍱</div>
                                        <p className="text-2xl font-heading font-bold text-white">
                                            Fresh. Fast. Delicious.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Order CTA */}
                <section className="py-8 bg-accent-red text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                                Ready to Order?
                            </h2>
                            <p className="text-white/90 mb-6">
                                Choose your favorite platform or call us directly for instant ordering
                            </p>
                        </div>
                    </div>
                </section>

                {/* Location-Based Ordering */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-heading font-bold text-charcoal text-center mb-4">
                                Choose Your Location
                            </h2>
                            <p className="text-center text-charcoal/70 text-lg mb-16 max-w-2xl mx-auto">
                                Select your nearest Jinbeh location to order online or by phone
                            </p>

                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Frisco Location */}
                                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-accent-red to-orange-500 p-8 text-white">
                                        <h3 className="text-3xl font-heading font-bold mb-2">🏯 Frisco</h3>
                                        <p className="text-white/90">3200 Dallas Pkwy Suite 115</p>
                                        <p className="text-white/80">Near Stonebriar Centre</p>
                                    </div>

                                    {/* Phone Ordering */}
                                    <div className="p-8 border-b border-warm-ivory">
                                        <h4 className="font-heading font-semibold text-charcoal mb-4 text-lg flex items-center gap-2">
                                            <span className="text-2xl">☎️</span> Phone Ordering
                                        </h4>
                                        <a
                                            href="tel:972-668-1100"
                                            className="inline-flex items-center gap-2 bg-deep-indigo text-white px-6 py-3 rounded-xl font-semibold hover:bg-charcoal transition-colors w-full justify-center mb-2"
                                        >
                                            <span>📱</span>
                                            Call (972) 668-1100
                                        </a>
                                        <p className="text-sm text-charcoal/60 mt-3">
                                            Lunch: 11am - 2:30pm | Dinner: 5pm - 10pm
                                        </p>
                                    </div>

                                    {/* Delivery Apps */}
                                    <div className="p-8">
                                        <h4 className="font-heading font-semibold text-charcoal mb-4 text-lg flex items-center gap-2">
                                            <span className="text-2xl">🚚</span> Order for Delivery
                                        </h4>
                                        <div className="space-y-3">
                                            <a
                                                href="https://www.doordash.com/store/jinbeh-japanese-restaurant-frisco-2408978/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-4 bg-warm-ivory hover:bg-soft-gold/20 rounded-xl transition-colors"
                                            >
                                                <span className="text-3xl">🍔</span>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-charcoal">DoorDash</p>
                                                    <p className="text-sm text-charcoal/60">30-45 min delivery</p>
                                                </div>
                                                <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>

                                            <a
                                                href="https://www.ubereats.com/store/jinbeh-japanese-steak-and-sushi/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-4 bg-warm-ivory hover:bg-soft-gold/20 rounded-xl transition-colors"
                                            >
                                                <span className="text-3xl">🚗</span>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-charcoal">UberEats</p>
                                                    <p className="text-sm text-charcoal/60">25-40 min delivery</p>
                                                </div>
                                                <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>

                                            <a
                                                href="https://www.grubhub.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-4 bg-warm-ivory hover:bg-soft-gold/20 rounded-xl transition-colors"
                                            >
                                                <span className="text-3xl">🍕</span>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-charcoal">Grubhub</p>
                                                    <p className="text-sm text-charcoal/60">30-50 min delivery</p>
                                                </div>
                                                <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="bg-charcoal/5 p-6">
                                        <p className="text-sm text-charcoal/70">
                                            <strong>Hours:</strong> Lunch 11am-2:30pm | Dinner 5pm-10pm
                                        </p>
                                    </div>
                                </div>

                                {/* Lewisville Location */}
                                <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    {/* Header */}
                                    <div className="bg-gradient-to-r from-deep-indigo to-blue-600 p-8 text-white">
                                        <h3 className="text-3xl font-heading font-bold mb-2">🍣 Lewisville</h3>
                                        <p className="text-white/90">400 W Main St Suite 115</p>
                                        <p className="text-white/80">Off I-35E</p>
                                    </div>

                                    {/* Phone Ordering */}
                                    <div className="p-8 border-b border-warm-ivory">
                                        <h4 className="font-heading font-semibold text-charcoal mb-4 text-lg flex items-center gap-2">
                                            <span className="text-2xl">☎️</span> Phone Ordering
                                        </h4>
                                        <a
                                            href="tel:972-315-3982"
                                            className="inline-flex items-center gap-2 bg-deep-indigo text-white px-6 py-3 rounded-xl font-semibold hover:bg-charcoal transition-colors w-full justify-center mb-2"
                                        >
                                            <span>📱</span>
                                            Call (972) 315-3982
                                        </a>
                                        <p className="text-sm text-charcoal/60 mt-3">
                                            Lunch: 11am - 2:30pm | Dinner: 5pm - 10pm
                                        </p>
                                    </div>

                                    {/* Delivery Apps */}
                                    <div className="p-8">
                                        <h4 className="font-heading font-semibold text-charcoal mb-4 text-lg flex items-center gap-2">
                                            <span className="text-2xl">🚚</span> Order for Delivery
                                        </h4>
                                        <div className="space-y-3">
                                            <a
                                                href="https://www.doordash.com/store/jinbeh-japanese-bistro-lewisville-315108/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-4 bg-warm-ivory hover:bg-soft-gold/20 rounded-xl transition-colors"
                                            >
                                                <span className="text-3xl">🍔</span>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-charcoal">DoorDash</p>
                                                    <p className="text-sm text-charcoal/60">25-40 min delivery</p>
                                                </div>
                                                <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>

                                            <a
                                                href="https://www.ubereats.com/store/jinbeh-japanese-bistro/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-4 bg-warm-ivory hover:bg-soft-gold/20 rounded-xl transition-colors"
                                            >
                                                <span className="text-3xl">🚗</span>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-charcoal">UberEats</p>
                                                    <p className="text-sm text-charcoal/60">20-35 min delivery</p>
                                                </div>
                                                <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>

                                            <a
                                                href="https://www.grubhub.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 p-4 bg-warm-ivory hover:bg-soft-gold/20 rounded-xl transition-colors"
                                            >
                                                <span className="text-3xl">🍕</span>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-charcoal">Grubhub</p>
                                                    <p className="text-sm text-charcoal/60">30-45 min delivery</p>
                                                </div>
                                                <svg className="w-5 h-5 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="bg-charcoal/5 p-6">
                                        <p className="text-sm text-charcoal/70">
                                            <strong>Hours:</strong> Lunch 11am-2:30pm | Dinner 5pm-10pm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Menu Items to Order */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-heading font-bold text-charcoal text-center mb-4">
                                Popular Items to Order
                            </h2>
                            <p className="text-center text-charcoal/70 text-lg mb-16 max-w-2xl mx-auto">
                                These customer favorites are perfect for delivery. Available at both locations.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8">
                                {popularItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-warm-ivory rounded-2xl p-8 hover:shadow-lg transition-shadow border-l-4 border-accent-red"
                                    >
                                        <div className="text-5xl mb-4">{item.icon}</div>
                                        <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
                                            {item.name}
                                        </h3>
                                        <p className="text-charcoal/70 mb-4">{item.description}</p>
                                        <span className="inline-block px-4 py-2 bg-soft-gold/20 rounded-full text-sm font-semibold text-charcoal">
                                            {item.category}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-16">
                                <Link
                                    href="/menu"
                                    className="btn btn-primary px-8 py-4 text-lg font-semibold"
                                >
                                    See Complete Menu
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ordering Tips */}
                <section className="py-20 bg-charcoal text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl font-heading font-bold text-center mb-4">
                                Tips for the Best Delivery Experience
                            </h2>
                            <p className="text-center text-white/80 text-lg mb-16 max-w-2xl mx-auto">
                                Here's how to get the most out of your Jinbeh delivery order
                            </p>

                            <div className="grid md:grid-cols-3 gap-8">
                                {orderingTips.map((tip, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 hover:border-accent-red transition-colors"
                                    >
                                        <div className="text-5xl mb-4">{tip.icon}</div>
                                        <h3 className="text-xl font-heading font-bold mb-3">
                                            {tip.title}
                                        </h3>
                                        <p className="text-white/80 leading-relaxed">
                                            {tip.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-warm-ivory">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-heading font-bold text-charcoal text-center mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-center text-charcoal/70 text-lg mb-16">
                                Have questions about ordering? We've got answers.
                            </p>

                            <div className="space-y-4">
                                {faqItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <button
                                            onClick={() =>
                                                setExpandedFaq(expandedFaq === index ? null : index)
                                            }
                                            className="w-full px-8 py-6 flex items-center justify-between hover:bg-charcoal/5 transition-colors text-left"
                                        >
                                            <h3 className="text-lg font-heading font-semibold text-charcoal pr-4">
                                                {item.question}
                                            </h3>
                                            <svg
                                                className={`w-6 h-6 text-accent-red flex-shrink-0 transition-transform ${
                                                    expandedFaq === index ? "rotate-180" : ""
                                                }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                                />
                                            </svg>
                                        </button>

                                        {expandedFaq === index && (
                                            <div className="px-8 py-6 border-t border-charcoal/10 bg-charcoal/2">
                                                <p className="text-charcoal/80 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-gradient-to-r from-accent-red to-orange-500 text-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                Ready to Order?
                            </h2>
                            <p className="text-xl text-white/90 mb-12">
                                Your favorite authentic Japanese cuisine is just a few taps away. Order now from Frisco or Lewisville!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:972-668-1100"
                                    className="btn bg-white text-accent-red hover:bg-warm-ivory px-10 py-4 text-lg font-semibold transition-all"
                                >
                                    <span className="mr-2">📱</span>
                                    Call Frisco: 972-668-1100
                                </a>
                                <a
                                    href="tel:972-315-3982"
                                    className="btn bg-white text-accent-red hover:bg-warm-ivory px-10 py-4 text-lg font-semibold transition-all"
                                >
                                    <span className="mr-2">📱</span>
                                    Call Lewisville: 972-315-3982
                                </a>
                            </div>

                            <p className="text-white/80 mt-8 text-sm">
                                Or use your favorite delivery app above. Minimum order requirements set by each platform.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
