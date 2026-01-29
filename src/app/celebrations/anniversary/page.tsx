import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Anniversary Dinner | Romantic Japanese Dining | Jinbeh Frisco & Lewisville",
  description: "Celebrate your anniversary with an unforgettable hibachi dinner at Jinbeh. Romantic atmosphere, exceptional Japanese cuisine, and tableside entertainment in Frisco and Lewisville TX.",
  keywords: [
    "anniversary dinner frisco",
    "romantic restaurant frisco tx",
    "anniversary dinner lewisville",
    "romantic hibachi dinner",
    "couples dinner near me",
    "special occasion restaurant frisco",
  ],
  openGraph: {
    title: "Anniversary Dinner | Romantic Japanese Dining | Jinbeh",
    description: "Celebrate your anniversary with exceptional hibachi and sushi at Jinbeh Japanese Restaurant.",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Jinbeh a good restaurant for an anniversary dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Jinbeh is perfect for anniversary celebrations. Our hibachi tables offer an interactive dining experience with tableside entertainment, while our sushi bar provides a more intimate setting for couples.",
      },
    },
    {
      "@type": "Question",
      "name": "Can I request a special setup for our anniversary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Call ahead to let us know you're celebrating an anniversary, and we'll help make your evening special. We can accommodate requests for preferred seating when available.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you offer any anniversary specials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contact us directly to discuss anniversary celebrations. We're happy to help create a memorable experience for your special occasion.",
      },
    },
    {
      "@type": "Question",
      "name": "What's the best seating for a romantic dinner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a quieter, more intimate experience, we recommend the sushi bar or a booth. For couples who enjoy interactive entertainment, our hibachi tables offer a fun shared experience.",
      },
    },
  ],
};

export default function AnniversaryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-50" />
          <Image
            src="/images/food/nigiri.jpg"
            alt="Beautiful sushi platter for anniversary dinner"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase mb-4 block">
              Romantic Dining
            </span>
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Anniversary Celebrations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Create lasting memories with exceptional Japanese cuisine
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl text-stone-800 font-light mb-6">
                Your Perfect Anniversary Awaits
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Whether you're celebrating your first anniversary or your fiftieth,
                Jinbeh provides the perfect setting for a romantic evening. Our family-owned
                restaurant has been hosting special celebrations since 1987, and we understand
                how important these moments are.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl text-stone-800 font-light">
                  Intimate Hibachi Experience
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Share the excitement of tableside hibachi cooking with your loved one.
                  Watch as our skilled chefs prepare your meal with theatrical flair,
                  creating conversation starters and shared moments of wonder.
                </p>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Fresh, premium ingredients cooked to perfection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Interactive entertainment at your table</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Sake and specialty cocktails available</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl text-stone-800 font-light">
                  Romantic Sushi Experience
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  For a quieter, more intimate setting, our sushi bar offers fresh,
                  expertly crafted rolls and nigiri. Share a sushi platter and discover
                  new favorites together in a relaxed atmosphere.
                </p>
                <ul className="space-y-3 text-stone-600">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Fresh sushi made to order</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Shareable platters for two</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span>Quiet, intimate seating options</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-stone-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl text-stone-800 font-light mb-4">
                Make Your Reservation
              </h3>
              <p className="text-stone-600 mb-6">
                Call ahead to let us know you're celebrating an anniversary,
                and we'll help make your evening special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/frisco"
                  className="inline-block bg-amber-600 text-white px-8 py-3 rounded hover:bg-amber-700 transition-colors"
                >
                  Frisco: (214) 618-9888
                </Link>
                <Link
                  href="/lewisville"
                  className="inline-block bg-stone-700 text-white px-8 py-3 rounded hover:bg-stone-800 transition-colors"
                >
                  Lewisville: (214) 618-9798
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-stone-800 font-light text-center mb-12">
              Anniversary Dinner FAQs
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="border-b border-stone-200 pb-6">
                  <h3 className="text-lg text-stone-800 font-medium mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-stone-600">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
