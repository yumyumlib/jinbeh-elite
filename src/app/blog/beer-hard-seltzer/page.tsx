import Link from "next/link";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
    title: "Beer & Hard Seltzer: Jinbeh's Japanese Twist | Jinbeh DFW",
    description:
        "Explore Jinbeh's Japanese beer and hard seltzer selection. Sapporo on tap, Asahi, Kirin Ichiban, and craft seltzers—perfectly paired with hibachi and sushi.",
    keywords: [
        "japanese beer",
        "sapporo beer",
        "japanese hard seltzer",
        "beer with sushi",
        "beer with hibachi",
    ],
    openGraph: {
        title: "Beer & Hard Seltzer: Jinbeh's Japanese Twist",
        description: "Discover the perfect beer and seltzer pairings for hibachi and sushi at Jinbeh.",
        images: ["/images/blog/6-C060324-6405.jpg"],
    },
    alternates: {
        canonical: "https://jinbeh.com/blog/beer-hard-seltzer",
    },
};

const faqs = [
    {
        question: "What Japanese beers does Jinbeh serve?",
        answer: "Jinbeh serves Sapporo (on tap and bottled), Asahi Super Dry, and Kirin Ichiban—the three most popular Japanese beer brands. We also carry domestic and craft options. Our Sapporo on tap is a guest favorite and pairs perfectly with both hibachi and sushi.",
    },
    {
        question: "What beer pairs best with sushi?",
        answer: "Light, crisp beers pair best with sushi. Japanese lagers like Sapporo and Asahi are ideal because they complement delicate fish flavors without overpowering them. For richer rolls with eel or tempura, try Kirin Ichiban for its slightly fuller body. Ask your server for personalized recommendations.",
    },
    {
        question: "What beer pairs best with hibachi?",
        answer: "Hibachi's bold, smoky flavors pair well with a cold Sapporo draft or Asahi Super Dry. The crispness of Japanese lagers cuts through the richness of hibachi-grilled steak and fried rice. For a lighter option, a citrus hard seltzer complements the grilled vegetables beautifully.",
    },
    {
        question: "Does Jinbeh have happy hour drink specials?",
        answer: "Yes! Our happy hour features discounted beer, sake, cocktails, and appetizers. Hours vary by location. Visit our happy hour page or call Frisco (214) 619-1200 or Lewisville (214) 488-2224 for current happy hour times and specials.",
    },
    {
        question: "What is the difference between Sapporo, Asahi, and Kirin?",
        answer: "Sapporo is smooth with a clean finish—great for beginners. Asahi Super Dry is ultra-crisp with a dry finish, making it refreshing with rich foods. Kirin Ichiban uses only first-press wort for a fuller, slightly sweeter flavor. All three are Japanese rice lagers, but each has a distinct character.",
    },
];



export default function BeerHardSeltzer() {
    return (
        <ArticleLayout
            title="Beer & Hard Seltzer: Jinbeh's Japanese Twist"
            metaDescription="From Sapporo on tap to refreshing hard seltzers, discover Jinbeh's beer and seltzer selection—perfectly chosen to pair with our hibachi and sushi. Here's your guide to what to drink at a Japanese restaurant."
            heroImage="/images/blog/6-C060324-6405.jpg"
            heroAlt="Japanese beer selection including Sapporo on tap at Jinbeh's bar"
            category="Beverages"
            categorySlug="beverages"
            slug="beer-hard-seltzer"
            publishDate="February 2026"
            readTime="6 min read"
            faqs={faqs}
            keyTakeaway="Japanese rice lagers (Sapporo, Asahi, Kirin) are the perfect companions for sushi and hibachi—crisp, clean, and designed to complement rather than compete with the food. Hard seltzers offer a lighter alternative that pairs especially well with seafood rolls."
        >
            <h2>The Japanese Beer Experience</h2>

            <p>
                There&apos;s a reason Japanese beers have become some of the most popular in the world: they&apos;re
                specifically crafted to pair with food. Unlike heavy craft IPAs or bitter ales, Japanese
                lagers are clean, crisp, and refreshing—designed to enhance your meal rather than overpower it.
            </p>

            <p>
                At <Link href="/" className="text-accent-red hover:underline">Jinbeh</Link>, our guests consistently
                mention that &quot;Sapporo on tap is a highlight&quot; of the dining experience. There&apos;s nothing quite like
                a cold Sapporo alongside sizzling <Link href="/blog/hibachi-dining-experience" className="text-accent-red hover:underline">hibachi</Link> or
                fresh <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline">sushi rolls</Link> from our <Link href="/menu" className="text-accent-red hover:underline">full menu</Link>.
            </p>

            <p>
                Explore our complete beverage program at the <Link href="/bar" className="text-accent-red hover:underline">Jinbeh bar</Link>, where our bartenders can guide you through Japanese beers, craft cocktails, and premium sake selections.
            </p>

            <h2>Our Japanese Beer Selection</h2>

            <h3>🍺 Sapporo Premium</h3>
            <p>
                <strong>Flavor profile:</strong> Smooth, balanced, clean finish<br />
                <strong>ABV:</strong> 4.9%<br />
                <strong>Best with:</strong> Everything—it&apos;s the ultimate all-purpose Japanese beer<br />
                <strong>Available:</strong> On tap (draft) and bottled<br /><br />
                Japan&apos;s oldest beer brand, brewed since 1876. Sapporo is our #1 seller and the go-to
                recommendation for first-time visitors. Our guests love the draft pour—there&apos;s nothing
                like a cold, freshly poured Sapporo.
            </p>

            <h3>🍺 Asahi Super Dry</h3>
            <p>
                <strong>Flavor profile:</strong> Ultra-crisp, dry finish, very refreshing<br />
                <strong>ABV:</strong> 5.0%<br />
                <strong>Best with:</strong> Rich hibachi steak, fried rice, tempura<br /><br />
                The &quot;karakuchi&quot; (dry) style revolutionized Japanese brewing. Asahi Super Dry cuts through
                the richness of hibachi-grilled meats and fried dishes like nothing else. If you like
                your beer clean and sharp, this is your pick.
            </p>

            <h3>🍺 Kirin Ichiban</h3>
            <p>
                <strong>Flavor profile:</strong> Slightly fuller body, subtle sweetness<br />
                <strong>ABV:</strong> 5.0%<br />
                <strong>Best with:</strong> Sashimi, grilled seafood, richer sushi rolls<br /><br />
                &quot;Ichiban&quot; means &quot;first press&quot;—Kirin uses only the first press of the wort, resulting in a
                smoother, more complex flavor. Excellent with delicate seafood dishes and for those who
                want a bit more depth than a standard lager.
            </p>

            <h2>Hard Seltzer: The Light Alternative</h2>

            <p>
                For guests who prefer something lighter, our seltzer selection offers a refreshing
                alternative to beer without sacrificing flavor. Hard seltzers are particularly great
                during warmer months and pair beautifully with lighter fare.
            </p>

            <p>
                <strong>Best pairings:</strong> Hard seltzers with citrus or tropical flavors are excellent
                alongside fresh sushi rolls, especially seafood-focused rolls. They also pair well with
                our edamame and lighter appetizers.
            </p>

            <h2>The Perfect Pairing Guide</h2>

            <p>
                Not sure what to order? Here&apos;s our quick pairing guide based on what you&apos;re eating:
            </p>

            <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-deep-indigo text-white">
                            <th className="px-4 py-3 text-left font-semibold rounded-tl-lg">Ordering…</th>
                            <th className="px-4 py-3 text-left font-semibold rounded-tr-lg">Pair With</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-warm-ivory-dark bg-white">
                            <td className="px-4 py-3 font-medium">Hibachi steak or chicken</td>
                            <td className="px-4 py-3">Sapporo Draft or Asahi Super Dry</td>
                        </tr>
                        <tr className="border-b border-warm-ivory-dark bg-warm-ivory/30">
                            <td className="px-4 py-3 font-medium">Hibachi shrimp or seafood</td>
                            <td className="px-4 py-3">Kirin Ichiban or citrus seltzer</td>
                        </tr>
                        <tr className="border-b border-warm-ivory-dark bg-white">
                            <td className="px-4 py-3 font-medium">Sushi rolls (classic)</td>
                            <td className="px-4 py-3">Sapporo — won&apos;t overpower delicate fish</td>
                        </tr>
                        <tr className="border-b border-warm-ivory-dark bg-warm-ivory/30">
                            <td className="px-4 py-3 font-medium">Sushi rolls (spicy)</td>
                            <td className="px-4 py-3">Asahi Super Dry to cool the heat</td>
                        </tr>
                        <tr className="border-b border-warm-ivory-dark bg-white">
                            <td className="px-4 py-3 font-medium">Sashimi</td>
                            <td className="px-4 py-3">Kirin Ichiban or <Link href="/blog/sake-alcohol-strength" className="text-accent-red hover:underline">premium sake</Link></td>
                        </tr>
                        <tr className="bg-warm-ivory/30">
                            <td className="px-4 py-3 font-medium rounded-bl-lg">Tempura & fried apps</td>
                            <td className="px-4 py-3 rounded-br-lg">Asahi Super Dry (cuts through richness)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p>
                Want to explore beyond beer? Check out our <Link href="/blog/japanese-cocktails" className="text-accent-red hover:underline">Japanese cocktails guide</Link> or
                our <Link href="/blog/sake-taste-guide" className="text-accent-red hover:underline">sake tasting guide</Link> for
                even more options. Our guests say the &quot;lychee martini is a must&quot;—another great option
                alongside your meal.
            </p>

            <h2>Happy Hour &amp; Beer Specials</h2>

            <p>
                The best way to explore our beer and seltzer selection? <Link href="/happy-hour" className="text-accent-red hover:underline">Happy hour at Jinbeh</Link>.
                Enjoy discounted Sapporo drafts, select cocktails, and appetizers. It&apos;s the perfect
                way to start your evening before the <Link href="/blog/discover-teppanyaki" className="text-accent-red hover:underline">hibachi show</Link> begins.
            </p>

            <p>
                Whether you&apos;re a Japanese beer connoisseur or trying your first Sapporo, our bartenders
                are happy to guide you to the perfect drink for your meal. That&apos;s been the Jinbeh
                way since 1988.
            </p>
        </ArticleLayout>
    );
}
