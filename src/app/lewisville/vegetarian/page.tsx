import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { QuoteStrip } from "@/components/CustomerVoice";

export const metadata: Metadata = {
    title:
        "Vegetarian Japanese Restaurant in Lewisville | Jinbeh Hibachi & Sushi",
    description:
        "Jinbeh Lewisville offers a clearly labeled vegetarian menu with vegetable hibachi, vegetarian sushi, tempura, and grilled tofu prepared with the same care as our steak and seafood.",
    keywords: [
        "vegetarian japanese restaurant lewisville",
        "vegetarian hibachi lewisville",
        "vegetable hibachi lewisville",
        "vegetarian sushi lewisville",
        "vegetable tempura lewisville",
        "tofu hibachi lewisville",
        "vegetarian japanese restaurant dfw",
        "vegetarian restaurant lewisville tx",
        "vegetarian hibachi near me",
        "vegetarian sushi near me",
    ],
    openGraph: {
        title: "Vegetarian Japanese Restaurant in Lewisville | Jinbeh",
        description:
            "Vegetable hibachi, vegetarian sushi, tempura, and grilled tofu at Jinbeh Lewisville. A clearly labeled vegetarian menu, prepared with the same care as the steak and seafood.",
        url: "https://jinbeh.com/lewisville/vegetarian",
        images: [
            {
                url: "https://jinbeh.com/images/photoshoot/sushi-tower.jpg",
                width: 1200,
                height: 630,
                alt: "Jinbeh Lewisville vegetarian Japanese food — vegetable hibachi and sushi",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vegetarian Japanese Restaurant in Lewisville | Jinbeh",
        description:
            "Vegetable hibachi, vegetarian sushi, tempura, and grilled tofu at Jinbeh Lewisville.",
    },
    alternates: {
        canonical: "https://jinbeh.com/lewisville/vegetarian",
    },
};

// FAQ Schema — every answer leads with "Jinbeh" in the first 10–20 words (house SEO rule)
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Does Jinbeh Lewisville have vegetarian options?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh Lewisville has a clearly labeled vegetarian menu that is part of the regular menu, not a substitution. Vegetable hibachi, vegetarian sushi rolls, vegetable tempura, vegetable yakisoba, and grilled tofu are all available, prepared with the same care as our steak and seafood.",
            },
        },
        {
            "@type": "Question",
            name: "What is the vegetable hibachi at Jinbeh Lewisville?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh cooks vegetable hibachi tableside on the same grill as every other hibachi entree. The plate features fresh seasonal vegetables such as zucchini, onions, mushrooms, carrots, and broccoli, served with onion soup, ginger salad, and steamed rice. You can add grilled tofu or hibachi fried rice.",
            },
        },
        {
            "@type": "Question",
            name: "Can vegetarians eat sushi at Jinbeh Lewisville?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh Lewisville prepares a full range of vegetarian sushi, including avocado rolls, cucumber rolls, asparagus rolls, sweet potato rolls, vegetable tempura rolls, and vegetable nigiri. If you do not see the roll you want, our sushi chefs will build a custom vegetarian roll within reason.",
            },
        },
        {
            "@type": "Question",
            name: "Does Jinbeh Lewisville serve tofu?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh treats tofu as a real protein, not a placeholder. Our hibachi chefs grill tofu tableside with seasoning and char the same way we treat steak. Tofu can be ordered on its own or added to any vegetarian hibachi plate.",
            },
        },
        {
            "@type": "Question",
            name: "Is Jinbeh Lewisville good for a mixed group of vegetarians and meat-eaters?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh Lewisville is built for mixed groups. The hibachi grill seats vegetarian and meat-eating guests at the same table, so vegetarian diners get the full hibachi show with vegetable hibachi and tofu while everyone else gets the steak, chicken, shrimp, scallops, or lobster they came for.",
            },
        },
        {
            "@type": "Question",
            name: "What vegetarian appetizers does Jinbeh Lewisville offer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jinbeh Lewisville offers several vegetarian starters, including edamame, vegetable gyoza, vegetable tempura, miso soup, and a house salad with ginger dressing. Vegetable tempura is one of the most-ordered vegetarian dishes on the menu.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
        { "@type": "ListItem", position: 2, name: "Lewisville", item: "https://jinbeh.com/lewisville" },
        { "@type": "ListItem", position: 3, name: "Vegetarian", item: "https://jinbeh.com/lewisville/vegetarian" },
    ],
};

const vegSections = [
    {
        title: "Vegetarian Hibachi",
        body: "Our hibachi chefs cook vegetable hibachi tableside the same way they cook the rest of the menu. Fresh seasonal vegetables such as zucchini, onions, mushrooms, carrots, and broccoli, the same ginger sauce and yum yum sauce that comes with every hibachi entree, steamed rice or hibachi fried rice on the side, and the option to add tofu prepared to your preference. The show at the grill is the same whether you ordered steak or you ordered vegetables.",
    },
    {
        title: "Vegetarian Sushi & Rolls",
        body: "Our sushi bar prepares a full range of vegetarian rolls: avocado rolls, cucumber rolls, asparagus rolls, sweet potato rolls, vegetable tempura rolls, and vegetable nigiri built around fresh produce and house-made sauce. If you do not see what you want on the menu, our sushi chefs will build a custom vegetarian roll within reason.",
    },
    {
        title: "Vegetable Tempura & Appetizers",
        body: "Vegetable tempura is one of the most-ordered vegetarian dishes at Jinbeh Lewisville. Lightly battered seasonal vegetables, fried to order, served with tempura sauce. We also serve edamame, vegetable gyoza, miso soup, and a house salad with ginger dressing as starters that work for vegetarian guests.",
    },
    {
        title: "Tofu Done Right",
        body: "Tofu at Jinbeh Lewisville is treated as a real protein, not a placeholder. Our hibachi chefs grill tofu with seasoning and char, the way we treat steak. Tofu can be ordered as a main or added to any vegetarian hibachi plate.",
    },
];

export default function LewisvilleVegetarianPage() {
    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <main className="bg-warm-ivory">
                {/* Hero */}
                <section className="relative bg-gradient-to-br from-charcoal via-deep-indigo to-charcoal text-white py-24 sm:py-28">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <span className="inline-block w-16 h-1 bg-gradient-to-r from-soft-gold to-accent-red rounded-full mb-6" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
                            Vegetarian Japanese Restaurant in Lewisville: The Jinbeh Approach
                        </h1>
                        <p className="text-lg sm:text-xl text-warm-ivory/90 leading-relaxed">
                            A clearly labeled vegetarian menu with hibachi, sushi, tempura, and grilled
                            tofu, prepared with the same care as our steak and seafood.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                            <a
                                href="tel:214-488-2224"
                                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold transition-all"
                            >
                                Call Lewisville: (214) 488-2224
                            </a>
                            <Link
                                href="/reservations"
                                className="btn bg-white/15 backdrop-blur text-white border-2 border-white/50 hover:bg-white/25 px-8 py-4 text-lg font-semibold transition-all"
                            >
                                Reserve a Table
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto max-w-5xl px-6 pt-8">
                    <BreadcrumbNav
                        items={[
                            { label: "Lewisville", href: "/lewisville" },
                            { label: "Vegetarian" },
                        ]}
                    />
                </div>

                {/* Why vegetarians choose Jinbeh */}
                <section className="py-16">
                    <div className="container mx-auto max-w-3xl px-6">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-6">
                            Why Vegetarian Diners Choose Jinbeh Lewisville
                        </h2>
                        <div className="space-y-5 text-charcoal/80 text-lg leading-relaxed">
                            <p>
                                Most Japanese steakhouses treat vegetarian guests as an exception the
                                menu accommodates rather than a guest the menu serves. Hibachi tables are
                                built around steak and seafood proteins, with chicken added in. Sushi bars
                                stack their menus with fish. When vegetarian diners walk in, they often
                                have to ask the server what is safe to order and settle for whatever the
                                kitchen can pull together.
                            </p>
                            <p>
                                Jinbeh Lewisville does not work that way. Our vegetarian menu is part of the
                                regular menu, clearly labeled on the page, and prepared with the same
                                attention the kitchen gives every other dish that leaves the grill.
                                Vegetarian guests in Lewisville, Flower Mound, Highland Village, The Colony,
                                and Carrollton have been telling us for years that this is what brings them
                                back.
                            </p>
                        </div>
                    </div>
                </section>

                {/* What vegetarians can order */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto max-w-5xl px-6">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-10 text-center">
                            What Vegetarians Can Order at Jinbeh Lewisville
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {vegSections.map((s) => (
                                <div
                                    key={s.title}
                                    className="bg-warm-ivory rounded-2xl border border-stone-200 p-6"
                                >
                                    <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                                        {s.title}
                                    </h3>
                                    <p className="text-charcoal/80 leading-relaxed">{s.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Clearly labeled */}
                <section className="py-16">
                    <div className="container mx-auto max-w-3xl px-6">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-6">
                            Clearly Labeled, So You Do Not Have to Ask
                        </h2>
                        <p className="text-charcoal/80 text-lg leading-relaxed">
                            One detail vegetarian diners mention again and again is how clearly our menu
                            labels vegetarian dishes. We did that on purpose. Nobody should have to
                            interrogate a server to figure out what is safe to order at a Japanese
                            restaurant. The menu does the work so you can focus on the meal. If you also
                            navigate food allergies, see our{" "}
                            <Link href="/allergy-friendly-dining" className="text-accent-red hover:underline">
                                allergy-friendly dining guide
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                {/* Mixed groups */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto max-w-3xl px-6">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-6">
                            Mixed Groups Welcome
                        </h2>
                        <p className="text-charcoal/80 text-lg leading-relaxed">
                            A common reason groups end up at Jinbeh Lewisville is that they have one or two
                            vegetarian diners and want a restaurant where everyone eats well. Our{" "}
                            <Link href="/lewisville/hibachi" className="text-accent-red hover:underline">
                                hibachi grill
                            </Link>{" "}
                            is built for mixed groups. Vegetarian diners get the full hibachi show
                            experience with vegetable hibachi, tofu prepared on the grill, fried rice, and
                            the same tableside theater as everyone else. Meat-eating diners get the steak,
                            chicken, shrimp, scallops, or lobster they came for. Nobody feels like the
                            secondary guest.
                        </p>
                    </div>
                </section>

                {/* What vegetarian guests say */}
                <section className="py-16">
                    <div className="container mx-auto max-w-3xl px-6">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-8 text-center">
                            What Vegetarian Guests Say
                        </h2>
                        <QuoteStrip
                            quote="There were also great vegetarian options, which was appreciated."
                            author="Google Review"
                        />
                        <p className="text-charcoal/70 text-center max-w-2xl mx-auto mt-8 leading-relaxed">
                            On Google, Jinbeh Lewisville guests have tagged the restaurant with
                            <span className="font-semibold text-charcoal">
                                {" "}&ldquo;clearly labeled vegetarian dishes&rdquo;{" "}
                            </span>
                            and
                            <span className="font-semibold text-charcoal">
                                {" "}&ldquo;highly recommend for vegetarians.&rdquo;{" "}
                            </span>
                            That is the signal we work to earn.
                        </p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto max-w-3xl px-6">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-8 text-center">
                            Vegetarian Dining FAQ
                        </h2>
                        <div className="space-y-4">
                            {faqSchema.mainEntity.map((q) => (
                                <details
                                    key={q.name}
                                    className="bg-white rounded-xl border border-stone-200 p-5 group"
                                >
                                    <summary className="font-heading font-semibold text-charcoal cursor-pointer list-none flex justify-between items-center">
                                        {q.name}
                                        <span className="text-accent-red group-open:rotate-45 transition-transform text-xl">
                                            +
                                        </span>
                                    </summary>
                                    <p className="text-charcoal/80 leading-relaxed mt-3">
                                        {q.acceptedAnswer.text}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visit */}
                <section className="py-16 bg-gradient-to-br from-charcoal to-deep-indigo text-white">
                    <div className="container mx-auto max-w-3xl px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                            Visit Jinbeh Lewisville
                        </h2>
                        <p className="text-warm-ivory/90 text-lg leading-relaxed mb-2">
                            Jinbeh Japanese Steakhouse &amp; Sushi Bar
                        </p>
                        <p className="text-warm-ivory/90">2440 S Stemmons Fwy Suite A, Lewisville, TX 75067</p>
                        <p className="text-warm-ivory/90 mb-6">(214) 488-2224</p>
                        <p className="text-warm-ivory/80 max-w-2xl mx-auto mb-8">
                            Open for lunch and dinner. Walk-ins welcome. Reservations recommended for
                            parties of four or more, especially on weekends. Serving vegetarian Japanese
                            cuisine to Lewisville, Flower Mound, Highland Village, The Colony, Carrollton,
                            and the broader Denton County and North DFW area as a family-owned restaurant
                            since 1988.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:214-488-2224"
                                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold transition-all"
                            >
                                Call (214) 488-2224
                            </a>
                            <Link
                                href="/lewisville/menu"
                                className="btn bg-white/15 backdrop-blur text-white border-2 border-white/50 hover:bg-white/25 px-8 py-4 text-lg font-semibold transition-all"
                            >
                                See the Full Menu
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <PageSeoBoost route="/lewisville/vegetarian" />
            <Footer />
        </>
    );
}
