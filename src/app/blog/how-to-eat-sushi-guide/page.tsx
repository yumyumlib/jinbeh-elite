import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import RelatedArticles from "@/components/RelatedArticles";
import { DidYouKnow, ProTip, LocationCTA, PillarCTA } from "@/components/ArticleEnhancements";
import { Accordion } from "@/components/ui/accordion";

import BreadcrumbNav from "@/components/BreadcrumbNav";
export const metadata: Metadata = {
    title: "How to Eat Sushi: Complete Etiquette & Eating Tips Guide | Jinbeh",
    description:
        "Master sushi etiquette with our comprehensive guide. Learn proper techniques, chopstick tips, soy sauce rules, and what not to do when eating sushi.",
    keywords: [
        "how to eat sushi",
        "sushi etiquette",
        "sushi eating tips",
        "proper way to eat sushi",
        "sushi guide",
        "sushi chopsticks",
        "sushi mistakes",
    ],
    openGraph: {
        title: "How to Eat Sushi: Complete Etiquette & Eating Tips Guide",
        description: "Master the art of eating sushi. Learn proper techniques, etiquette, and insider tips.",
        images: ["/images/blog/jinbeh-frisco-lobster-chicken-hibachi-overhead.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/how-to-eat-sushi-guide",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Eat Sushi: Complete Etiquette & Eating Tips Guide",
    description: "Comprehensive guide to sushi eating etiquette, techniques, and insider tips for proper sushi enjoyment.",
    image: "https://jinbeh.com/images/blog/jinbeh-frisco-lobster-chicken-hibachi-overhead.jpg",
    datePublished: "2026-01-29",
    dateModified: "2026-03-11",
    author: { "@type": "Organization", name: "Jinbeh Japanese Restaurant" },
};

const faqs = [
    { question: "Should I eat sushi with chopsticks or fingers?", answer: "Both work! Hands are traditional for nigiri sushi. Chopsticks are better for rolls. Use whichever you're comfortable with." },
    { question: "Which side should I dip in soy sauce?", answer: "Dip the fish side, not the rice. Light dip only. Too much soy overpowers the chef's seasoned rice." },
    { question: "How do I use wasabi and ginger?", answer: "Pickled ginger cleans your palate between bites. Use wasabi on the fish or mix it lightly. Don't pile it on like ketchup!" },
    { question: "What are common sushi etiquette mistakes?", answer: "Don't use spoons for soy sauce. Never rub chopsticks together. Don't stick chopsticks in rice upright. Never waste food." },
    { question: "Should I eat sushi in one bite?", answer: "Yes, when possible! One bite lets all flavors blend. This is the traditional way. It's perfect for your palate." },
    { question: "What should I order if it's my first time eating sushi?", answer: "Start with cooked rolls like California Roll or Shrimp Tempura Roll. They're milder and a great introduction. Once comfortable, try salmon nigiri, it's buttery and approachable. At Jinbeh, our staff loves helping first-timers find their perfect roll." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is it better to eat sushi with chopsticks or fingers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both are acceptable! Traditional etiquette allows using fingers for nigiri sushi. Chopsticks are better for rolls and sashimi. Choose whichever method makes you most comfortable.",
            },
        },
        {
            "@type": "Question",
            name: "Which side of sushi should I dip in soy sauce?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Dip the fish side, not the rice side. Dipping the rice absorbs too much soy sauce and masks the sushi chef's carefully seasoned rice. Just a light dip of the fish is perfect.",
            },
        },
        {
            "@type": "Question",
            name: "How should I use wasabi and ginger when eating sushi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Use pickled ginger as a palate cleanser between different pieces of sushi. Apply wasabi directly to the fish (if desired) or mix it into your soy sauce. Avoid piling wasabi directly on sushi like a topping.",
            },
        },
        {
            "@type": "Question",
            name: "What are common sushi etiquette mistakes to avoid?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Don't use a spoon for soy sauce, don't rub chopsticks together, avoid sticking chopsticks upright in rice (resembles a funeral ritual), don't mix soy and wasabi together excessively, and never waste food.",
            },
        },
        {
            "@type": "Question",
            name: "Can I eat sushi with my hands?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! In Japan, it's traditional to eat nigiri sushi with your hands. This is completely acceptable and often preferred. Rolls are typically eaten with chopsticks.",
            },
        },
        {
            "@type": "Question",
            name: "Should I eat sushi in one bite?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, try to eat nigiri in one bite when possible. This allows all flavors to blend together. If a piece is too large, it's acceptable to take two bites, but avoid nibbling.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://jinbeh.com" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://jinbeh.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Menu", "item": "https://jinbeh.com/menu" },
        { "@type": "ListItem", "position": 4, "name": "How to Eat Sushi: The Complete Guide" },
    ],
};

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Eat Sushi: Complete Etiquette Guide",
    "description": "Learn the proper way to eat sushi, from handling chopsticks to dipping techniques. A step-by-step guide to enjoying sushi like a pro.",
    "totalTime": "PT5M",
    "step": [
        {
            "@type": "HowToStep",
            "position": 1,
            "name": "Choose Your Eating Style",
            "text": "Sushi can be eaten with chopsticks or fingers, both are acceptable in Japanese tradition. Nigiri is traditionally eaten by hand, while sashimi is best with chopsticks."
        },
        {
            "@type": "HowToStep",
            "position": 2,
            "name": "Pick Up the Sushi Correctly",
            "text": "For nigiri, turn it on its side and gently grip between thumb and middle finger with index finger on top. For maki rolls, use chopsticks to grab from the top."
        },
        {
            "@type": "HowToStep",
            "position": 3,
            "name": "Dip the Fish Side in Soy Sauce",
            "text": "Dip only the fish side of nigiri into soy sauce, never the rice. A light touch is all you need. Too much soy sauce overpowers the chef's carefully seasoned rice."
        },
        {
            "@type": "HowToStep",
            "position": 4,
            "name": "Eat in One Bite",
            "text": "Try to eat each piece in one bite so all the flavors blend together. If a piece is too large, two bites are acceptable, but avoid nibbling."
        },
        {
            "@type": "HowToStep",
            "position": 5,
            "name": "Use Ginger as a Palate Cleanser",
            "text": "Eat a small slice of pickled ginger between different types of sushi to cleanse your palate. Do not place ginger on top of sushi."
        },
        {
            "@type": "HowToStep",
            "position": 6,
            "name": "Apply Wasabi Sparingly",
            "text": "If your sushi doesn't already contain wasabi, add a tiny amount directly to the fish. Avoid mixing wasabi into soy sauce, this is considered improper etiquette."
        },
        {
            "@type": "HowToStep",
            "position": 7,
            "name": "Eat in the Right Order",
            "text": "Start with lighter, milder fish (white fish, then salmon) and progress to richer, fattier cuts. End with tamago (egg) as a sweet finish."
        },
    ],
};

export default function HowToEatSushi() {
    return (
        <main id="main-content" className="min-h-screen bg-warm-ivory">
        <div className="container mx-auto max-w-6xl px-4 lg:px-6">
          <BreadcrumbNav items={[{ label: "Blog", href: "/blog" }, { label: "How To Eat Sushi Guide" }]} />
        </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/images/blog/jinbeh-frisco-lobster-chicken-hibachi-overhead.jpg"
                >
                    <source src="/videos/LOCAL-LEW-SUSHI-sashimi-carpaccio-prep-chef-hands-01.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />

                <div className="relative z-10 container mx-auto px-6 pb-12">
                    <nav className="flex items-center gap-2 text-sm text-warm-ivory/70 mb-4">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <Link href="/menu" className="hover:text-white">Menu</Link>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-charcoal bg-soft-gold mb-4">
                        🍣 Cuisine
                    </span>

                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white max-w-4xl hero-headline mb-4">
                        How to Eat Sushi: Master Etiquette & Tips
                    </h1>
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden my-8">
              <Image
                src="/images/food/SamaraiRollCloseup.jpg"
                alt="Close-up of artfully crafted samurai sushi roll at Jinbeh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                loading="lazy"
              />
            </div>

                    <div className="flex items-center gap-4 text-warm-ivory/70 text-sm">
                        <span>By Jinbeh</span>
                        <span>•</span>
                        <span>January 29, 2026</span>
                        <span>•</span>
                        <span>12 min read</span>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <article className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-charcoal/80 leading-relaxed mb-8">
                                        <strong>Feeling nervous about eating sushi?</strong> You're not alone. From chopsticks to soy sauce to wasabi,
                                        there are plenty of unwritten rules. But here's the good news: sushi is meant to be enjoyed, and there's
                                        no pressure to be perfect. Let's walk through the proper way to eat sushi so you can dine with confidence.
                                    </p>
              <div className="my-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">💡 Insider Knowledge from Jinbeh&apos;s Sushi Master</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  At Jinbeh, our head sushi chef, who has been with us for nearly 30 years, teaches that understanding the terminology is key: <strong>sashimi</strong> means &ldquo;sliced&rdquo; (raw fish, no rice), <strong>nigiri-zushi</strong> is the rice ball with fish on top (what most people call &ldquo;sushi&rdquo;), and <strong>maki</strong> is any roll shaped using a bamboo roller. Knowing these terms helps you order with confidence at any Japanese restaurant.
                </p>
              </div>

                                    <div className="bg-gradient-to-br from-soft-gold/10 to-soft-gold/10 border-l-4 border-soft-gold rounded-r-2xl p-6 my-8">
                                        <p className="text-charcoal font-medium italic text-lg">
                                            "Sushi is not just about the food, it's about respect, tradition, and the experience.
                                            At Jinbeh, we believe everyone should feel comfortable enjoying sushi their own way,
                                            while learning to appreciate the craft behind each piece."
                                        </p>
                                        <span className="text-sm text-charcoal/80 mt-2 block">, The Jinbeh Team</span>
                                    </div>

                                    <DidYouKnow
                                        fact={`The word "sushi" doesn't mean raw fish, it refers to the seasoned vinegared rice. "Su" means vinegar and "shi" comes from "meshi" (rice). You can have sushi without any raw fish at all.`}
                                        source="Japanese Etymology"
                                    />

                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        📖 Sushi Etiquette Step-by-Step
                                    </h2>

                                    <p className="text-charcoal/80">
                                        Let's walk through the basic steps to eat sushi properly, from preparation to the final bite. Whether you're exploring <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline font-semibold">different types of sushi</Link>, learning about <Link href="/blog/sashimi-vs-sushi" className="text-accent-red hover:underline font-semibold">sashimi vs sushi</Link>, or understanding proper etiquette, we've got you covered.
                                    </p>
                                </div>

                                {/* Step-by-Step Guide */}
                                <div className="space-y-6 my-12">
                                    <div className="bg-gradient-to-r from-soft-gold/20 to-soft-gold/10 rounded-2xl p-6 border-l-4 border-soft-gold">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-soft-gold text-charcoal font-heading font-bold">1</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Prepare Your Station</h3>
                                                <p className="text-charcoal/80">
                                                    Arrange your chopsticks (or use them if you prefer), napkin, and small soy sauce dish.
                                                    Place the chopstick rest in front of you. Your soy sauce dish should be at a comfortable angle
                                                    for dipping without splashing.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-soft-gold/20 to-soft-gold/10 rounded-2xl p-6 border-l-4 border-soft-gold">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-soft-gold text-charcoal font-heading font-bold">2</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Start with Mild Flavors</h3>
                                                <p className="text-charcoal/80">
                                                    Begin your meal with lighter, more delicate pieces (white fish like flounder or sea bream).
                                                    This preps your palate before moving to bolder flavors like fatty tuna or strong-flavored fish.
                                                    Think of it as a culinary journey.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-soft-gold/20 to-soft-gold/10 rounded-2xl p-6 border-l-4 border-soft-gold">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-soft-gold text-charcoal font-heading font-bold">3</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Dip (Lightly!) the Fish Side</h3>
                                                <p className="text-charcoal/80">
                                                    Hold the sushi with your fingers or chopsticks. Flip it so the fish faces down into the soy sauce.
                                                    Use a quick, light dip, just the bottom touches. Dipping the rice side ruins the chef's work and
                                                    makes the piece soggy.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-soft-gold/20 to-soft-gold/10 rounded-2xl p-6 border-l-4 border-soft-gold">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-soft-gold text-charcoal font-heading font-bold">4</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Eat in One Bite (If Possible)</h3>
                                                <p className="text-charcoal/80">
                                                    Pop the entire piece into your mouth. This allows the fish, rice, and nori to blend flavors together.
                                                    If it's too large, two bites are acceptable, just avoid nibbling or breaking the piece apart.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-soft-gold/20 to-soft-gold/10 rounded-2xl p-6 border-l-4 border-soft-gold">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-soft-gold text-charcoal font-heading font-bold">5</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Cleanse Your Palate</h3>
                                                <p className="text-charcoal/80">
                                                    Between different pieces (especially when switching from spicy to delicate), take a bite of
                                                    pickled ginger. It refreshes your palate and prepares your taste buds for the next flavor profile.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-soft-gold/20 to-soft-gold/10 rounded-2xl p-6 border-l-4 border-soft-gold">
                                        <div className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-soft-gold text-charcoal font-heading font-bold">6</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Enjoy the Experience</h3>
                                                <p className="text-charcoal/80">
                                                    Pause between bites. Take in the flavors, textures, and presentation. Sushi is meant to be
                                                    savored. Conversation, appreciation, and mindful eating are all part of the proper sushi experience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🥢 Chopsticks vs. Fingers: What's Proper?
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        This is one of the biggest misconceptions about sushi etiquette. In Japan, both are completely acceptable!
                                    </p>
                                </div>

                                {/* Chopsticks vs Fingers Comparison */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                                    <div className="bg-warm-ivory rounded-2xl p-6 border-2 border-soft-gold">
                                        <h3 className="font-heading font-bold text-xl text-charcoal mb-4 flex items-center gap-2">
                                            <span className="text-2xl">🥢</span> Chopsticks
                                        </h3>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Best For:</p>
                                                <p className="text-charcoal/70 text-sm">Rolls, sashimi, and if you're more comfortable</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Advantages:</p>
                                                <ul className="text-charcoal/70 text-sm space-y-1">
                                                    <li>• Keeps fingers clean</li>
                                                    <li>• Good control for rolls</li>
                                                    <li>• Feels more formal</li>
                                                    <li>• Easier if you're clumsy</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Pro Tip:</p>
                                                <p className="text-charcoal/70 text-sm italic">Hold them at a 45-degree angle. Never rub them together, it's considered rude!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-2 border-accent-red">
                                        <h3 className="font-heading font-bold text-xl text-charcoal mb-4 flex items-center gap-2">
                                            <span className="text-2xl">👌</span> Fingers
                                        </h3>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Best For:</p>
                                                <p className="text-charcoal/70 text-sm">Nigiri, traditional sushi, authentic experience</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Advantages:</p>
                                                <ul className="text-charcoal/70 text-sm space-y-1">
                                                    <li>• Most authentic in Japan</li>
                                                    <li>• Better control of temperature</li>
                                                    <li>• Allows precise dipping</li>
                                                    <li>• More enjoyable experience</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Pro Tip:</p>
                                                <p className="text-charcoal/70 text-sm italic">Use your thumb and first two fingers. Grab from the side, not the top!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-charcoal to-deep-indigo rounded-2xl p-6 text-white my-8">
                                    <p className="font-semibold mb-2">The Bottom Line:</p>
                                    <p className="text-white/90">
                                        In authentic Japanese dining, using your fingers for nigiri is not just accepted, it's preferred!
                                        You won't offend anyone. Choose whichever method makes you feel most comfortable and confident.
                                    </p>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🥢 Chopstick Etiquette You Must Know
                                    </h2>
                                </div>

                                {/* Chopstick Rules */}
                                <div className="space-y-4 my-8">
                                    <div className="flex gap-4 p-4 bg-warm-ivory rounded-xl">
                                        <span className="text-2xl flex-shrink-0">❌</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Never stick chopsticks upright in rice</p>
                                            <p className="text-charcoal/70 text-sm">This resembles a funeral ritual in Japanese culture and is deeply disrespectful.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-4 bg-warm-ivory rounded-xl">
                                        <span className="text-2xl flex-shrink-0">❌</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Don't rub chopsticks together</p>
                                            <p className="text-charcoal/70 text-sm">This suggests the sticks are cheap or low quality. If they're splintering, ask for a fresh pair.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-4 bg-warm-ivory rounded-xl">
                                        <span className="text-2xl flex-shrink-0">❌</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Don't pass food from chopstick to chopstick</p>
                                            <p className="text-charcoal/70 text-sm">This mimics a funeral ritual where families pass cremated bones between chopsticks.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-4 bg-warm-ivory rounded-xl">
                                        <span className="text-2xl flex-shrink-0">✅</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Place chopsticks on the rest between bites</p>
                                            <p className="text-charcoal/70 text-sm">Never leave them on your plate or crossed on the table.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-4 bg-warm-ivory rounded-xl">
                                        <span className="text-2xl flex-shrink-0">✅</span>
                                        <div>
                                            <p className="font-semibold text-charcoal">Hold them gently and gracefully</p>
                                            <p className="text-charcoal/70 text-sm">They're a tool, not a weapon! Smooth, controlled movements show respect.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🍶 Soy Sauce Etiquette: The Art of Dipping
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        Soy sauce is crucial to the sushi experience, but there are definitely right and wrong ways to use it.
                                    </p>
                                </div>

                                {/* Soy Sauce Guide */}
                                <div className="bg-gradient-to-br from-soft-gold/20 to-soft-gold/10 rounded-2xl p-8 my-8 border-l-4 border-soft-gold">
                                    <h3 className="font-heading font-bold text-xl text-charcoal mb-6">The Golden Rules of Soy Sauce</h3>
                                    <div className="space-y-4">
                                        <div className="flex gap-4">
                                            <span className="text-2xl flex-shrink-0">1️⃣</span>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Dip the Fish, Not the Rice</p>
                                                <p className="text-charcoal/80">
                                                    The rice is already seasoned by the sushi chef with vinegar and salt. Dipping the rice side means you're:
                                                    (a) soaking up too much salt, (b) ruining the chef's careful seasoning, and (c) making the rice mushy.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <span className="text-2xl flex-shrink-0">2️⃣</span>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Use a Light Touch</p>
                                                <p className="text-charcoal/80">
                                                    Quick dips only! A fraction of a second in soy sauce is enough. Deep dunking ruins the delicate flavors
                                                    and creates a salty, overwhelming taste.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <span className="text-2xl flex-shrink-0">3️⃣</span>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Avoid Mixing Soy Sauce and Wasabi</p>
                                                <p className="text-charcoal/80">
                                                    Many people mix these into a murky brown paste. This is not traditional. Use them separately.
                                                    Apply wasabi directly to the fish if you want heat, or dab a tiny bit of wasabi on the side.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <span className="text-2xl flex-shrink-0">4️⃣</span>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Always Use a Small Dish</p>
                                                <p className="text-charcoal/80">
                                                    Pour a small amount from the main bottle into your personal dish. Never dunk directly into the bottle, that's unsanitary.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <span className="text-2xl flex-shrink-0">5️⃣</span>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Don't Waste What You Pour</p>
                                                <p className="text-charcoal/80">
                                                    Once soy sauce is in your dish, finish it. Leaving puddles is disrespectful to the chef and the meal.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        🔥 Wasabi & Ginger: When, Where & How to Use Them
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        These are the supporting players in your sushi performance. Let's break down how to use them properly.
                                    </p>
                                </div>

                                {/* Wasabi vs Ginger */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                                    <div className="bg-gradient-to-br from-accent-red/10 to-soft-gold/10 rounded-2xl p-6 border-2 border-accent-red">
                                        <h3 className="font-heading font-bold text-xl text-charcoal mb-4">🌶️ Wasabi</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">What It Is:</p>
                                                <p className="text-charcoal/80 text-sm">
                                                    Japanese horseradish (though most restaurants use imitation). It's hot, pungent, and meant to complement the fish.
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">How to Use It:</p>
                                                <ul className="text-charcoal/80 text-sm space-y-2">
                                                    <li>• Apply tiny amounts directly to the fish</li>
                                                    <li>• OR dab a small amount on the side of your soy sauce</li>
                                                    <li>• Resist the urge to pile it on like a topping</li>
                                                    <li>• If you don't want it, that's fine too!</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Pro Tip:</p>
                                                <p className="text-charcoal/80 text-sm italic">
                                                    Real wasabi is subtle and complex. The heat builds slowly rather than attacking your sinuses.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-deep-indigo/10 to-deep-indigo/10 rounded-2xl p-6 border-2 border-deep-indigo">
                                        <h3 className="font-heading font-bold text-xl text-charcoal mb-4">🍋 Pickled Ginger</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">What It Is:</p>
                                                <p className="text-charcoal/80 text-sm">
                                                    Thinly sliced ginger pickled in vinegar. It's refreshing, slightly sweet, and your palate's best friend.
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">How to Use It:</p>
                                                <ul className="text-charcoal/80 text-sm space-y-2">
                                                    <li>• Eat a slice between different pieces</li>
                                                    <li>• Cleanse your palate before trying new flavors</li>
                                                    <li>• NEVER use it as a topping on sushi</li>
                                                    <li>• It's an intermezzo, not a condiment</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-charcoal mb-1">Pro Tip:</p>
                                                <p className="text-charcoal/80 text-sm italic">
                                                    Many chefs add ginger on top of nigiri themselves. If they do, eat it! It's intentional.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        ⚠️ Common Sushi Mistakes to Avoid
                                    </h2>

                                    <p className="text-charcoal/80 mb-6">
                                        Don't worry if you've done these before, most people have! But now you'll know better.
                                    </p>
                                </div>

                                {/* Common Mistakes */}
                                <div className="space-y-4 my-8">
                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Dunking the Entire Roll in Soy Sauce</h3>
                                                <p className="text-charcoal/80">
                                                    Rolls are already flavorful. A light dip on one side is enough. Oversaturation makes them soggy and salty.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Piling Wasabi on Top Like a Topping</h3>
                                                <p className="text-charcoal/80">
                                                    Wasabi is meant to enhance, not smother. A tiny dab on the fish is plenty. Your sushi shouldn't look like a wasabi mountain.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Mixing Soy Sauce and Wasabi Into a Paste</h3>
                                                <p className="text-charcoal/80">
                                                    This creates a murky, overpowering mixture that masks flavors. Keep them separate and use sparingly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Taking Tiny Bites Instead of One Bite</h3>
                                                <p className="text-charcoal/80">
                                                    Nibbling falls apart. Eat nigiri in one bite to experience all the flavors together. It's part of the art.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Using Ginger as a Topping</h3>
                                                <p className="text-charcoal/80">
                                                    Ginger goes on your palate, not on your sushi (unless the chef placed it there). It's a palate cleanser, not a flavor enhancer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Rubbing Chopsticks Together</h3>
                                                <p className="text-charcoal/80">
                                                    This implies the chopsticks are cheap or splintery. If they're not smooth, politely ask for a fresh pair.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Wasting Food</h3>
                                                <p className="text-charcoal/80">
                                                    Leaving sushi on your plate or not finishing your soy sauce is disrespectful to the chef and the meal's tradition.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-warm-ivory rounded-2xl p-6 border-l-4 border-accent-red hover:shadow-lg transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <span className="text-3xl flex-shrink-0">🚫</span>
                                            <div className="flex-1">
                                                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">Using a Spoon in the Soy Sauce Dish</h3>
                                                <p className="text-charcoal/80">
                                                    Spoons aren't necessary. Dip directly or use chopsticks to guide food. Spoons make dipping awkward.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mt-12 mb-6">
                                        💡 Pro Tips for Dining Like an Expert
                                    </h2>
                                </div>

                                {/* Pro Tips */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                    <div className="bg-gradient-to-br from-soft-gold/30 to-soft-gold/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #1: Respect the Sushi Chef</p>
                                        <p className="text-charcoal/80 text-sm">
                                            Every piece is crafted with care. Eating with intention and appreciation honors their work.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/30 to-soft-gold/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #2: Order Progressively</p>
                                        <p className="text-charcoal/80 text-sm">
                                            Start mild, end bold. White fish, then tuna, then spicy rolls. This builds the experience.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/30 to-soft-gold/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #3: Sit at the Counter</p>
                                        <p className="text-charcoal/80 text-sm">
                                            If possible, eat at the sushi bar. You'll get the freshest pieces and can interact with the chef.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/30 to-soft-gold/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #4: No Photos, Just Moments</p>
                                        <p className="text-charcoal/80 text-sm">
                                            A quick photo is fine, but eat while the sushi is fresh. Cold sushi loses its delicate flavors.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/30 to-soft-gold/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #5: Ask the Chef's Recommendation</p>
                                        <p className="text-charcoal/80 text-sm">
                                            "What's fresh today?" Chef's specials are often the best, they know quality when they see it.
                                        </p>
                                    </div>

                                    <div className="bg-gradient-to-br from-soft-gold/30 to-soft-gold/20 rounded-xl p-6">
                                        <p className="font-semibold text-charcoal mb-2">Tip #6: Don't Rush</p>
                                        <p className="text-charcoal/80 text-sm">
                                            Sushi is not fast food. Savor each bite, pause, appreciate. Rushing ruins the experience.
                                        </p>
                                    </div>
                                </div>

                                <ProTip variant="insider">
                                    <strong>First time at Jinbeh?</strong> Regulars swear by the sushi bar, you get chef interaction and the freshest cuts. Ask what's good that day; one recent reviewer called the experience "delightful" and said the Volcano Roll and Spider Roll are must-tries. Don't be shy about being a beginner, our chefs love guiding newcomers. <Link href="/reservations" className="text-accent-red hover:underline">Reserve a seat at the bar →</Link>
                                </ProTip>

                                {/* FAQ Section */}
                                <div className="mt-16">
                                    <h2 className="text-3xl font-heading font-bold text-charcoal mb-8">❓ Frequently Asked Questions</h2>

                                    <div className="space-y-4">
                                        <Accordion items={faqs.map((faq: any) => ({ title: faq.question, content: faq.answer }))} />
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-16 p-8 bg-gradient-to-br from-soft-gold to-accent-red rounded-3xl text-center">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-4">🍣 Ready to Dine with Confidence?</h3>
                                    <p className="text-white/90 mb-8 text-lg">
                                        Now that you know the etiquette, experience authentic sushi at Jinbeh. Our chefs prepare every piece with care,
                                        and our team ensures your meal is unforgettable. Visit our <Link href="/frisco" className="text-white hover:text-warm-ivory underline">Frisco location</Link> or <Link href="/lewisville" className="text-white hover:text-warm-ivory underline">Lewisville location</Link> to practice what you've learned.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/frisco/menu" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                                            Explore Our Menu
                                        </Link>
                                        <Link href="/reservations" className="btn bg-white/20 text-white border-2 border-white/50 hover:bg-white hover:text-accent-red px-8 py-4 rounded-xl font-semibold text-lg">
                                            Reserve a Table
                                        </Link>
                                    </div>
                                </div>

                                {/* Sushi Cluster Links */}
                                <div className="mt-12 p-8 bg-accent-red/10 rounded-2xl border-2 border-accent-red/30">
                                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">🍣 Complete Your Sushi Education</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Link href="/blog/types-of-sushi" className="p-4 border-2 border-accent-red rounded-xl hover:bg-accent-red/10 transition-colors">
                                            <p className="font-semibold text-charcoal">Types of Sushi</p>
                                            <p className="text-charcoal/70 text-sm mt-1">Explore nigiri, rolls, and specialty creations</p>
                                        </Link>
                                        <Link href="/blog/sashimi-vs-sushi" className="p-4 border-2 border-accent-red rounded-xl hover:bg-accent-red/10 transition-colors">
                                            <p className="font-semibold text-charcoal">Sashimi vs Sushi</p>
                                            <p className="text-charcoal/70 text-sm mt-1">Understand the key differences</p>
                                        </Link>
                                        <Link href="/blog/sushi-identification-chart" className="p-4 border-2 border-accent-red rounded-xl hover:bg-accent-red/10 transition-colors">
                                            <p className="font-semibold text-charcoal">Sushi Identification Chart</p>
                                            <p className="text-charcoal/70 text-sm mt-1">Complete reference guide to all sushi</p>
                                        </Link>
                                        <Link href="/blog/what-is-omakase" className="p-4 border-2 border-accent-red rounded-xl hover:bg-accent-red/10 transition-colors">
                                            <p className="font-semibold text-charcoal">What is Omakase?</p>
                                            <p className="text-charcoal/70 text-sm mt-1">Discover the ultimate dining experience</p>
                                        </Link>
                                    </div>
                                </div>

                            </div>

                            <div className="bg-warm-ivory/60 rounded-2xl p-6 md:p-8 my-10 border border-soft-gold/30">
                                <h2 className="font-heading text-2xl font-bold text-charcoal mb-3">
                                    Try Fresh Sushi at Jinbeh: Beginners Welcome
                                </h2>
                                <p className="text-charcoal/80 leading-relaxed mb-4">
                                    Jinbeh has been crafting fresh, made-to-order sushi in DFW since 1988. Our sushi chefs co-created the entire menu over three decades, and they love helping first-timers find a roll they&apos;ll love. Whether you&apos;re brand new to sushi, returning after a long break, or a seasoned regular, you&apos;ll feel welcome at our sushi bar in <Link href="/frisco/sushi-rolls" className="text-accent-red hover:underline">Frisco</Link> and <Link href="/lewisville" className="text-accent-red hover:underline">Lewisville</Link>.
                                </p>
                                <p className="text-charcoal/80 leading-relaxed mb-4">
                                    New to sushi? Start with cooked or mild options like a California roll, shrimp tempura roll, or salmon nigiri. Our staff is happy to recommend <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">approachable rolls and signature specialties</Link> based on your taste, and we&apos;ll explain the textures, flavors, and proper way to eat each piece.
                                </p>
                                <p className="text-charcoal/80 leading-relaxed">
                                    Bringing the kids? We provide <strong>training chopsticks</strong> at every table so little ones can practice while they enjoy their first taste of sushi. It&apos;s one of many reasons families have made Jinbeh their go-to <Link href="/blog/best-sushi-frisco" className="text-accent-red hover:underline">sushi spot in Frisco TX</Link> for nearly four decades.
                                </p>
                            </div>

                            <PillarCTA type="vip" />
                            <LocationCTA location="both" />
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <RelatedArticles currentSlug="how-to-eat-sushi-guide" />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
