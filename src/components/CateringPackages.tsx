import Link from "next/link";
import {
  SHOW_PRICES, proteins, includedWithEveryEntree, upgrades, occasions,
  deliveryRules, cateringContact,
} from "@/data/catering-program";

// Catering program display. Shows the menu structure + occasions + delivery info and routes to a
// custom quote. Per-person prices only render when SHOW_PRICES is true (program not yet launched).
// Brand palette via arbitrary hex so it never depends on tailwind config color names.
export default function CateringPackages() {
  const price = (n: number) => (SHOW_PRICES ? ` — $${n % 1 === 0 ? n : n.toFixed(2)}/person` : "");
  const up = (n: number, unit: string) => (SHOW_PRICES ? ` (+$${n} ${unit})` : "");
  return (
    <section id="catering-packages" aria-label="Catering packages" className="bg-[#F6F1E8] py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl text-[#1F1F1F] mb-3 text-center">Japanese Catering, Built Around Your Event</h2>
        <p className="text-[#1F1F1F]/85 leading-relaxed text-center max-w-2xl mx-auto mb-8">
          Fresh hibachi and sushi from a name North Texas has trusted since 1988, delivered on beautiful
          presentation trays for corporate lunches, parties, weddings, and celebrations across Frisco and Lewisville.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-serif text-xl text-[#7A4E2D] mb-3">Choose Your Hibachi Entrée</h3>
            <ul className="space-y-1.5 text-[#1F1F1F]/90">
              {proteins.map((p) => (
                <li key={p.name}>• {p.name}{p.portion ? ` (${p.portion})` : ""}{price(p.pricePerPerson)}</li>
              ))}
            </ul>
            <p className="text-sm text-[#1F1F1F]/70 mt-3">
              Every entrée includes {includedWithEveryEntree.join(", ").toLowerCase()}.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-serif text-xl text-[#7A4E2D] mb-3">Make It a Feast</h3>
            <ul className="space-y-1.5 text-[#1F1F1F]/90">
              {upgrades.map((u) => (
                <li key={u.name}>• {u.name}{up(u.price, u.unit)}</li>
              ))}
            </ul>
            <p className="text-sm text-[#1F1F1F]/70 mt-3">
              Sushi platters are always the first thing to go at events.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-serif text-xl text-[#7A4E2D] mb-3">Perfect For</h3>
            <ul className="space-y-1.5 text-[#1F1F1F]/90">
              {occasions.map((o) => (<li key={o}>• {o}</li>))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-serif text-xl text-[#7A4E2D] mb-3">Delivery &amp; Planning</h3>
            <ul className="space-y-1.5 text-[#1F1F1F]/90 text-[0.95rem]">
              <li>• Delivery within {deliveryRules.radiusMiles} miles of Frisco or Lewisville{SHOW_PRICES ? ` ($${deliveryRules.fee} flat, FREE on orders $${deliveryRules.freeOver}+)` : ""}.</li>
              <li>• Minimum about {deliveryRules.minGuests} guests.</li>
              <li>• Lead time: {deliveryRules.leadTimeSmall}; {deliveryRules.leadTimeLarge} for larger groups.</li>
              <li>• Restaurant-hosted hibachi shows and pickup also available.</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-9">
          <Link href="/catering#contact"
            className="inline-block bg-[#C1121F] text-white font-medium px-8 py-3 rounded-full hover:bg-[#a30f1a] transition">
            Request Your Custom Quote
          </Link>
          <p className="text-sm text-[#1F1F1F]/70 mt-3">
            Or call <a className="underline" href={`tel:${cateringContact.phone.replace(/[^0-9]/g, "")}`}>{cateringContact.phone}</a> &middot; <a className="underline" href={`mailto:${cateringContact.email}`}>{cateringContact.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
