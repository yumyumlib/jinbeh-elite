import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Meet Fuji-san, the Jinbeh Chef Who Watched DFW Learn Sushi | Jinbeh",
  description:
    "Meet Fuji-san, a Jinbeh sushi chef since 1993, and see how traditional Japanese cooking helped shape sushi in North Texas. Craft, history, and clean flavor.",
  keywords: [
    "head sushi chef dfw",
    "authentic japanese restaurant frisco",
    "japanese restaurant history dfw",
    "best sashimi frisco",
    "family owned japanese restaurant",
  ],
  openGraph: {
    title: "Meet Fuji-san, the Jinbeh Chef Who Watched DFW Learn Sushi",
    description:
      "A Jinbeh sushi chef since 1993, and how traditional Japanese cooking helped shape sushi in North Texas.",
    url: "https://jinbeh.com/blog/fuji-san-jinbeh-sushi-chef-dfw",
    images: ["/images/about/fuji-san-jinbeh-sushi-chef.jpg"],
    type: "article",
  },
  alternates: { canonical: "https://jinbeh.com/blog/fuji-san-jinbeh-sushi-chef-dfw" },
};

const faqs = [
  {
    question: "How long has Fuji-san worked at Jinbeh?",
    answer:
      "Fuji-san joined Jinbeh in 1993 and has been part of the restaurant for more than three decades, bringing traditional Japanese training to the sushi bar.",
  },
  {
    question: "Did Fuji-san create every Jinbeh specialty roll?",
    answer:
      "No. Fuji-san says other chefs led much of the elaborate roll development over the years. His specialty is traditional Japanese cooking, sashimi, seasonal menus, and presentation, and he created the original Jinbeh Special Roll.",
  },
  {
    question: "What kind of food does Fuji-san prefer to make?",
    answer:
      "He favors sashimi, steamed preparations, and light seasoning that lets the natural flavor of the fish come through.",
  },
  {
    question: "Does Jinbeh currently serve the traditional course menu Fuji-san describes?",
    answer:
      "Those multi-course dinners are part of Jinbeh's earlier Las Colinas history. For current offerings, please see our menu or contact the restaurant.",
  },
];

export default function FujiSanProfile() {
  return (
    <ArticleLayout
      title="Meet Fuji-san, the Jinbeh Chef Who Watched DFW Learn Sushi"
      metaDescription="A Jinbeh sushi chef since 1993, and how traditional Japanese cooking helped shape sushi in North Texas."
      heroImage="/images/about/fuji-san-jinbeh-sushi-chef.jpg"
      heroAlt="Fuji-san, Jinbeh's head sushi chef since 1993, reviewing traditional Japanese cuisine at the restaurant"
      category="Japanese Cuisine"
      categorySlug="cuisine"
      slug="fuji-san-jinbeh-sushi-chef-dfw"
      publishDate="May 2026"
      readTime="6 min read"
      faqs={faqs}
      keyTakeaway="Behind Jinbeh's hibachi flames and colorful rolls is a sushi bar shaped since 1993 by Fuji-san, a chef trained in traditional Japanese cooking. His quiet standard, fresh fish treated simply, is the soul of Jinbeh's sushi."
    >
      <p>{"Long before specialty rolls became a familiar part of dining in North Texas, Fuji-san was learning to make food the traditional way: with patience, discipline, and respect for the ingredient. He has been part of Jinbeh since 1993, and his quiet craft is the standard behind everything that leaves the sushi bar."}</p>

      <h2>A Chef Who Watched DFW Learn Sushi</h2>
      <p>{"When Fuji-san joined Jinbeh in 1993, the original Las Colinas restaurant was serving a large Japanese business community, and the local sushi scene was small. The early roll list was simple. California rolls, cucumber rolls, tuna rolls, and yellowtail rolls did most of the work. Then diners grew curious. They tried something new, told friends, and came back. Fuji-san watched sushi move from a big-city specialty into the everyday food culture of Dallas and Fort Worth."}</p>

      <h2>Trained Far Beyond the Sushi Bar</h2>
      <p>{"His training was never limited to a sushi counter. In Japan he prepared tempura. In the United States he learned hibachi. At Las Colinas he also took responsibility for traditional Japanese menus and formal dinners that could take several days to prepare. That breadth, not a single signature dish, is the real source of his authority in the kitchen."}</p>

      <figure className="my-8">
        <Image
          src="/images/about/fuji-san-jinbeh-chef-portrait.jpg"
          alt="Fuji-san with the traditional Japanese culinary texts that shaped his training at Jinbeh"
          width={900}
          height={1200}
          sizes="(max-width: 768px) 100vw, 720px"
          className="rounded-xl shadow-md w-full h-auto object-cover max-w-md mx-auto"
        />
        <figcaption className="text-center text-sm text-charcoal/60 mt-3">{"Fuji-san with the Japanese culinary texts behind his decades of training."}</figcaption>
      </figure>

      <h2>Craft Before Spectacle</h2>
      <p>{"Ask Fuji-san what he likes to prepare and he talks about sashimi, steamed fish, and clean flavor. "}<em>{"“It is just steamed and a little bit of taste, so that you can taste the fish,”"}</em>{" he says. His favorite dishes use light seasoning so the guest can still taste the fish itself. It is the quiet side of Japanese cooking, and at Jinbeh it lives just steps from the hibachi flames."}</p>

      <h2>The First Jinbeh Signature</h2>
      <p>{"Fuji-san is candid that the elaborate, crunchy, cooked rolls Texas loves were largely developed by other talented chefs. His own signature came early. "}<em>{"“The first one we created was the Jinbeh Special Roll,”"}</em>{" he recalls, a bridge between classic sushi and the more elaborate American roll culture that followed. You can still order it at "}<Link href="/menu">{"our sushi and rolls menu"}</Link>{" in Frisco and Lewisville."}</p>

      <h2>A Menu That Changed With the Market</h2>
      <p>{"For reserved traditional dinners, Fuji-san built the menu around what was best that day. "}<em>{"“Every time we got a reservation, I make a new menu. Each time different,”"}</em>{" he says. He visited the fish market, chose seasonal vegetables, and used special ingredients when they made sense for the guest. The goal was never the longest menu. It was the right menu for that evening, the same instinct that still guides "}<Link href="/frisco/sashimi">{"our sashimi"}</Link>{" today."}</p>

      <h2>The Chef Who Came Back</h2>
      <p>{"Fuji-san once left Jinbeh for another opportunity. About ten months later, he returned. He knew the people, they understood how he liked to work, and the restaurant felt comfortable in a way the other place did not. "}<em>{"“I had fun working here,”"}</em>{" he says simply. More than three decades after he started, that may be the clearest version of the Jinbeh story: serious craft, shared work, and a table people choose to return to."}</p>

      <p>{"You will feel that standard whether you come for the hibachi show or settle in at the sushi bar. Learn more "}<Link href="/about">{"about our family-owned story since 1988"}</Link>{", explore "}<Link href="/frisco">{"Jinbeh Frisco"}</Link>{" and "}<Link href="/lewisville">{"Jinbeh Lewisville"}</Link>{", or "}<Link href="/reservations">{"reserve your table"}</Link>{" and taste the difference for yourself."}</p>
    </ArticleLayout>
  );
}
