import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "FAQ | Jinbeh Japanese Restaurant - Frisco & Lewisville TX",
  description:
    "Frequently asked questions about Jinbeh Japanese Restaurant. Find answers about reservations, menu, dietary options, private dining, and more in Frisco and Lewisville, TX.",
  keywords: [
    "jinbeh faq",
    "japanese restaurant questions",
    "hibachi dining faq",
    "sushi questions",
    "restaurant hours",
    "dietary restrictions",
    "reservation questions",
    "frisco lewisville dining",
  ],
  openGraph: {
    title: "FAQ | Jinbeh Japanese Restaurant",
    description:
      "Find answers to common questions about Jinbeh Japanese Restaurant in Frisco and Lewisville, TX.",
    url: "https://jinbeh.com/faq",
    type: "website",
  },
  alternates: {
    canonical: "https://jinbeh.com/faq",
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are Jinbeh's hours of operation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lunch: Weekdays 11:00 AM - 2:00 PM, Weekends 11:30 AM - 2:30 PM. Dinner: Sunday-Thursday 5:00 PM - 9:00 PM, Friday-Saturday 5:00 PM - 10:00 PM. Hours may vary by location.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make a reservation at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can make reservations online through OpenTable at our website, by phone at Frisco: (214) 619-1200 or Lewisville: (214) 488-2224, or by visiting either location in person.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer online ordering or delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer takeout and delivery through GrubHub and Uber Eats. Search for Jinbeh at your preferred platform to view our menu and place an order.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have vegetarian or vegan options?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We offer various vegetarian and vegan options including vegetable hibachi, vegetable sushi rolls, edamame, miso soup, and more. Let us know your dietary preferences when ordering.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accommodate food allergies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we take food allergies seriously. Please inform your server or chef about any allergies when you arrive. We can customize dishes and take appropriate precautions to prevent cross-contamination.",
      },
    },
    {
      "@type": "Question",
      name: "What makes hibachi dining unique?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hibachi dining features skilled chefs cooking your meal tableside on an iron griddle. You get fresh, hot food prepared right before you while enjoying an entertaining chef performance. It's dinner and a show!",
      },
    },
    {
      "@type": "Question",
      name: "Can children enjoy the hibachi experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Hibachi is perfect for families. Children love watching the chefs perform their cooking skills and entertainment. We offer kid-friendly menu options and a fun, interactive dining experience.",
      },
    },
    {
      "@type": "Question",
      name: "How much does hibachi dining cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hibachi entrees typically range from $18-$35+ depending on the protein (chicken, shrimp, steak, or combination). This includes the chef performance, vegetables, rice, and soup. Check our menu for exact pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a minimum group size for hibachi tables?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hibachi tables typically accommodate groups of 6-10 people. Smaller groups may be combined with other diners to fill the table. For private hibachi experiences, we have special options available.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer sushi for takeout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer fresh sushi rolls, nigiri, and sashimi for takeout and delivery. Order through our website partners (GrubHub, Uber Eats) or call your preferred location directly.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods do you accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept all major credit cards, debit cards, and cash. For online orders, payment methods depend on the platform you're using.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have parking available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Both locations have ample parking. Frisco is in a shopping center near Stonebriar, and Lewisville is easily accessible from I-35E with convenient strip mall parking.",
      },
    },
    {
      "@type": "Question",
      name: "Is Jinbeh good for special occasions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We specialize in birthdays, anniversaries, graduations, corporate events, and celebrations. Our hibachi chefs can create memorable moments. Contact us for private dining options.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a private event at Jinbeh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer private dining experiences for groups of 8 to 60+ guests. Visit our Private Dining page or call Frisco: (214) 619-1200 or Lewisville: (214) 488-2224 to discuss your event.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer catering services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We provide catering for corporate events, parties, and special occasions. Contact our catering team for menu options and pricing.",
      },
    },
  ],
};

const faqCategories = [
  {
    title: "Hours & Locations",
    questions: [
      {
        q: "What are Jinbeh's hours of operation?",
        a: "Lunch: Weekdays 11:00 AM - 2:00 PM, Weekends 11:30 AM - 2:30 PM. Dinner: Sunday-Thursday 5:00 PM - 9:00 PM, Friday-Saturday 5:00 PM - 10:00 PM. Hours may vary by location, so check your preferred location for exact details.",
      },
      {
        q: "Where are the Jinbeh locations?",
        a: "We have two locations in the DFW area: Frisco (2693 Preston Rd, Suite 1040, near Stonebriar Centre) and Lewisville (2440 S Stemmons Fwy #A, near Vista Ridge Mall off I-35E).",
      },
      {
        q: "Is there parking available at both locations?",
        a: "Yes! Both locations have ample parking. Frisco is in a shopping center, and Lewisville is in a strip mall with convenient parking.",
      },
      {
        q: "How do I find directions to Jinbeh?",
        a: "You can get directions through Google Maps by searching for 'Jinbeh Frisco' or 'Jinbeh Lewisville', or use the directions link on our contact page.",
      },
    ],
  },
  {
    title: "Reservations & Dining",
    questions: [
      {
        q: "How do I make a reservation?",
        a: "You can reserve online through OpenTable via our website, call Frisco: (214) 619-1200 or Lewisville: (214) 488-2224, or visit in person. Reservations are recommended, especially for large groups.",
      },
      {
        q: "Do you accept walk-ins?",
        a: "Yes, we welcome walk-ins based on availability. However, we recommend making reservations to ensure seating, especially during peak hours and weekends.",
      },
      {
        q: "What's the best time to visit for shorter wait times?",
        a: "Lunch typically has shorter wait times than dinner. Weekday visits are generally less busy than weekends. Off-peak times are usually 2:00-4:30 PM.",
      },
      {
        q: "Is there a dress code?",
        a: "We maintain a casual to smart-casual dress code. No beachwear or athletic wear is required, but we ask that guests dress appropriately for dining.",
      },
    ],
  },
  {
    title: "Menu & Food",
    questions: [
      {
        q: "What's the difference between hibachi and sushi?",
        a: "Hibachi is cooked tableside on an iron griddle by a chef with performance and entertainment included. Sushi is fresh raw fish and ingredients prepared into rolls and served cold. We offer both!",
      },
      {
        q: "Do you have vegetarian or vegan options?",
        a: "Yes! We offer vegetable hibachi, vegetable sushi rolls, edamame, miso soup, cucumber salad, and other plant-based options. Let us know your preferences when ordering.",
      },
      {
        q: "Can you accommodate food allergies?",
        a: "Absolutely. Please inform your server and chef about any allergies. We take allergies seriously and can customize dishes and take precautions to prevent cross-contamination.",
      },
      {
        q: "Is your fish fresh and sustainably sourced?",
        a: "We source high-quality fish daily to ensure freshness. We're committed to sustainability and quality ingredients that meet our standards.",
      },
      {
        q: "Do you have gluten-free options?",
        a: "We offer several gluten-free dishes and can modify items for gluten sensitivity. Inform your server about dietary needs, and our team will help accommodate you.",
      },
      {
        q: "Can I view the menu online?",
        a: "Yes! Check our location pages for menu PDFs (Frisco and Lewisville). We also have lunch, dinner, and sushi menus available.",
      },
    ],
  },
  {
    title: "Hibachi Experience",
    questions: [
      {
        q: "What makes hibachi dining special?",
        a: "Hibachi features skilled chefs cooking your meal tableside on an iron griddle with impressive performance and entertainment. It's an interactive experience where food is prepared hot and fresh right before you.",
      },
      {
        q: "Can children enjoy hibachi?",
        a: "Absolutely! Children love the hibachi experience. Our chefs are great with families, and the entertainment is engaging for all ages. We have kid-friendly menu options available.",
      },
      {
        q: "What happens at a hibachi table?",
        a: "A chef cooks your choice of protein (chicken, shrimp, steak, or combination) alongside vegetables and fried rice on a large griddle in front of you. It includes soup, salad, and an entertaining chef performance.",
      },
      {
        q: "Is hibachi spicy?",
        a: "The chef can adjust spice levels to your preference. Let your chef know if you prefer mild, medium, or spicy, and they'll customize accordingly.",
      },
      {
        q: "What's included in a hibachi entree?",
        a: "Hibachi entrees include your choice of protein, vegetables, fried rice, soup, salad, and the chef's tableside cooking performance and entertainment.",
      },
      {
        q: "What's the typical price range for hibachi?",
        a: "Hibachi entrees typically range from $18-$35+ depending on the protein and location. Check our menus for exact pricing.",
      },
    ],
  },
  {
    title: "Takeout & Delivery",
    questions: [
      {
        q: "Do you offer takeout?",
        a: "Yes! We offer takeout from both locations. You can order through our website partner platforms, call us directly, or visit in person.",
      },
      {
        q: "Do you offer delivery?",
        a: "Yes! We partner with GrubHub and Uber Eats for delivery service. Search for Jinbeh on either platform to place a delivery order.",
      },
      {
        q: "How long does takeout typically take?",
        a: "Takeout orders usually take 15-30 minutes depending on how busy we are. During peak hours, wait times may be longer. You can call ahead to place your order.",
      },
      {
        q: "Which menu items are best for takeout?",
        a: "Sushi rolls, bento boxes, and non-hibachi entrees travel well. Hibachi dishes are best enjoyed fresh at the restaurant, but some items can be prepared for takeout.",
      },
      {
        q: "Can I place an order over the phone?",
        a: "Yes! Call your preferred location directly. Frisco: (214) 619-1200 or Lewisville: (214) 488-2224.",
      },
    ],
  },
  {
    title: "Special Events & Occasions",
    questions: [
      {
        q: "Is Jinbeh good for birthdays?",
        a: "Perfect! We specialize in birthday celebrations. Our hibachi chefs create memorable moments, and we can customize the experience for your group.",
      },
      {
        q: "Can I book a private event?",
        a: "Yes! We offer private dining for groups of 8 to 60+ guests. Visit our Private Dining page or call us to discuss your event.",
      },
      {
        q: "Do you offer catering services?",
        a: "Yes! We provide catering for corporate events, parties, and special occasions. Contact us for menu options and pricing.",
      },
      {
        q: "Do you have a kids' birthday party package?",
        a: "We can accommodate kids' birthday parties with special menu options and entertainment. Call us to discuss details and booking your celebration.",
      },
      {
        q: "How far in advance should I book a private event?",
        a: "We recommend booking at least 2-3 weeks in advance for best availability. For larger groups or special requirements, booking further ahead ensures perfect customization.",
      },
    ],
  },
  {
    title: "Payment & Policies",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, debit cards, and cash at both locations.",
      },
      {
        q: "Do you accept digital payment apps?",
        a: "Yes, we accept most digital payment methods including Apple Pay, Google Pay, and other mobile wallets.",
      },
      {
        q: "What's your cancellation policy for reservations?",
        a: "Please cancel reservations as soon as possible if your plans change. Call us directly at Frisco: (214) 619-1200 or Lewisville: (214) 488-2224.",
      },
      {
        q: "Is there a gratuity added to large parties?",
        a: "Gratuity policies may vary based on party size. Inform staff of your party size when making reservations for details.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-deep-indigo to-charcoal text-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80">
              Find answers to common questions about Jinbeh, our menu, dining experiences, and services.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-warm-ivory border-b border-charcoal/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {faqCategories.map((category) => (
                <a
                  key={category.title}
                  href={`#${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 bg-white text-charcoal rounded-full text-sm font-medium hover:bg-accent-red hover:text-white transition-colors shadow-md"
                >
                  {category.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-16">
              {faqCategories.map((category) => (
                <div
                  key={category.title}
                  id={category.title.toLowerCase().replace(/\s+/g, "-")}
                  className="scroll-mt-20"
                >
                  <h2 className="text-3xl font-heading font-bold text-charcoal mb-8 pb-4 border-b-2 border-accent-red/30">
                    {category.title}
                  </h2>
                  <div className="space-y-6">
                    {category.questions.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-warm-ivory rounded-2xl p-8 hover:shadow-lg transition-shadow"
                      >
                        <h3 className="text-lg font-heading font-bold text-charcoal mb-3 flex items-start gap-3">
                          <span className="text-accent-red flex-shrink-0 mt-1">
                            Q:
                          </span>
                          <span>{item.q}</span>
                        </h3>
                        <p className="text-charcoal/75 leading-relaxed flex gap-3">
                          <span className="text-deep-indigo flex-shrink-0 font-bold">
                            A:
                          </span>
                          <span>{item.a}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 bg-charcoal text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Didn't find your answer?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We're here to help! Reach out to us directly with any questions about your dining experience.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wide mb-3">
                  Frisco
                </p>
                <a
                  href="tel:2146191200"
                  className="inline-block text-2xl font-bold text-soft-gold hover:text-soft-gold/80 transition-colors"
                >
                  (214) 619-1200
                </a>
              </div>
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wide mb-3">
                  Lewisville
                </p>
                <a
                  href="tel:2144882224"
                  className="inline-block text-2xl font-bold text-soft-gold hover:text-soft-gold/80 transition-colors"
                >
                  (214) 488-2224
                </a>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-accent-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-red/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Experience Jinbeh?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Whether it's your first visit or you're celebrating a special occasion, we're excited to welcome you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservations"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
              >
                Make a Reservation
              </Link>
              <Link
                href="/frisco"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl"
              >
                View Locations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
