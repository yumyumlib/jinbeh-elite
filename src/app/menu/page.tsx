import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OpenTableWidget from "@/components/OpenTableWidget";
import locationsData from "@/data/locations.json";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
    title: "Menu | Jinbeh Japanese Restaurant - Frisco & Lewisville",
    description: "Explore Jinbeh's authentic Japanese menu featuring hibachi, sushi, sashimi, and specialty rolls. View menus for our Frisco and Lewisville locations.",
    keywords: ["jinbeh menu", "hibachi menu", "sushi menu frisco", "japanese restaurant menu lewisville"],
    openGraph: {
        title: "Menu | Jinbeh Japanese Restaurant",
        description: "Explore Jinbeh's authentic Japanese menu featuring hibachi, sushi, sashimi, and specialty rolls.",
        url: "https://jinbeh.com/menu",
    images: [
      {
        url: "https://jinbeh.com/images/photoshoot/sushi-tower.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Menu",
      },
    ],
        siteName: "Jinbeh Japanese Restaurant",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Menu | Jinbeh Japanese Restaurant",
        description: "Explore Jinbeh's authentic Japanese menu featuring hibachi, sushi, sashimi, and specialty rolls.",
    },
    alternates: {
        canonical: "https://jinbeh.com/menu",
    },
};

export default function MenuPage() {
    const menuSchema = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Jinbeh Japanese Restaurant",
        "url": "https://jinbeh.com",
        "hasMenu": {
            "@type": "Menu",
            "name": "Jinbeh Full Menu",
            "url": "https://jinbeh.com/menu",
            "hasMenuSection": [
                {
                    "@type": "MenuSection",
                    "name": "Hibachi",
                    "description": "Teppanyaki-grilled entrées cooked tableside by our chefs",
                    "url": "https://jinbeh.com/frisco/hibachi",
                },
                {
                    "@type": "MenuSection",
                    "name": "Sushi Rolls",
                    "description": "Signature and classic maki rolls handcrafted by our sushi chefs",
                    "url": "https://jinbeh.com/frisco/sushi-rolls",
                },
                {
                    "@type": "MenuSection",
                    "name": "Sashimi",
                    "description": "Premium sliced raw fish including omakase selections",
                    "url": "https://jinbeh.com/frisco/sashimi",
                },
                {
                    "@type": "MenuSection",
                    "name": "Appetizers",
                    "description": "Japanese starters including edamame, gyoza, tempura, and more",
                    "url": "https://jinbeh.com/frisco/appetizers",
                },
                {
                    "@type": "MenuSection",
                    "name": "Cocktails & Drinks",
                    "description": "Japanese-inspired cocktails, sake flights, and craft beverages",
                    "url": "https://jinbeh.com/frisco/cocktails",
                },
            ],
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
            <Header />
            <main id="main-content" className="min-h-screen bg-warm-ivory">
                <MenuClient />

                {/* CTA */}
                <section className="py-16 bg-charcoal text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-heading font-bold mb-4">
                            Ready to Dine?
                        </h2>
                        <p className="text-white/80 mb-8">
                            Browse the Jinbeh menu — our hibachi menu, sushi menu Frisco platters, and Japanese restaurant menu Lewisville selections await. Explore our <Link href="/blog/types-of-sushi" className="text-soft-gold hover:underline">guide to sushi varieties</Link> or discover the perfect <Link href="/blog/sake-pairing-guide" className="text-soft-gold hover:underline">sake pairing</Link> for your meal.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <OpenTableWidget
                                restaurantId={locationsData.locations.frisco.reservation.rid}
                                location="frisco"
                                buttonText="Reserve at Frisco"
                                variant="primary"
                                className="btn btn-primary px-8 py-4 text-lg"
                            />
                            <OpenTableWidget
                                restaurantId={locationsData.locations.lewisville.reservation.rid}
                                location="lewisville"
                                buttonText="Reserve at Lewisville"
                                variant="primary"
                                className="btn bg-white text-charcoal hover:bg-warm-ivory px-8 py-4 text-lg"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
