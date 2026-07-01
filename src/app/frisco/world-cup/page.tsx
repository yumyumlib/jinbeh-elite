import type { Metadata } from "next";
import PageSeoBoost from "@/components/PageSeoBoost";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import CallLink from "@/components/CallLink";

export const metadata: Metadata = {
 title:
 "Where to Watch the Matches in Frisco | Jinbeh, 3 Miles from the Base Camp",
 description:
 "Where to watch the 2026 soccer tournament in Frisco: Jinbeh shows every match on big screens 3 miles from Toyota Stadium, with hibachi and sushi at your table. A family friendly alternative to a packed sports bar, minutes from Plano, Allen, and McKinney. Reserve your match-day table.",
 keywords: [
        "soccer watch party frisco",
        "where to watch soccer frisco",
        "where to watch the matches frisco",
        "restaurants near toyota stadium",
        "japanese restaurant near toyota stadium",
        "samurai blue frisco",
        "japan brazil watch party dfw",
        "best place to watch soccer frisco",
        "soccer watch party near me",
        "game day dining frisco",
        "restaurant with big screens to watch soccer frisco",
        "family friendly place to watch soccer frisco",
        "kid friendly soccer watch party frisco",
        "sports bar alternative frisco",
        "where to watch the semifinal frisco",
        "knockout watch party frisco",
        "soccer watch party plano allen mckinney",
        "donde ver el partido en frisco",
        "where to watch every match frisco",
    ],
 openGraph: {
 title: "Where to Watch the Matches in Frisco | Jinbeh",
 description:
 "2026 international soccer tournament at Jinbeh Frisco — hibachi, sushi, and screens 3 miles from Toyota Stadium, the Japan base camp.",
 url: "https://jinbeh.com/frisco/world-cup",
 images: [{ url: "https://jinbeh.com/images/exterior/jinbeh-japanese-restaurant-lewisville-tx-sunset.jpg", width: 1200, height: 630, alt: "2026 soccer tournament watch party at Jinbeh Frisco" }],
 },
 alternates: { canonical: "https://jinbeh.com/frisco/world-cup" },
};

const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: [
 {
 "@type": "Question",
 name: "Where can I watch the matches in Frisco?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Jinbeh Frisco shows 2026 international soccer tournament matches on screens throughout the dining room and sits less than 3 miles from Toyota Stadium, the official Japan base camp. Reserve a hibachi table for Japan's knockout matches and the big match days to guarantee seating.",
 },
 },
 {
 "@type": "Question",
 name: "How close is Jinbeh Frisco to Toyota Stadium?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Jinbeh Frisco is less than 3 miles from Toyota Stadium at 9200 World Cup Way, the designated Japan base camp and home of the National Soccer Hall of Fame. We are at 2693 Preston Road, Frisco.",
 },
 },
 {
 "@type": "Question",
 name: "Can I book a soccer watch party in Frisco?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Jinbeh Frisco welcomes group reservations for soccer watch parties at a reserved hibachi table with the match on screen. Book at least 7 days ahead for the big match days, including the Dallas Stadium semifinal on July 14, and call (214) 619-1200 for larger groups.",
 },
 },
 {
 "@type": "Question",
 name: "Is Jinbeh Frisco a family friendly place to watch the matches on big screens?",
 acceptedAnswer: {
 "@type": "Answer",
 text: "Yes. We show every match on big screens throughout the dining room, and the tableside hibachi show keeps kids entertained, which makes Jinbeh Frisco a family friendly alternative to a crowded sports bar. We are minutes from Plano, Allen, and McKinney, so it is an easy place to gather to watch the knockout rounds and the semifinal.",
 },
 },
 ],
};

const breadcrumbSchema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: "https://jinbeh.com" },
 { "@type": "ListItem", position: 2, name: "Frisco", item: "https://jinbeh.com/frisco" },
 { "@type": "ListItem", position: 3, name: "soccer tournament", item: "https://jinbeh.com/frisco/world-cup" },
 ],
};

export default function FriscoWorldCupPage() {
 return (
 <>
 <Header />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

 <main className="bg-warm-ivory">
 <section className="relative bg-gradient-to-br from-blue-800 via-deep-indigo to-charcoal text-white py-24">
 <div className="container mx-auto px-6 max-w-4xl text-center">
 <span className="inline-block bg-accent-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
 2026 international soccer tournament · Frisco
 </span>
 <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
 Where to Watch the Matches in Frisco
 </h1>
 <p className="text-lg sm:text-xl text-warm-ivory/90 leading-relaxed">
 Three miles from Japan&apos;s base camp at Toyota Stadium, Jinbeh Frisco is
 the table for hibachi, sushi, and Samurai Blue match days.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
 <CallLink href="tel:214-619-1200" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold transition-all">
 Call Frisco: (214) 619-1200
 </CallLink>
 <Link href="/reservations" className="btn bg-white/15 backdrop-blur text-white border-2 border-white/50 hover:bg-white/25 px-8 py-4 text-lg font-semibold transition-all">
 Reserve a Table
 </Link>
 </div>
 </div>
 </section>

 <div className="container mx-auto max-w-4xl px-6 pt-8">
 <BreadcrumbNav items={[{ label: "Frisco", href: "/frisco" }, { label: "soccer tournament" }]} />
 </div>

 <section className="py-14">
 <div className="container mx-auto max-w-3xl px-6 space-y-5 text-charcoal/85 text-lg leading-relaxed">
 <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal">
 The Closest Real Japanese Table to the Base Camp
 </h2>
 <p>
 When international soccer picked Toyota Stadium in Frisco as a 2026 soccer tournament base camp and
 training site, it put a global tournament three miles from our front door.
 Jinbeh Frisco has been serving hibachi and sushi at 2693 Preston Road since
 this city was a fraction of its size, family-owned since 1988. For the
 39 days of the tournament, we are the place to eat before a training session,
 gather for a Japan match, or celebrate after a result.
 </p>
 <p>
 Anyone can put a match on a TV. We give you the game on screens throughout the
 room, a hibachi chef performing at your own table, and authentic Japanese food
 instead of bar food. Guests rate us 4.2 to 4.8 across Google, Yelp, OpenTable,
 and TripAdvisor on more than 1,600 reviews. For a Japan match, that is the
 difference between watching the game and celebrating it.
 </p>
 </div>
 </section>

 <section className="py-12 bg-white">
 <div className="container mx-auto max-w-3xl px-6">
 <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-6">
 Knockout Matches on Our Big Screens
 </h2>
 <p className="text-charcoal/80 mb-6">
 Samurai Blue gave us a thrilling run before falling to Brazil in the
 knockout round. The tournament now builds toward the semifinal at Dallas
 Stadium (AT&amp;T Stadium) in Arlington on July 14. We show every match on
 big screens in Frisco, so it is an easy, family friendly place to watch the
 matches with hibachi and sushi.
 </p>
 <div className="grid sm:grid-cols-2 gap-5">
 <div className="bg-warm-ivory rounded-2xl border border-stone-200 p-6">
 <p className="text-accent-red font-bold mb-1">Mon · July 6 · 2:00 PM CT</p>
 <p className="text-charcoal font-heading font-bold text-lg">Round of 16</p>
 <p className="text-charcoal/70 text-sm mt-1">Dallas Stadium, Arlington · Shown live at Jinbeh</p>
 </div>
 <div className="bg-warm-ivory rounded-2xl border border-stone-200 p-6">
 <p className="text-accent-red font-bold mb-1">Tue · July 14 · 2:00 PM CT</p>
 <p className="text-charcoal font-heading font-bold text-lg">Semifinal</p>
 <p className="text-charcoal/70 text-sm mt-1">Dallas Stadium (AT&amp;T Stadium), Arlington</p>
 </div>
 </div>
 <p className="text-charcoal/70 mt-6">
 See the full Dallas schedule, the Samurai Blue Special, and Fan
 Festival tips on our{" "}
 <Link href="/world-cup-2026" className="text-accent-red hover:underline font-medium">
 match-day hub
 </Link>
 . Reserve early — these are the busiest 39 days in our history.
 </p>
 </div>
 </section>

 <section className="py-16">
 <div className="container mx-auto max-w-3xl px-6">
 <h2 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-8 text-center">
 Frisco Soccer Watch Party FAQ
 </h2>
 <div className="space-y-4">
 {faqSchema.mainEntity.map((q) => (
 <details key={q.name} className="bg-white rounded-xl border border-stone-200 p-5 group">
 <summary className="font-heading font-semibold text-charcoal cursor-pointer list-none flex justify-between items-center">
 {q.name}
 <span className="text-accent-red group-open:rotate-45 transition-transform text-xl">+</span>
 </summary>
 <p className="text-charcoal/80 leading-relaxed mt-3">{q.acceptedAnswer.text}</p>
 </details>
 ))}
 </div>
 </div>
 </section>

 <section className="py-16 bg-gradient-to-br from-charcoal to-deep-indigo text-white">
 <div className="container mx-auto max-w-3xl px-6 text-center">
 <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Reserve Your Frisco Match-Day Table</h2>
 <p className="text-warm-ivory/90 mb-2">Jinbeh Frisco · 2693 Preston Rd Suite 1040, Frisco, TX 75034</p>
 <p className="text-warm-ivory/90 mb-8">(214) 619-1200 · 3 miles from Toyota Stadium</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <CallLink href="tel:214-619-1200" className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold transition-all">Call (214) 619-1200</CallLink>
 <Link href="/world-cup-2026" className="btn bg-white/15 backdrop-blur text-white border-2 border-white/50 hover:bg-white/25 px-8 py-4 text-lg font-semibold transition-all">Match-Day Hub →</Link>
 </div>
 </div>
 </section>
 </main>
 <PageSeoBoost route="/frisco/world-cup" />
 <Footer />
 </>
 );
}
