import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VipClubForm from "@/components/VipClubForm";
import { HeroSection, RevealSection, ShinyBadge } from "@/components/MagicUI";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
    title: "Join the Jinbeh VIP Club | Free Birthday Gift + Secret Menu Access",
    description: "Join 1,200+ Jinbeh VIP members. Get a free birthday dessert, a gift card on your birthday, and access to our secret menu.",
    keywords: [
        "jinbeh vip",
        "vip club",
        "birthday reward",
        "free dessert",
        "jinbeh rewards",
        "loyalty program",
    ],
    alternates: {
        canonical: "https://jinbeh.com/vip",
    },
    openGraph: {
        title: "Jinbeh VIP Club | Join the Family",
        description: "Join 1,200+ Jinbeh VIP members. Unlock a free dessert and gift card on your birthday.",
        url: "https://jinbeh.com/vip",
    images: [
      {
        url: "https://jinbeh.com/images/catalog/jinbeh-chef-special-fried-rice-cocktails.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh Japanese Restaurant — Vip",
      },
    ],
        type: "website",
    }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://jinbeh.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "VIP Club",
      "item": "https://jinbeh.com/vip"
    }
  ]
};

export default function VipPage() {
    return (
        <>
            <Header />
      <div className="container mx-auto max-w-6xl px-4 lg:px-6">
        <BreadcrumbNav items={[{ label: "VIP Club" }]} />
      </div>
            <main id="main-content" className="min-h-screen bg-warm-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

                {/* Simple Hero */}
                <HeroSection className="py-16 bg-gradient-to-br from-charcoal via-deep-indigo to-charcoal text-white">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <RevealSection>
                            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4 flex justify-center">
                                <ShinyBadge className="!text-soft-gold">✦ Join 1,200+ VIP Members ✦</ShinyBadge>
                            </p>
                        </RevealSection>
                        <RevealSection delay={100}>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                                The Jinbeh VIP Club
                            </h1>
                        </RevealSection>
                        <RevealSection delay={200}>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
 Join our exclusive community to unlock special member perks, including a free dessert and a gift card on your birthday when you dine with us!
                            </p>
                        </RevealSection>
                    </div>
                </HeroSection>

                {/* The Form */}
                <section className="py-12 px-6">
                    <div className="container mx-auto">
                        <VipClubForm />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
