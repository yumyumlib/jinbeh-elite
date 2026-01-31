import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Careers at Jinbeh | Join Our Family - Frisco & Lewisville, TX",
  description:
    "Join the Jinbeh family! We're hiring passionate individuals for positions in hibachi cooking, sushi preparation, hospitality, and more. Build your career at a family-owned Japanese restaurant.",
  keywords: [
    "jinbeh careers",
    "japanese restaurant jobs",
    "hibachi chef jobs",
    "sushi chef positions",
    "hospitality jobs frisco",
    "server positions lewisville",
    "restaurant careers dfw",
    "join our team",
    "hiring jinbeh",
  ],
  openGraph: {
    title: "Careers at Jinbeh | Join Our Family",
    description:
      "Explore exciting career opportunities at Jinbeh Japanese Restaurant. We're looking for passionate team members in Frisco and Lewisville, TX.",
    url: "https://jinbeh.com/careers",
    type: "website",
    images: [
      {
        url: "https://jinbeh.com/images/careers/team-cooking.jpg",
        width: 1200,
        height: 630,
        alt: "Jinbeh team of chefs and hospitality staff",
      },
    ],
  },
  alternates: {
    canonical: "https://jinbeh.com/careers",
  },
};

// Job Posting Schema for search engines
const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Multiple Positions Available at Jinbeh",
  "description": "Join Jinbeh Japanese Restaurant as a Hibachi Chef, Sushi Chef, Server, or Host/Hostess. Build your career in a family-owned restaurant with 37+ years of tradition.",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Jinbeh Japanese Restaurant",
    "sameAs": "https://jinbeh.com",
    "logo": "https://jinbeh.com/images/logos/jinbeh-logo.png",
  },
  "jobLocation": [
    {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2693 Preston Rd, Suite 1040",
        "addressLocality": "Frisco",
        "addressRegion": "TX",
        "postalCode": "75034",
        "addressCountry": "US",
      },
    },
    {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2440 S Stemmons Fwy #A",
        "addressLocality": "Lewisville",
        "addressRegion": "TX",
        "postalCode": "75067",
        "addressCountry": "US",
      },
    },
  ],
  "applicantLocationRequirements": [
    {
      "@type": "Country",
      "name": "US",
    },
  ],
};

// FAQ Schema for careers page
const careersSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the main career opportunities at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We're actively recruiting for Hibachi Chefs, Sushi Chefs, Servers, and Host/Hostess positions at both our Frisco and Lewisville locations.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need prior culinary experience to apply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While culinary experience is a plus, we're willing to train passionate individuals who are committed to learning and delivering excellent service.",
      },
    },
    {
      "@type": "Question",
      "name": "What benefits does Jinbeh offer employees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jinbeh offers competitive wages, employee meal discounts, flexible scheduling, advancement opportunities, and a welcoming family-oriented work environment.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I apply for a position at Jinbeh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can apply by calling your preferred location (Frisco: 214-619-1200, Lewisville: 214-488-2224), visiting in person, or emailing us with your resume and a brief introduction.",
      },
    },
  ],
};

const positions = [
  {
    title: "Hibachi Chef",
    location: "Frisco & Lewisville",
    type: "Full-Time / Part-Time",
    description:
      "Join our elite team of hibachi chefs and create unforgettable dining experiences. You'll cook tableside on our iron griddles, perform entertaining knife skills, and delight guests with fresh, hot meals prepared right before their eyes.",
    responsibilities: [
      "Prepare hibachi dishes on griddles with precision and showmanship",
      "Maintain high food quality and presentation standards",
      "Interact with guests, creating memorable experiences",
      "Follow food safety and sanitation protocols",
      "Train and mentor junior chefs",
      "Manage inventory of ingredients and supplies",
    ],
    qualifications: [
      "Professional culinary training or equivalent experience preferred",
      "Strong knife skills and food preparation knowledge",
      "Excellent communication and customer service skills",
      "Ability to work in fast-paced environments",
      "Physical stamina to work long shifts",
      "Willingness to learn and grow with our team",
    ],
    color: "bg-accent-red",
  },
  {
    title: "Sushi Chef",
    location: "Frisco & Lewisville",
    type: "Full-Time / Part-Time",
    description:
      "As a Sushi Chef, you'll craft beautiful, delicious sushi rolls and nigiri with precision and artistry. Work with the freshest ingredients and traditional techniques to create dishes that delight our guests.",
    responsibilities: [
      "Prepare sushi rolls, nigiri, sashimi, and other sushi specialties",
      "Source and handle fresh fish with expertise",
      "Maintain strict food safety and sanitation standards",
      "Create visually stunning presentations",
      "Collaborate with other kitchen staff",
      "Monitor inventory and suggest new menu items",
    ],
    qualifications: [
      "Professional sushi training or 2+ years sushi experience",
      "Knowledge of fish grades, quality, and handling",
      "Excellent knife skills and attention to detail",
      "Understanding of Japanese cuisine and traditions",
      "Physical ability to stand for long periods",
      "Team-oriented mindset",
    ],
    color: "bg-deep-indigo",
  },
  {
    title: "Server",
    location: "Frisco & Lewisville",
    type: "Full-Time / Part-Time",
    description:
      "Provide exceptional hospitality and service to our guests. As a Server, you'll take orders, recommend menu items, and ensure every guest feels welcomed and valued as part of our Jinbeh family.",
    responsibilities: [
      "Greet and seat guests with warmth and professionalism",
      "Take orders and provide menu recommendations",
      "Deliver food and beverages with care",
      "Handle payment processing and maintain accuracy",
      "Ensure tables are clean and well-maintained",
      "Respond promptly to guest requests and concerns",
    ],
    qualifications: [
      "Strong customer service skills and positive attitude",
      "Ability to work in a fast-paced environment",
      "Knowledge of food and beverage basics",
      "Excellent communication skills",
      "Physical ability to carry trays and be on feet",
      "Flexibility with scheduling",
    ],
    color: "bg-soft-gold",
  },
  {
    title: "Host/Hostess",
    location: "Frisco & Lewisville",
    type: "Full-Time / Part-Time",
    description:
      "Be the first face of Jinbeh! As a Host/Hostess, you'll greet guests, manage the reservation system, and coordinate seating to ensure smooth operations and exceptional first impressions.",
    responsibilities: [
      "Greet all guests with genuine warmth and hospitality",
      "Manage reservation system and wait list",
      "Coordinate seating based on guest preferences",
      "Answer phones and answer customer inquiries",
      "Maintain clean, organized host stand",
      "Support servers and kitchen staff",
    ],
    qualifications: [
      "Excellent interpersonal and communication skills",
      "Friendly, welcoming personality",
      "Basic computer skills for reservation systems",
      "Ability to multitask and stay organized",
      "Flexibility with scheduling",
      "Understanding of Japanese hospitality principles",
    ],
    color: "bg-charcoal",
  },
];

const benefits = [
  {
    icon: "💰",
    title: "Competitive Wages",
    description:
      "We offer competitive hourly rates and tips-based compensation that rewards excellent service and performance.",
  },
  {
    icon: "🍜",
    title: "Employee Meals",
    description:
      "Enjoy delicious Jinbeh meals at a discounted rate. Our chefs prepare amazing food, and you get to experience it too!",
  },
  {
    icon: "📅",
    title: "Flexible Scheduling",
    description:
      "We work with you to find scheduling that fits your lifestyle while ensuring quality service for our guests.",
  },
  {
    icon: "🎓",
    title: "Training & Development",
    description:
      "Grow your culinary skills and hospitality knowledge through mentorship and ongoing training from experienced professionals.",
  },
  {
    icon: "🚀",
    title: "Career Advancement",
    description:
      "Start as a server and become a chef. We promote from within and support your career growth journey.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Culture",
    description:
      "Work in a warm, welcoming environment where team members are valued, respected, and celebrated as family.",
  },
];

const faqs = [
  {
    category: "About Working at Jinbeh",
    questions: [
      {
        q: "What is the culture like at Jinbeh?",
        a: "Jinbeh is built on family values and hospitality. We treat every team member with respect and create an environment where people genuinely enjoy coming to work. Our 37-year tradition is built on teamwork, learning, and celebrating successes together.",
      },
      {
        q: "Is Jinbeh a good place to start a culinary career?",
        a: "Absolutely! Whether you're learning hibachi, sushi, or hospitality, Jinbeh provides mentorship from experienced professionals. Many of our current leadership started in entry-level positions and grew into their roles.",
      },
      {
        q: "What opportunities are there for advancement?",
        a: "We actively promote from within. Demonstrate excellence, initiative, and a commitment to our values, and you'll have opportunities to move into leadership positions, mentor others, and help shape our future.",
      },
    ],
  },
  {
    category: "The Application Process",
    questions: [
      {
        q: "How do I apply for a position?",
        a: "You can apply by: (1) Calling your preferred location directly at Frisco: (214) 619-1200 or Lewisville: (214) 488-2224, (2) Visiting in person with your resume, or (3) Emailing your resume and a brief introduction to careers@jinbeh.com.",
      },
      {
        q: "What should I include with my application?",
        a: "Include a resume highlighting your relevant experience, any culinary certifications or training, and references. A brief cover letter explaining why you're interested in joining Jinbeh is greatly appreciated!",
      },
      {
        q: "How long does the hiring process take?",
        a: "We typically review applications and conduct interviews within 1-2 weeks of submission. For competitive positions, we may move quickly, so applying promptly increases your chances.",
      },
      {
        q: "Will I be interviewed in person?",
        a: "Yes, we conduct in-person interviews at the relevant location. This gives us a chance to get to know you and for you to see our restaurant firsthand.",
      },
    ],
  },
  {
    category: "Position-Specific",
    questions: [
      {
        q: "Do I need culinary school to be a hibachi chef?",
        a: "While formal training is valuable, we're looking for passionate individuals with the willingness to learn. We provide mentorship and training, but prior experience or courses in hibachi cooking are a plus.",
      },
      {
        q: "What's the difference in requirements between server and host positions?",
        a: "Hosts/Hostesses focus on guest greetings, reservations, and seating coordination. Servers focus on taking orders, delivering food/drinks, and personalized table service. Both require excellent communication but emphasize different skills.",
      },
      {
        q: "Are there part-time opportunities?",
        a: "Yes! We offer both full-time and part-time positions to accommodate different lifestyle needs. Part-time team members are valued equally and have access to the same training and advancement opportunities.",
      },
    ],
  },
  {
    category: "Work-Life Balance",
    questions: [
      {
        q: "What are typical work hours?",
        a: "Hours vary by position and location. Lunch shifts are typically 11 AM-2:30 PM, dinner shifts are 5 PM-9/10 PM (depending on day). We work with you on scheduling while maintaining quality service.",
      },
      {
        q: "How flexible is the scheduling?",
        a: "We understand life happens! We do our best to accommodate scheduling requests while ensuring we have adequate staffing. Give us notice when possible, and we'll work with you.",
      },
      {
        q: "Are there days off and time off requests?",
        a: "Yes, we respect your need for time off. We ask for advance notice when possible so we can plan adequate coverage. We want our team members to have time for rest and personal life.",
      },
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
        />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/food/OnionVolcanoDemo.jpg"
            alt="Jinbeh hibachi chef performing with flames - exciting career opportunities await"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <p className="text-soft-gold font-medium tracking-wider uppercase mb-4">
              Build Your Future
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 hero-headline">
              Join Our Family
            </h1>
            <p className="text-xl text-warm-ivory/90 max-w-2xl mx-auto hero-subheadline">
              Experience, passion, and hospitality—we're looking for team members
              who share our commitment to excellence and family values.
            </p>
          </div>
        </section>

        {/* Why Jinbeh Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Why Work at Jinbeh?
              </h2>
              <p className="text-lg text-charcoal/70">
                For 37 years, we've built more than a restaurant—we've created a family where team members thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-charcoal/70">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-96 md:h-full min-h-[400px]">
                <Image
                  src="/images/interior/FriscoLocation_Bar_Front.jpg"
                  alt="Jinbeh team members working together in our warm, welcoming restaurant"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-soft-gold font-medium tracking-wider uppercase mb-3">
                  Our Culture
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
                  More Than a Job
                </h2>
                <div className="space-y-5 text-charcoal/80 leading-relaxed">
                  <p>
                    Working at Jinbeh means being part of something special. For over three decades, we've maintained the same core values: genuine hospitality, commitment to quality, and treating everyone—guests and team members alike—as family.
                  </p>
                  <p>
                    Whether you're flipping hibachi on the griddle, crafting perfect sushi rolls, serving with a smile, or welcoming guests at the door, your contributions matter. We invest in our team members' growth and celebrate their successes.
                  </p>
                  <p className="text-charcoal font-medium italic border-l-4 border-soft-gold pl-4">
                    "The best part of working at Jinbeh is the family atmosphere. Everyone here genuinely cares about each other and wants each other to succeed."
                    <span className="block text-sm text-charcoal/60 mt-2 not-italic">— Jinbeh Team Member</span>
                  </p>
                  <p>
                    From day one, you'll be supported by experienced mentors who are invested in your success. We believe in promoting from within and creating pathways for career advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-charcoal/70">
                We're currently hiring for exciting opportunities at both our Frisco and Lewisville locations.
              </p>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {positions.map((position, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${position.color} text-white p-8`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="bg-white/20 px-3 py-1 rounded-full">
                            📍 {position.location}
                          </span>
                          <span className="bg-white/20 px-3 py-1 rounded-full">
                            ⏰ {position.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-charcoal/80 mb-8">{position.description}</p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-heading font-bold text-charcoal mb-4 text-lg">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, i) => (
                            <li key={i} className="flex gap-3 text-charcoal/75">
                              <span className="text-accent-red flex-shrink-0">✓</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-heading font-bold text-charcoal mb-4 text-lg">
                          Required Qualifications
                        </h4>
                        <ul className="space-y-2">
                          {position.qualifications.map((qual, i) => (
                            <li key={i} className="flex gap-3 text-charcoal/75">
                              <span className="text-soft-gold flex-shrink-0">→</span>
                              <span>{qual}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="#apply"
                        className="flex-1 btn bg-accent-red text-white hover:bg-accent-red/90 px-6 py-3 text-center rounded-xl font-semibold transition-colors"
                      >
                        Apply Now
                      </a>
                      <a
                        href="/contact"
                        className="flex-1 btn bg-charcoal/10 text-charcoal hover:bg-charcoal/20 px-6 py-3 text-center rounded-xl font-semibold transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section id="apply" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                How to Apply
              </h2>
              <p className="text-lg text-charcoal/70">
                We're excited to learn about you! Choose the method that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {/* Call */}
              <div className="bg-warm-ivory rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                  Call Us
                </h3>
                <p className="text-charcoal/70 mb-6">
                  Speak directly with our managers to discuss opportunities and answer your questions.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-charcoal/60 uppercase mb-1">Frisco</p>
                    <a
                      href="tel:2146191200"
                      className="text-accent-red hover:text-accent-red/80 font-bold text-lg"
                    >
                      (214) 619-1200
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/60 uppercase mb-1">Lewisville</p>
                    <a
                      href="tel:2144882224"
                      className="text-accent-red hover:text-accent-red/80 font-bold text-lg"
                    >
                      (214) 488-2224
                    </a>
                  </div>
                </div>
              </div>

              {/* Visit */}
              <div className="bg-warm-ivory rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏯</div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                  Visit In Person
                </h3>
                <p className="text-charcoal/70 mb-6">
                  Stop by either location with your resume and meet our team. We love meeting passionate people!
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-charcoal/60 uppercase mb-2">Frisco</p>
                    <p className="text-sm text-charcoal/75 mb-2">2693 Preston Rd, Suite 1040</p>
                    <Link
                      href="/frisco"
                      className="text-accent-red hover:text-accent-red/80 font-semibold text-sm"
                    >
                      Get Directions →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-warm-ivory rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                  Send Your Resume
                </h3>
                <p className="text-charcoal/70 mb-6">
                  Email your resume and a brief introduction. We'll review promptly and get back to you.
                </p>
                <a
                  href="mailto:careers@jinbeh.com"
                  className="inline-block bg-accent-red text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent-red/90 transition-colors"
                >
                  Email Your Resume
                </a>
              </div>
            </div>

            {/* What to Include */}
            <div className="bg-gradient-to-br from-deep-indigo/10 to-accent-red/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
                What to Include with Your Application
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-soft-gold font-bold flex-shrink-0">✓</span>
                  <span className="text-charcoal/80">Your resume with work history and experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-soft-gold font-bold flex-shrink-0">✓</span>
                  <span className="text-charcoal/80">References from previous employers or mentors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-soft-gold font-bold flex-shrink-0">✓</span>
                  <span className="text-charcoal/80">Any relevant culinary certifications or training</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-soft-gold font-bold flex-shrink-0">✓</span>
                  <span className="text-charcoal/80">A brief note about why you're interested in Jinbeh</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-warm-ivory">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-charcoal/70">
                Have questions about working at Jinbeh? We've got answers.
              </p>
            </div>

            <div className="space-y-16 max-w-4xl mx-auto">
              {faqs.map((faqGroup, groupIdx) => (
                <div key={groupIdx}>
                  <h3 className="text-2xl font-heading font-bold text-charcoal mb-8 pb-4 border-b-2 border-accent-red/30">
                    {faqGroup.category}
                  </h3>
                  <div className="space-y-6">
                    {faqGroup.questions.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                      >
                        <h4 className="text-lg font-heading font-bold text-charcoal mb-3 flex items-start gap-3">
                          <span className="text-accent-red flex-shrink-0 mt-1">Q:</span>
                          <span>{item.q}</span>
                        </h4>
                        <p className="text-charcoal/75 leading-relaxed flex gap-3">
                          <span className="text-deep-indigo flex-shrink-0 font-bold flex-shrink-0">
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
              Still Have Questions?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              We're here to help! Don't hesitate to reach out to discuss your career opportunities at Jinbeh.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8 max-w-md mx-auto">
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
            <a
              href="/contact"
              className="inline-block bg-accent-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-accent-red/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-accent-red to-deep-indigo text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Join Our Family?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Whether you're just starting your career or looking for a new challenge, Jinbeh is ready for you. Apply today and become part of our 37-year tradition of excellence, family, and hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="btn bg-white text-accent-red hover:bg-warm-ivory px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Apply Now
              </a>
              <Link
                href="/about"
                className="btn bg-white/20 backdrop-blur text-white border-2 border-white/50 hover:bg-white hover:text-deep-indigo px-8 py-4 text-lg font-semibold rounded-xl transition-all"
              >
                Learn Our Story
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
