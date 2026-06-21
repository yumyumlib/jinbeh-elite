import Link from "next/link";
import locationsData from "@/data/locations.json";

// Hours + Reserve block (top competitors all show hours + a reservation button on-page).
// Renders the location's lunch/dinner hours, a Reserve CTA, and OpeningHoursSpecification schema.
type LocId = "frisco" | "lewisville";

export default function HoursReserve({ location }: { location: LocId }) {
  const loc = (locationsData as { locations: Record<string, { name?: string; phone?: string; hours?: { lunch?: { weekday?: { display?: string; open?: string; close?: string }; weekend?: { display?: string; open?: string; close?: string } }; dinner?: { sunThurs?: { display?: string; open?: string; close?: string }; friSat?: { display?: string; open?: string; close?: string } } } }> }).locations[location];
  if (!loc) return null;
  const h = loc.hours || {};
  const name = loc.name || `Jinbeh ${location[0].toUpperCase()}${location.slice(1)}`;
  const phoneDigits = (loc.phone || "").replace(/[^0-9]/g, "");

  const spec: Record<string, unknown>[] = [];
  if (h.lunch?.weekday?.open) spec.push({ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: h.lunch.weekday.open, closes: h.lunch.weekday.close });
  if (h.lunch?.weekend?.open) spec.push({ "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: h.lunch.weekend.open, closes: h.lunch.weekend.close });
  if (h.dinner?.sunThurs?.open) spec.push({ "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: h.dinner.sunThurs.open, closes: h.dinner.sunThurs.close });
  if (h.dinner?.friSat?.open) spec.push({ "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: h.dinner.friSat.open, closes: h.dinner.friSat.close });

  return (
    <section aria-label={`Hours and reservations for ${name}`} className="bg-white py-12 px-4 border-y border-[#C9A227]/30">
      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-serif text-2xl text-[#1F1F1F] mb-4">Hours</h2>
          <dl className="text-[#1F1F1F]/90 space-y-2 text-[0.97rem]">
            {h.lunch?.weekday?.display && (<div><dt className="font-medium">Lunch · Mon–Fri</dt><dd>{h.lunch.weekday.display}</dd></div>)}
            {h.lunch?.weekend?.display && (<div><dt className="font-medium">Lunch · Sat–Sun</dt><dd>{h.lunch.weekend.display}</dd></div>)}
            {h.dinner?.sunThurs?.display && (<div><dt className="font-medium">Dinner · Sun–Thu</dt><dd>{h.dinner.sunThurs.display}</dd></div>)}
            {h.dinner?.friSat?.display && (<div><dt className="font-medium">Dinner · Fri–Sat</dt><dd>{h.dinner.friSat.display}</dd></div>)}
          </dl>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-serif text-2xl text-[#1F1F1F] mb-3">Reserve Your Table</h2>
          <p className="text-[#1F1F1F]/80 mb-4">Weekends and groups fill fast around the hibachi grill. Book ahead so your party sits together for the show.</p>
          <Link href="/reservations" className="inline-block bg-[#C1121F] text-white font-medium px-7 py-3 rounded-full hover:bg-[#a30f1a] transition">Reserve a Table</Link>
          {phoneDigits && (<p className="text-sm text-[#1F1F1F]/70 mt-3">or call <a className="underline" href={`tel:${phoneDigits}`}>{loc.phone}</a></p>)}
        </div>
      </div>
      {spec.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Restaurant", name, openingHoursSpecification: spec }) }} />
      )}
    </section>
  );
}
