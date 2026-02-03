import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Jinbeh at Home: Experience Jinbeh Catering's Unique Japanese Flavors",
  description:
    "Experience authentic Japanese flavors with Jinbeh Catering's 'benihana at home' service. Customize your menu for any event and enjoy competitive pricing.",
  keywords: [
    "jinbeh catering",
    "japanese catering dallas",
    "hibachi catering",
    "sushi catering",
    "catering services frisco",
    "event catering dfw",
  ],
  openGraph: {
    title: "Jinbeh at Home: Experience Jinbeh Catering's Unique Japanese Flavors",
    description:
      "Bring Jinbeh's authentic Japanese cuisine to your event with professional catering services. Customizable menus for birthdays, corporate events, and more.",
    images: ["/images/photoshoot/hibachi-plate-shrimp.jpg"],
  },
};

const faqs = [
  {
    question: "How much does Jinbeh catering cost per person?",
    answer:
      "Jinbeh catering pricing typically ranges from $15-$50 per person depending on menu selection and complexity. Basic menus start around $15-$25 per person, while premium options with live hibachi cooking can reach $40-$50+. We provide transparent pricing and detailed quotes based on your specific event needs. Call (214) 619-1200 or (214) 488-2224 for a quote.",
  },
  {
    question: "What catering options does Jinbeh offer?",
    answer:
      "Welcome to your celebration! Jinbeh offers comprehensive catering including sushi platters, interactive hibachi stations with live chefs, rice and noodle dishes, vegetarian options, and customizable menus. Fresh and flavorful food for all events, from casual gatherings to formal dinners.",
  },
  {
    question: "How much does catering for 50 people cost?",
    answer:
      "For 50 people, expect catering costs to range from $750-$2,500 depending on menu selections. A basic sushi option might cost around $750-$1,200, while premium hibachi with live cooking can reach $2,000-$2,500. Contact us for a detailed quote.",
  },
  {
    question: "What types of events can Jinbeh cater?",
    answer:
      "It's a celebration! Jinbeh caters to birthday parties, corporate events, weddings, Thanksgiving dinners, family gatherings, and more. Whether you need a simple buffet or interactive dinner and a show hibachi station, our team creates perfect culinary experiences.",
  },
  {
    question: "How far in advance should I book catering?",
    answer:
      "For best availability, book catering at least 2-3 weeks in advance. For large events (100+ guests), we recommend 4-6 weeks. This allows our team to plan menu details, logistics, and special arrangements. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224 to discuss your event.",
  },
  {
    question: "Can Jinbeh handle dietary restrictions?",
    answer:
      "Absolutely! We offer gluten-free, vegetarian, vegan, and allergy-friendly options. Our experienced chefs work with you to accommodate all dietary needs without compromising on taste or quality. Tell us your requirements when booking.",
  },
];

export default function JinbehCateringServicesPage() {
  return (
    <ArticleLayout
      title="Jinbeh at Home: Experience Jinbeh Catering's Unique Japanese Flavors"
      metaDescription="Experience authentic Japanese flavors with Jinbeh Catering. From sushi platters to interactive hibachi stations, bring Jinbeh's culinary excellence to your next event."
      heroImage="/images/photoshoot/hibachi-plate-shrimp.jpg"
      heroAlt="Premium catered hibachi meal ready for home event"
      category="Services & Guides"
      categorySlug="services"
      publishDate="January 2026"
      readTime="10 min read"
      faqs={faqs}
    >
      {/* Article Body */}
      <p>
        There's something special about bringing restaurant-quality Japanese cuisine directly to your event. No stress about cooking, no kitchen limitations, just exceptional food and memorable moments with your guests.
      </p>

      <p>
        Jinbeh Catering makes this possible. For over three decades, we've been crafting authentic Japanese meals, and now we bring that same dedication and expertise to events throughout the Dallas-Fort Worth area. Whether you're planning a birthday celebration, corporate gathering, wedding reception, or family holiday dinner, our catering services transform any occasion into an unforgettable culinary experience.
      </p>

      <h2>Why Choose Jinbeh Catering?</h2>

      <h3>A Unique Culinary Experience</h3>

      <p>
        Jinbeh is synonymous with authentic Japanese flavors, crafted with precision and passion. When you choose{" "}
        <Link href="/catering" className="text-accent-red hover:underline">
          Jinbeh Catering
        </Link>
        , you're not just ordering food—you're investing in a unique culinary experience that transcends ordinary catering services.
      </p>

      <p>
        Our chefs bring the same dedication and expertise to your event that you'd find in our restaurant. Each dish is carefully curated to reflect the rich tapestry of Japanese cuisine, from the delicate balance of fresh sushi to the bold, theatrical flavors of teppanyaki. But our catering goes beyond delivering food; we deliver an experience.
      </p>

      <p>
        The presentation of each dish is an art form designed to delight the senses. Our team understands the importance of aesthetics in Japanese dining and incorporates this into every catering event. Your meal won't just taste exceptional—it will look exquisite. This commitment to authenticity and excellence sets Jinbeh Catering apart as a premier choice for those seeking something truly extraordinary.
      </p>

      <h3>Fresh, Never-Frozen Ingredients</h3>

      <p>
        We never compromise on quality. Every ingredient that arrives at your event is fresh and prepared with care. Our sushi uses never-frozen fish, our hibachi features prime cuts of meat and fresh seafood, and our vegetables are selected for peak flavor and nutritional value.
      </p>

      <div className="bg-warm-ivory/50 rounded-xl p-6 my-8 border-l-4 border-accent-red">
        <p className="italic text-charcoal/80 mb-2">
          "The presentation was beautiful, the food was amazing, and the catering team was professional and courteous throughout the entire event. Jinbeh made our celebration truly special."
        </p>
        <p className="text-sm text-charcoal/80">— Verified Customer</p>
      </div>

      <h2>Customizable Menu Options</h2>

      <p>
        Our catering services offer a variety of menu options to suit different tastes and dietary needs. Every event is unique, and our flexibility ensures you can choose from a range of options tailored specifically to your vision.
      </p>

      <h3>Popular Catering Menus</h3>

      <p>
        <strong>Sushi Platters:</strong> A selection of fresh, expertly crafted sushi rolls and nigiri, perfect for offering guests a taste of Japan's most iconic dishes. Options range from classic favorites to innovative creations that surprise and delight.
      </p>

      <p>
        <strong>Teppanyaki Stations:</strong> Our signature offering features live hibachi cooking where our skilled chefs prepare delicious dishes right before your guests' eyes. This interactive dining experience not only entertains but also allows guests to enjoy freshly prepared meals tailored to their preferences.
      </p>

      <p>
        <strong>Rice & Noodle Dishes:</strong> From fried rice to yakisoba, these satisfying sides complement any menu and fill guests with authentic Japanese flavors.
      </p>

      <p>
        <strong>Specialty Options:</strong> We offer gluten-free, vegetarian, and vegan dishes without compromising on taste or quality. Our experienced chefs are skilled in crafting satisfying plant-based options that highlight the natural flavors of fresh ingredients.
      </p>

      <p>
        Our team will work with you during the planning process to create a customized menu that reflects your event's theme and your guests' preferences. Whether you're hosting a kids' birthday party or a sophisticated corporate event, we have the flexibility and expertise to deliver exactly what you envision.
      </p>

      <h2>Understanding Catering Costs</h2>

      <h3>Transparent Pricing You Can Trust</h3>

      <p>
        One of the most common questions we encounter is about pricing. We understand that budgeting for catering is important, which is why we're committed to transparency.
      </p>

      <p>
        <strong>Per-Person Pricing:</strong> Our catering typically ranges from $15-$50 per person, depending on menu complexity and services. Basic sushi and rice bowl packages start around $15-$25 per person, while premium options with live hibachi cooking command higher pricing. We believe exceptional cuisine should be accessible, and our pricing structure is designed to offer value without compromising quality.
      </p>

      <p>
        <strong>Medium-Sized Gatherings:</strong> For an event of 50 people, expect costs to range from $750-$2,500. A basic menu might run $750-$1,200, while premium options with live hibachi cooking, full service setup, and specialized dishes can reach $2,000-$2,500. Our team provides detailed quotes based on your specific requirements.
      </p>

      <p>
        We understand that budgeting for an event involves careful consideration of logistical factors, including staff requirements, equipment needs, and ingredient sourcing. Jinbeh Catering takes a comprehensive approach to event planning, ensuring every detail is accounted for and every dollar delivers maximum value.
      </p>

      <h3>What Influences Your Quote?</h3>

      <p>
        Several factors affect catering pricing, and we're transparent about each one:
      </p>

      <ul>
        <li>
          <strong>Menu Selection</strong> — Premium proteins cost more than basic options
        </li>
        <li>
          <strong>Guest Count</strong> — Larger events benefit from economies of scale
        </li>
        <li>
          <strong>Event Date & Time</strong> — Weekend and holiday events may have additional fees
        </li>
        <li>
          <strong>Service Level</strong> — Live hibachi chefs and full service staff add to costs
        </li>
        <li>
          <strong>Travel Distance</strong> — Events further from our restaurants may include travel fees
        </li>
        <li>
          <strong>Setup & Cleanup</strong> — Comprehensive service requires professional staff
        </li>
      </ul>

      <h2>Perfect Events for Jinbeh Catering</h2>

      <h3>Birthday Parties</h3>

      <p>
        Make your child's special day unforgettable with our fun and delicious birthday catering. Our team creates themed menus and interactive dining experiences that delight children and adults alike. Imagine your child's guests experiencing a live hibachi chef flipping food and putting on a show—that's the Jinbeh difference.
      </p>

      <p>
        <Link href="/celebrations/birthday" className="text-accent-red hover:underline">
          Learn more about Jinbeh birthday parties →
        </Link>
      </p>

      <h3>Corporate Events</h3>

      <p>
        Impress clients and colleagues with professional corporate catering designed for business settings. We offer packages tailored to team-building lunches, formal dinners, and client appreciation events. A Jinbeh catering experience demonstrates your company values quality, creativity, and memorable moments.
      </p>

      <h3>Weddings & Receptions</h3>

      <p>
        Create a memorable wedding reception with our exquisite catering services tailored to your theme and preferences. Our team collaborates closely with couples and wedding planners to design a menu that complements the overall aesthetic and tone of your celebration.
      </p>

      <h3>Family Holidays</h3>

      <p>
        Let us handle the cooking for your Thanksgiving gathering, holiday party, or family reunion. Our menu includes traditional favorites alongside unique Japanese-inspired dishes, offering a fresh take on celebration fare while freeing you to focus on family time.
      </p>

      <h2>The Jinbeh Catering Experience</h2>

      <h3>From Planning to Execution</h3>

      <p>
        The Jinbeh catering experience begins the moment you contact us. Our team listens to your vision, understands your constraints, and crafts a solution that exceeds expectations.
      </p>

      <p>
        <strong>Initial Consultation:</strong> We discuss your event details, guest count, dietary needs, and budget. This conversation informs everything that follows.
      </p>

      <p>
        <strong>Menu Customization:</strong> Our chefs work with you to create a menu that reflects your vision. We'll suggest pairings, accommodate restrictions, and ensure every aspect aligns with your expectations.
      </p>

      <p>
        <strong>Pre-Event Communication:</strong> We confirm details, discuss logistics, and address any questions. You'll always know exactly what to expect.
      </p>

      <p>
        <strong>Professional Execution:</strong> On event day, our team arrives prepared. We handle setup, food preparation, service, and cleanup. You focus on your guests while we handle everything else.
      </p>

      <h3>Catering Locations & Service Areas</h3>

      <p>
        Jinbeh Catering services the Dallas-Fort Worth area, including Frisco, Lewisville, and surrounding communities. Whether your event is nearby or requires travel, our team is equipped to deliver the same exceptional experience.
      </p>

      <p>
        <Link href="/frisco" className="text-accent-red hover:underline">
          Check our catering service areas and locations →
        </Link>
      </p>

      <h2>Getting Started with Jinbeh Catering</h2>

      <p>
        Ready to bring Jinbeh's authentic Japanese cuisine to your next event? Here's how to get started:
      </p>

      <ol className="space-y-3 mb-8">
        <li>
          <strong>Contact Our Team:</strong> Call{" "}
          <Link href="tel:2146191200" className="text-accent-red hover:underline">
            (214) 619-1200
          </Link>{" "}
          (Frisco) or{" "}
          <Link href="tel:2144882224" className="text-accent-red hover:underline">
            (214) 488-2224
          </Link>{" "}
          (Lewisville), or{" "}
          <Link href="/catering" className="text-accent-red hover:underline">
            submit an online catering inquiry
          </Link>
        </li>
        <li>
          <strong>Discuss Your Event:</strong> Tell us about your vision, guest count, date, and budget
        </li>
        <li>
          <strong>Review Menu Options:</strong> Explore customizable menus and pricing
        </li>
        <li>
          <strong>Confirm Details:</strong> Lock in your event with deposit and final details
        </li>
        <li>
          <strong>Enjoy Your Event:</strong> Our team handles everything while you celebrate
        </li>
      </ol>

      <div className="bg-soft-gold/20 rounded-xl p-6 my-8">
        <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
          Why Businesses & Families Choose Jinbeh Catering
        </h3>
        <ul className="space-y-2 text-charcoal/80">
          <li>✓ Fresh, never-frozen Japanese ingredients</li>
          <li>✓ Customizable menus for any event type</li>
          <li>✓ Professional, experienced catering team</li>
          <li>✓ Transparent pricing with detailed quotes</li>
          <li>✓ Accommodation for dietary restrictions</li>
          <li>✓ Interactive hibachi experiences available</li>
          <li>✓ Family-owned tradition since 1988</li>
          <li>✓ Full service from setup to cleanup</li>
        </ul>
      </div>

      <p>
        Jinbeh Catering is committed to delivering exceptional culinary experiences for any occasion. Whether you're planning a small family gathering or a large corporate event, our team is here to make your vision a reality. By understanding the costs, menu options, and services available, you can confidently plan an event that your guests will remember for years to come.
      </p>

      <p>
        Reach out to us today to start planning your next event. Let Jinbeh bring the taste of authentic Japan to your celebration, creating memories that last a lifetime.
      </p>

      <RelatedArticles currentSlug="jinbeh-catering-services" />
    </ArticleLayout>
  );
}
