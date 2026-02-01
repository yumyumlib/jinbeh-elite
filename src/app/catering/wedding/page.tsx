import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wedding Catering | Jinbeh Japanese Restaurant | Sushi & Hibachi Wedding Catering Frisco",
  description:
    "Celebrate your special day with authentic Japanese wedding catering. Sushi platters, hibachi entertainment, and customized menus for wedding receptions, rehearsal dinners, and bridal showers in Frisco & Lewisville TX.",
  keywords: [
    "wedding catering japanese",
    "sushi catering wedding",
    "wedding reception catering frisco",
    "rehearsal dinner catering",
    "bridal shower catering",
    "japanese wedding catering frisco",
    "hibachi catering wedding",
    "wedding catering dallas",
    "reception catering lewisville",
  ],
  openGraph: {
    title: "Wedding Catering | Jinbeh Japanese Restaurant",
    description: "Make your special day unforgettable with authentic Japanese wedding catering.",
    url: "https://jinbeh.com/catering/wedding",
  },
  alternates: {
    canonical: "https://jinbeh.com/catering/wedding",
  },
};

// FAQ Schema for Wedding Catering
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer sushi tastings for wedding catering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We offer complimentary tastings for engaged couples planning their wedding catering. Contact us to schedule a tasting at either our Frisco or Lewisville location to sample menu options.",
      },
    },
    {
      "@type": "Question",
      "name": "Can Jinbeh customize the menu for my wedding reception?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We work closely with couples to create customized menus that reflect your preferences and dietary needs. Whether you want traditional sushi platters, hibachi stations, or a combination, we can tailor everything to your vision.",
      },
    },
    {
      "@type": "Question",
      "name": "What is the minimum number of guests for wedding catering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our wedding catering packages typically start at 25 guests. For smaller events like intimate rehearsal dinners or bridal showers, we can accommodate groups as small as 15 people. Contact us to discuss your specific event size.",
      },
    },
    {
      "@type": "Question",
      "name": "How much lead time do you need for wedding catering?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking wedding catering at least 4-6 weeks in advance to ensure availability and allow time for menu planning. For peak seasons (spring and fall), we suggest booking 8-12 weeks ahead. Rehearsal dinners and smaller events can often be arranged with 2-3 weeks' notice.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you provide hibachi entertainment for wedding receptions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We can arrange for hibachi chefs to prepare food tableside at your venue, creating an interactive and memorable experience for your guests. This is perfect for receptions, rehearsal dinners, and bridal shower celebrations.",
      },
    },
    {
      "@type": "Question",
      "name": "What areas do you cater weddings in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide wedding catering throughout the DFW metroplex, including Frisco, Lewisville, Plano, McKinney, Carrollton, and surrounding areas. Contact us to discuss your venue location.",
      },
    },
    {
      "@type": "Question",
      "name": "Can you accommodate dietary restrictions for wedding guests?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Of course! We can accommodate vegetarian, vegan, gluten-free, and allergy-friendly options. Let us know about dietary requirements when planning your menu and we'll create options that everyone can enjoy.",
      },
    },
  ],
};

const weddingServices = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Wedding Receptions",
    description: "Impress your guests with elegant sushi platters, hibachi stations, and customized menus that celebrate your special moment.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Rehearsal Dinners",
    description: "Celebrate the eve of your wedding with an intimate gathering featuring authentic Japanese cuisine and warm hospitality.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Bridal Showers",
    description: "Create elegant pre-wedding memories with sophisticated sushi selections, appetizers, and light bites perfect for celebration.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Engagement Parties",
    description: "Toast to new beginnings with premium sushi platters, specialty rolls, and custom appetizers that wow your guests.",
  },
];

const menuOptions = [
  {
    title: "Signature Sushi Platters",
    description: "Our most popular option for weddings - beautifully presented and customizable.",
    items: [
      "Assorted Nigiri Selection",
      "Specialty Rolls (California, Dragon, Rainbow, etc.)",
      "Sashimi Selections",
      "Cucumber & Edamame",
      "Decorative Garnishes & Sauces",
    ],
    ideal: "Perfect for elegant receptions and cocktail-style celebrations",
    icon: "🍣",
  },
  {
    title: "Hibachi Party Platters",
    description: "Interactive teppanyaki-style dining brings excitement and flavor to any event.",
    items: [
      "Premium Proteins (Filet Mignon, Chicken, Shrimp)",
      "Fried Rice & Vegetables",
      "Chef Preparation & Entertainment",
      "Dipping Sauces",
      "Tea Service",
    ],
    ideal: "Great for intimate celebrations and rehearsal dinners",
    icon: "🔥",
  },
  {
    title: "Appetizer Selection",
    description: "Beautiful Japanese-style appetizers for pre-dinner or cocktail hour.",
    items: [
      "Edamame (Salt or Spicy)",
      "Gyoza (Pork or Vegetable)",
      "Shrimp Tempura",
      "Spring Rolls",
      "Chicken Teriyaki Bites",
      "Wasabi Peas & Snacks",
    ],
    ideal: "Ideal for cocktail receptions and bridal shower appetizers",
    icon: "🥢",
  },
  {
    title: "Custom Beverage Pairings",
    description: "Complement your menu with curated sake and Japanese beverage selections.",
    items: [
      "Premium Sake Selection",
      "Japanese Beers",
      "Plum Wine & Liqueurs",
      "Yuzu Mojitos & Signature Cocktails",
      "Non-Alcoholic Options",
    ],
    ideal: "Available for receptions and celebrations",
    icon: "🍶",
  },
];

const planningSteps = [
  {
    number: "1",
    title: "Schedule a Consultation",
    description: "Contact us to discuss your vision, guest count, date, and budget. We'll answer all your questions about wedding catering options.",
  },
  {
    number: "2",
    title: "Book Your Tasting",
    description: "Experience our cuisine firsthand. Visit us for a complimentary tasting to sample menu options and finalize your selections.",
  },
  {
    number: "3",
    title: "Customize Your Menu",
    description: "Work with our team to create a personalized menu that reflects your preferences, dietary needs, and wedding style.",
  },
  {
    number: "4",
    title: "Confirm Details",
    description: "Lock in your date, guest count, delivery time, and any special requests. We'll provide a detailed proposal and contract.",
  },
  {
    number: "5",
    title: "Final Walk-Through",
    description: "As your wedding approaches, confirm final headcount, setup details, and any last-minute preferences.",
  },
  {
    number: "6",
    title: "Enjoy Your Day",
    description: "We handle delivery, setup, and service. Sit back and celebrate while Jinbeh makes your culinary dreams come true!",
  },
];

export default function WeddingCateringPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg"
          >
            <source
              src="https://jinbeh.com/wp-content/uploads/2023/01/wedding-celebration.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Wedding Catering
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Make Your Special Day Unforgettable with Jinbeh
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto mb-8">
              Authentic Japanese cuisine and hibachi entertainment create unforgettable memories for your wedding, rehearsal dinner, or bridal shower.
            </p>
            <Link
              href="#consultation"
              className="btn bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2"
            >
              Request a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Wedding Services */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Wedding Events We Cater
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Whether you're planning a grand reception or intimate celebration, Jinbeh creates memorable moments through exceptional cuisine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {weddingServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-soft-gold/10 rounded-full flex items-center justify-center text-accent-red">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* Menu Options */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Wedding Catering Menu Options
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Choose from our curated selections or work with us to create a completely custom menu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {menuOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-gradient-to-br from-white to-warm-ivory rounded-2xl p-8 shadow-lg border border-soft-gold/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-xl font-semibold text-charcoal">
                      {option.title}
                    </h3>
                    <span className="text-4xl">{option.icon}</span>
                  </div>

                  <p className="text-charcoal/70 mb-6 text-sm">
                    {option.description}
                  </p>

                  <div className="bg-white rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-charcoal text-sm mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {option.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                          <svg className="w-4 h-4 text-accent-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-xs text-cedar-brown italic">
                    {option.ideal}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-charcoal/80 mb-6 max-w-2xl mx-auto">
                Every menu can be customized for dietary restrictions, allergies, and preferences.
                <span className="block mt-2 font-semibold text-charcoal">
                  Contact us for a custom quote.
                </span>
              </p>
            </div>
        </section>

        {/* Planning Process */}
        <section className="py-20 bg-charcoal">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Your Wedding Catering Journey
              </h2>
              <p className="text-warm-ivory/70 max-w-2xl mx-auto">
                We make planning your catering simple, stress-free, and delicious.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {planningSteps.map((step, index) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-soft-gold text-charcoal flex items-center justify-center font-heading font-bold text-lg">
                        {step.number}
                      </div>
                      {index < planningSteps.length - 1 && (
                        <div className="w-1 h-12 bg-soft-gold/30 mt-4" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="font-heading text-xl font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-warm-ivory/80">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* Why Choose Jinbeh */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Choose Jinbeh for Your Wedding?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-red/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 text-center">
                  Premium Ingredients
                </h3>
                <p className="text-charcoal/70 text-center text-sm">
                  Fresh, high-quality ingredients and authentic Japanese preparation methods ensure your guests experience the best.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-soft-gold/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 text-center">
                  Complete Customization
                </h3>
                <p className="text-charcoal/70 text-center text-sm">
                  Every menu is tailored to your preferences, dietary needs, and wedding style. Your vision is our priority.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-deep-indigo/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-deep-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 text-center">
                  Professional Service
                </h3>
                <p className="text-charcoal/70 text-center text-sm">
                  Reliable delivery, expert setup, and attentive service ensure your event runs flawlessly from start to finish.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-cedar-brown/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-cedar-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 text-center">
                  Timely Delivery
                </h3>
                <p className="text-charcoal/70 text-center text-sm">
                  We understand timing is critical. Count on punctual delivery and professional service throughout your event.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-charcoal/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3 text-center">
                  Hibachi Entertainment
                </h3>
                <p className="text-charcoal/70 text-center text-sm">
                  Add interactive hibachi chefs to your event for an unforgettable culinary show your guests will love.
                </p>
              </div>
            </div>
        </section>

        {/* Testimonials / Gallery */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Celebrations We've Made Special
              </h2>
              <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                Real couples trust Jinbeh with their most important moments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/photoshoot/sushi-tower.jpg"
                    alt="Wedding reception with sushi platters"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-warm-ivory">
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                    Elegant Reception
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    "The sushi platters were beautifully arranged and absolutely delicious. Our guests loved the presentation!"
                  </p>
                  <p className="text-sm font-semibold text-charcoal">Sarah & Michael</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/about/chef-flames.jpg"
                    alt="Hibachi entertainment at wedding celebration"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-warm-ivory">
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                    Hibachi Entertainment
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    "The hibachi chef stole the show! Everyone had a fantastic time and the food was incredible."
                  </p>
                  <p className="text-sm font-semibold text-charcoal">Jessica & David</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/celebrations/CelebrateYourBirthdayAtJinbeh.jpg"
                    alt="Bridal shower with Japanese appetizers"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-warm-ivory">
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
                    Bridal Shower
                  </h3>
                  <p className="text-charcoal/70 text-sm mb-4">
                    "Such a sophisticated touch for the bridal shower. The appetizers and rolls were the highlight!"
                  </p>
                  <p className="text-sm font-semibold text-charcoal">Emily & Friends</p>
                </div>
              </div>
            </div>
        </section>

        {/* Consultation CTA */}
        <section id="consultation" className="py-20 bg-gradient-to-br from-deep-indigo via-accent-red to-soft-gold text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Ready to Plan Your Perfect Wedding?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Our team is excited to help create an unforgettable culinary experience for your special day. Schedule your free consultation today.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-sm text-white/70">Frisco</p>
                      <a href="tel:2146191200" className="text-white font-semibold hover:text-soft-gold transition-colors">
                        (214) 619-1200
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <svg className="w-6 h-6 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-sm text-white/70">Lewisville</p>
                      <a href="tel:2144882224" className="text-white font-semibold hover:text-soft-gold transition-colors">
                        (214) 488-2224
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:frisco@jinbeh.com?subject=Wedding%20Catering%20Inquiry"
                  className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg inline-flex items-center gap-2 justify-center"
                >
                  Email Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="btn bg-white/20 text-white border-2 border-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg font-semibold rounded-xl transition-all inline-flex items-center gap-2 justify-center"
                >
                  Schedule Tasting
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Wedding Catering FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "Can I schedule a tasting before committing to catering?",
                  a: "Yes! We offer complimentary tastings for couples planning their wedding. Call us to schedule a time that works for you.",
                },
                {
                  q: "How far in advance should I book for my wedding?",
                  a: "We recommend booking 4-6 weeks in advance for wedding catering. For peak seasons (spring/fall), we suggest 8-12 weeks ahead.",
                },
                {
                  q: "What is the minimum guest count for wedding catering?",
                  a: "Our wedding packages typically start at 25 guests. For smaller rehearsal dinners or bridal showers, we can accommodate 15+ guests.",
                },
                {
                  q: "Do you provide delivery and setup?",
                  a: "Yes! We deliver to your venue and handle setup. We can also arrange for hibachi chefs to prepare food tableside if desired.",
                },
                {
                  q: "Can you accommodate dietary restrictions?",
                  a: "Absolutely. We create vegetarian, vegan, gluten-free, and allergy-friendly options. Let us know your needs during planning.",
                },
              ].map((faq, index) => (
                <details key={index} className="group bg-white rounded-xl p-6 shadow-md cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-charcoal hover:text-accent-red transition-colors">
                    <span>{faq.q}</span>
                    <svg className="w-5 h-5 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </summary>
                  <p className="text-charcoal/70 mt-4 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 bg-charcoal text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl font-heading font-bold text-white mb-8">
              Explore More Services
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/catering"
                className="px-6 py-3 bg-white/10 rounded-full text-white hover:bg-soft-gold hover:text-charcoal transition-all border border-white/20"
              >
                All Catering Services
              </Link>
              <Link
                href="/catering/corporate"
                className="px-6 py-3 bg-white/10 rounded-full text-white hover:bg-soft-gold hover:text-charcoal transition-all border border-white/20"
              >
                Corporate Catering
              </Link>
              <Link
                href="/celebrations/anniversary"
                className="px-6 py-3 bg-white/10 rounded-full text-white hover:bg-soft-gold hover:text-charcoal transition-all border border-white/20"
              >
                Anniversary Dinners
              </Link>
              <Link
                href="/celebrations"
                className="px-6 py-3 bg-white/10 rounded-full text-white hover:bg-soft-gold hover:text-charcoal transition-all border border-white/20"
              >
                All Celebrations
              </Link>
              <Link
                href="/frisco"
                className="px-6 py-3 bg-white/10 rounded-full text-white hover:bg-soft-gold hover:text-charcoal transition-all border border-white/20"
              >
                Visit Frisco
              </Link>
              <Link
                href="/lewisville"
                className="px-6 py-3 bg-white/10 rounded-full text-white hover:bg-soft-gold hover:text-charcoal transition-all border border-white/20"
              >
                Visit Lewisville
              </Link>
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
