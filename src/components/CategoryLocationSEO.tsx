import Link from "next/link";
import { locations } from "@/data/menu-items";
import type { LocationId } from "@/data/menu-item-types";

// Category keys used by the per-location menu pages (includes kids-menu, which
// is not part of the MenuItem MenuCategory union).
type CategoryKey =
    | "hibachi"
    | "sushi-rolls"
    | "sashimi"
    | "appetizers"
    | "cocktails"
    | "kids-menu";

interface CategoryLocationSEOProps {
    locationId: LocationId;
    category: CategoryKey;
}

const categoryLabels: Record<CategoryKey, string> = {
    hibachi: "Hibachi",
    "sushi-rolls": "Sushi Rolls",
    sashimi: "Sashimi",
    appetizers: "Appetizers",
    cocktails: "Cocktails & Sake",
    "kids-menu": "Kids Menu",
};

// A relevant FAQ page per category for internal linking.
const categoryFaq: Record<CategoryKey, { label: string; href: string }> = {
    hibachi: { label: "What comes with a hibachi dinner?", href: "/faq/what-comes-with-hibachi-dinner" },
    "sushi-rolls": { label: "Is Jinbeh's fish fresh?", href: "/faq/is-jinbeh-fish-fresh" },
    sashimi: { label: "Is Jinbeh's fish fresh?", href: "/faq/is-jinbeh-fish-fresh" },
    appetizers: { label: "What type of restaurant is Jinbeh?", href: "/faq/what-type-of-restaurant-is-jinbeh" },
    cocktails: { label: "Is Jinbeh good for special occasions?", href: "/faq/is-jinbeh-good-for-special-occasions" },
    "kids-menu": { label: "Can children enjoy hibachi?", href: "/faq/can-children-enjoy-hibachi" },
};

// Builds two unique, location-aware paragraphs per category so each location's
// category page reads as a distinct page (not a Frisco/Lewisville duplicate).
function buildCopy(locationId: LocationId, category: CategoryKey): { heading: string; p1: string; p2: string } {
    const loc = locations[locationId];
    const name = loc.displayName;
    const city = loc.city;
    const nearby = loc.nearbyCities.slice(0, 3).join(", ");
    const nearbyLast = loc.nearbyCities[3] ? `, and ${loc.nearbyCities[3]}` : "";
    const where = `You'll find us ${loc.gettingThere}. ${loc.parking}.`;
    const from = `Guests visit Jinbeh ${name} from ${nearby}${nearbyLast}.`;

    switch (category) {
        case "hibachi":
            return {
                heading: `Why Jinbeh Is the Best for Hibachi in ${name}`,
                p1: `Jinbeh ${name} has served hibachi in ${city} since 1988. Our chefs cook your meal on ${loc.grill} grills right at your table, turning dinner into a show with knife work, the onion volcano, and plenty of laughs. It is a local favorite for birthdays, date nights, and group celebrations.`,
                p2: `${where} ${from} Every hibachi dinner comes with soup, salad, grilled vegetables, and steamed rice, with steak, chicken, shrimp, salmon, scallops, and lobster to choose from.`,
            };
        case "sushi-rolls":
            return {
                heading: `Why Jinbeh Is the Best for Sushi in ${name}`,
                p1: `For fresh sushi in ${city}, Jinbeh ${name} has been a local favorite since 1988. Our sushi chefs hand-roll every order, from classic California and spicy tuna rolls to signature specialty rolls you will not find anywhere else.`,
                p2: `${where} ${from} Pair your rolls with sashimi, a hibachi entree, or a glass from our sake list for the full Jinbeh experience.`,
            };
        case "sashimi":
            return {
                heading: `Why Jinbeh Is the Best for Sashimi in ${name}`,
                p1: `Jinbeh ${name} serves premium sashimi in ${city}, sliced fresh to order by our sushi chefs. Sashimi is raw fish at its purest, served without rice so the quality of the fish speaks for itself.`,
                p2: `${where} ${from} Sashimi lovers come for our salmon, tuna, yellowtail, and chef's selections. It pairs beautifully with warm sake and a few shareable appetizers.`,
            };
        case "appetizers":
            return {
                heading: `Why Jinbeh Is the Best for Japanese Appetizers in ${name}`,
                p1: `Start your meal at Jinbeh ${name} with shareable Japanese appetizers, a ${city} favorite since 1988. From crispy gyoza and shrimp tempura to edamame and seared tuna, our starters are built for the table.`,
                p2: `${where} ${from} Families and groups love sharing a few plates while the hibachi grill heats up or the sushi gets rolled at the bar.`,
            };
        case "cocktails":
            return {
                heading: `Why Jinbeh Is the Best for Sake & Cocktails in ${name}`,
                p1: `The bar at Jinbeh ${name} pours sake, Japanese beer, and Japanese-inspired cocktails in ${city}. Whether you prefer a warm cup of sake or a Tokyo Mule, our drinks are made to match the meal.`,
                p2: `${where} ${from} Stop in for happy hour or a celebration, and ask about our sake flights and seasonal pours when you visit.`,
            };
        case "kids-menu":
            return {
                heading: `Why Jinbeh Is the Best Family Restaurant in ${name}`,
                p1: `Jinbeh ${name} is one of the most family-friendly restaurants in ${city}. Kids love watching the hibachi chefs cook right at the table, and our kids menu keeps the little ones happy with their favorites.`,
                p2: `${where} ${from} Families come for birthdays and weeknight dinners alike, and the hibachi show makes Jinbeh a fun night out for the whole family.`,
            };
        default:
            return {
                heading: `Jinbeh in ${name}`,
                p1: `Jinbeh ${name} has served authentic Japanese hibachi and fresh sushi in ${city} since 1988.`,
                p2: `${where} ${from}`,
            };
    }
}

export default function CategoryLocationSEO({ locationId, category }: CategoryLocationSEOProps) {
    const loc = locations[locationId];
    const otherId = loc.otherLocation;
    const otherName = loc.otherLocationName;
    const copy = buildCopy(locationId, category);
    const faq = categoryFaq[category];

    // Internal links to sibling categories at this location (skip the current one).
    const siblingOrder: CategoryKey[] = ["hibachi", "sushi-rolls", "sashimi", "appetizers", "cocktails"];
    const siblings = siblingOrder.filter((c) => c !== category).slice(0, 3);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="font-heading text-3xl font-bold text-charcoal mb-5 text-center">
                    {copy.heading}
                </h2>
                <p className="text-charcoal/80 leading-relaxed mb-4">{copy.p1}</p>
                <p className="text-charcoal/80 leading-relaxed mb-6">{copy.p2}</p>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                    {siblings.map((c) => (
                        <Link
                            key={c}
                            href={`/${loc.id}/${c}`}
                            className="text-accent-red hover:underline font-medium"
                        >
                            {categoryLabels[c]} in {loc.displayName} →
                        </Link>
                    ))}
                    <Link href={`/${loc.id}/menu`} className="text-accent-red hover:underline font-medium">
                        Full {loc.displayName} menu →
                    </Link>
                    <Link href={faq.href} className="text-accent-red hover:underline font-medium">
                        {faq.label} →
                    </Link>
                    <Link href={`/${otherId}/${category}`} className="text-accent-red hover:underline font-medium">
                        Same menu in {otherName} →
                    </Link>
                </div>
            </div>
        </section>
    );
}
