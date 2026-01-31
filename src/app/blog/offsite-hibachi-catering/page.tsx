import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ArticleLayout from "@/components/ArticleLayout";
import RelatedArticles from "@/components/RelatedArticles";

export const metadata: Metadata = {
  title: "Jinbeh Offsite Events Catering: Hibachi at Home | Interactive Teppanyaki",
  description:
    "Elevate your next event with Jinbeh's offsite events catering. Experience Japanese flavors and interactive hibachi performances right at home, ensuring unforgettable culinary moments.",
  keywords: [
    "hibachi catering near me",
    "offsite catering dallas",
    "hibachi chef for hire",
    "private hibachi party",
    "backyard hibachi event",
    "interactive catering dfw",
  ],
  openGraph: {
    title: "Jinbeh Offsite Events Catering: Hibachi at Home",
    description:
      "Bring the hibachi experience to your home or venue. Live chefs, customized menus, and entertaining performances perfect for any celebration.",
    images: ["/images/photoshoot/hibachi-plate-shrimp.jpg"],
  },
};

const faqs = [
  {
    question: "Can Jinbeh bring a hibachi chef to my home?",
    answer:
      "It's a celebration! Jinbeh specializes in offsite hibachi catering. Our skilled chefs travel with equipment and ingredients for a complete interactive experience. Setup, cooking, service, and cleanup included. Call Frisco (214) 619-1200 or Lewisville (214) 488-2224.",
  },
  {
    question: "What areas does Jinbeh service for catering?",
    answer:
      "We service Dallas-Fort Worth including Frisco, Lewisville, and surrounding communities. We come to your home, backyard, or private venue. Contact us to discuss your location. We treat every guest like family!",
  },
  {
    question: "How many guests can Jinbeh accommodate?",
    answer:
      "We handle intimate gatherings of 8-10 to large celebrations of 100+. Each hibachi grill serves 8 people. We'll design the perfect setup for your event size. Dinner and a show for everyone!",
  },
  {
    question: "What's included in Jinbeh's catering?",
    answer:
      "Hibachi chef, equipment, all ingredients, tableside cooking, service staff, full setup and cleanup. You provide venue and guests—we handle everything else. Fresh and flavorful every time!",
  },
  {
    question: "When should I book Jinbeh for offsite catering?",
    answer:
      "Book 2-4 weeks in advance, longer for holidays or large groups. Welcome to the table! Contact us early to secure your preferred date. We'll create an unforgettable celebration.",
  },
  {
    question: "Can Jinbeh customize the menu?",
    answer:
      "Absolutely! Our chefs create fully customized menus. Choose proteins, add sushi, salads, appetizers, sides. Vegetarian and vegan options available. We treat every guest like family with accommodations.",
  },
];

export default function OffsiteHibachiCateringPage({ params }: { params: { slug: string } }) {
  const slug = "offsite-hibachi-catering";
  return (
    <ArticleLayout
      title="Jinbeh Offsite Events Catering: Hibachi at Home"
      metaDescription="Transform your next event with Jinbeh's interactive offsite hibachi catering. Professional chefs, customized menus, and unforgettable entertainment delivered to your location."
      heroImage="/images/blog/8-C060324-6462.jpg"
      heroAlt="Hibachi chef performing interactive cooking show at private event"
      category="Services & Guides"
      categorySlug="services"
      publishDate="January 2026"
      readTime="9 min read"
      faqs={faqs}
    >
      {/* Article Body */}
      <p>
        Imagine the sizzle of the hibachi grill, the whoosh of flames, and the laughter of your guests—all happening right in your backyard or private venue. The interactive energy. The entertainment. The incredible food. That's what Jinbeh's offsite hibachi catering brings to your celebration.
      </p>

      <p>
        For over 35 years, Jinbeh has been perfecting the art of hibachi entertainment and Japanese cuisine. Now, we bring that same expertise directly to you, transforming any venue into an unforgettable culinary experience. Whether you're celebrating a birthday, hosting a corporate event, or gathering family for a special dinner, offsite hibachi catering creates memories that last.
      </p>

      <h2>The Hibachi Experience: More Than Just Dinner</h2>

      <p>
        Hibachi is theater. It's entertainment. It's exceptional food. When you choose{" "}
        <Link href="/catering" className="text-accent-red hover:underline">
          Jinbeh's offsite hibachi catering
        </Link>
        , you're not just getting a meal—you're creating a complete sensory experience.
      </p>

      <h3>The Art of Tableside Cooking</h3>

      <p>
        The hibachi grill is the heart of the experience. A skilled hibachi chef prepares your meal right before your eyes, combining culinary artistry with interactive entertainment. It's not just cooking—it's a performance that engages all your senses.
      </p>

      <p>
        Your chef will showcase knife skills, create onion volcanoes with bursts of flame, toss shrimp into waiting mouths, and craft each dish with precision and flair. Jinbeh's chefs are masters at creating a lively, engaging atmosphere that transforms a simple dinner into a memorable occasion. Guests don't just eat; they participate in the show.
      </p>

      <div className="bg-warm-ivory/50 rounded-xl p-6 my-8 border-l-4 border-accent-red">
        <p className="italic text-charcoal/80 mb-2">
          "Jinbeh came to our backyard and created the most incredible event. The chef was entertaining, skilled, and made everyone feel included. Our guests still talk about it months later!"
        </p>
        <p className="text-sm text-charcoal/60">— Sarah M., Birthday Celebration Host</p>
      </div>

      <h3>Why Choose Hibachi for Your Event?</h3>

      <p>
        <strong>Entertainment Value:</strong> Guests are captivated from start to finish. The chef's performance is the evening's highlight.
      </p>

      <p>
        <strong>Interactive Experience:</strong> Unlike traditional catering where food appears from a hidden kitchen, hibachi dining makes guests active participants in the meal preparation.
      </p>

      <p>
        <strong>Customizable & Fresh:</strong> Each meal is prepared to order based on guest preferences, ensuring everyone gets exactly what they want.
      </p>

      <p>
        <strong>Memorable Moments:</strong> The combination of entertainment, exceptional food, and shared table experience creates lasting memories.
      </p>

      <h2>What's Included in Jinbeh Offsite Catering</h2>

      <h3>Comprehensive Service</h3>

      <p>
        When you book Jinbeh for your event, we handle everything. No stress. No hassle. Just exceptional results.
      </p>

      <p>
        <strong>Professional Hibachi Chef:</strong> Our chefs are skilled entertainers who combine exceptional culinary expertise with engaging showmanship. They read the room, adjust the entertainment level, and ensure everyone has a great time.
      </p>

      <p>
        <strong>All Equipment & Ingredients:</strong> We bring the hibachi grill, cooking utensils, ingredients, and serving equipment. Your venue only needs to provide the space and basic utilities.
      </p>

      <p>
        <strong>Customized Menu:</strong> Choose from our diverse offerings including various proteins, fresh vegetables, sushi, appetizers, and sides. We accommodate dietary restrictions and special requests.
      </p>

      <p>
        <strong>Full Setup & Breakdown:</strong> Our team arrives early to set up, cooks during your event, serves your guests, and handles complete cleanup. You enjoy the party while we manage everything else.
      </p>

      <p>
        <strong>Professional Service Staff:</strong> Depending on party size, we provide additional staff to manage beverages, clear plates, and ensure guests have everything they need.
      </p>

      <h2>Customized Hibachi Catering Menus</h2>

      <p>
        One of the greatest advantages of hiring Jinbeh for your event is menu flexibility. Our chefs create fully customized menus tailored to your preferences and dietary needs.
      </p>

      <h3>Protein Options</h3>

      <ul>
        <li>
          <strong>Hibachi Chicken:</strong> Lean, flavorful, and versatile
        </li>
        <li>
          <strong>Premium Steak:</strong> Filet mignon, ribeye, or NY strip. Explore our <Link href="/blog/best-steak-near-me" className="text-accent-red hover:underline font-semibold">steak guide</Link> for pairing options.
        </li>
        <li>
          <strong>Fresh Seafood:</strong> Shrimp, salmon, scallops
        </li>
        <li>
          <strong>Mixed Combinations:</strong> Combine proteins for variety
        </li>
        <li>
          <strong>Vegetarian Options:</strong> Tofu and vegetables for plant-based guests
        </li>
      </ul>

      <h3>Complete Menu Packages</h3>

      <p>
        <strong>Beni Hibachi:</strong> A delightful combination of meats and fresh vegetables cooked to perfection, showcasing authentic Japanese flavors.
      </p>

      <p>
        <strong>Sushi Selections:</strong> Fresh, expertly crafted sushi rolls paired with the hibachi experience. Learn about the different <Link href="/blog/types-of-sushi" className="text-accent-red hover:underline font-semibold">types of sushi</Link> we can feature at your event.
      </p>

      <p>
        <strong>Appetizers & Sides:</strong> Miso soup, edamame, gyoza, salads, fried rice, and noodle dishes.
      </p>

      <p>
        <strong>Holiday Menus:</strong> Specially curated dishes for festive occasions, designed to complement your celebration with seasonal flavors.
      </p>

      <p>
        During your initial consultation, discuss your vision with our team. We'll suggest menu combinations that provide variety, balance, and satisfaction for your specific guest count and event type.
      </p>

      <h2>Jinbeh Hibachi Catering for Every Occasion</h2>

      <h3>Birthday Celebrations</h3>

      <p>
        Make birthdays spectacular with an interactive hibachi experience. Our chefs excel at making the birthday person feel special while entertaining all guests. It's a celebration they'll never forget.
      </p>

      <p>
        Discover our <Link href="/catering" className="text-accent-red hover:underline font-semibold">catering services</Link> for comprehensive package details and customization options.
      </p>

      <h3>Corporate Events & Team Building</h3>

      <p>
        Impress clients, colleagues, and team members with an event that stands out. Hibachi catering provides professional dining with memorable entertainment. It's perfect for client appreciation, team celebrations, or executive dinners.
      </p>

      <h3>Family Gatherings & Reunions</h3>

      <p>
        Whether it's a backyard family dinner or annual reunion, hibachi brings people together. The shared table experience and interactive nature of hibachi dining creates conversation and connection among guests.
      </p>

      <h3>Weddings & Receptions</h3>

      <p>
        Create a unique wedding reception or rehearsal dinner. Hibachi catering provides both entertainment and exceptional cuisine, leaving a lasting impression on your guests.
      </p>

      <h3>Private Parties & Special Events</h3>

      <p>
        Anniversaries, engagements, holidays, or any celebration—Jinbeh adapts our service to match your event's tone and style.
      </p>

      <h2>How Offsite Hibachi Catering Works</h2>

      <h3>The Planning Process</h3>

      <p>
        <strong>Step 1: Initial Consultation</strong>
      </p>

      <p>
        Contact Jinbeh to discuss your event. Tell us about your vision, guest count, date, preferred location, and any special requests or dietary needs. We'll outline options and answer questions.
      </p>

      <p>
        <strong>Step 2: Menu Selection</strong>
      </p>

      <p>
        Work with our team to design a customized menu. We'll suggest combinations, discuss prices, and ensure the menu perfectly fits your event vision and budget.
      </p>

      <p>
        <strong>Step 3: Booking & Deposit</strong>
      </p>

      <p>
        Once you're satisfied with the plan, we'll book your date with a deposit and confirm all details including time, location, guest count, and final menu selections.
      </p>

      <p>
        <strong>Step 4: Pre-Event Confirmation</strong>
      </p>

      <p>
        Days before your event, we'll confirm all details, discuss setup logistics with your venue, and ensure you know exactly what to expect.
      </p>

      <p>
        <strong>Step 5: Event Day Excellence</strong>
      </p>

      <p>
        Our team arrives ahead of schedule to set up. The hibachi chef prepares each course while your guests enjoy the entertainment. After the meal, we handle cleanup and leave your venue pristine.
      </p>

      <h3>Venue Requirements</h3>

      <p>
        Jinbeh can set up hibachi at various venues. Minimal requirements include:
      </p>

      <ul>
        <li>Safe, level surface for hibachi grill and chef</li>
        <li>Nearby access to electricity (if using electric hibachi)</li>
        <li>Access to water for cleaning and ice</li>
        <li>Basic seating around the grill (we can discuss specific configurations)</li>
        <li>Permission from venue owner for cooking on premises</li>
      </ul>

      <p>
        Whether it's your backyard, a private park, a rented event space, or a rooftop venue, we'll work with you to ensure a successful setup.
      </p>

      <h2>Service Areas & Availability</h2>

      <h3>Where Jinbeh Services</h3>

      <p>
        Jinbeh's offsite hibachi catering services the Dallas-Fort Worth area, including:
      </p>

      <ul>
        <li>Frisco</li>
        <li>Lewisville</li>
        <li>Dallas (surrounding areas)</li>
        <li>Surrounding DFW communities</li>
      </ul>

      <p>
        We can discuss specific locations and any travel considerations during your consultation.
      </p>

      <h3>Booking in Advance</h3>

      <p>
        We recommend booking 2-4 weeks in advance to secure your preferred date. Weekend dates and holiday periods often fill quickly, so earlier booking is appreciated. Contact us to check availability and discuss your event timeline.
      </p>

      <h2>Why Choose Jinbeh for Your Offsite Catering?</h2>

      <h3>Experience & Expertise</h3>

      <p>
        For over 35 years, Jinbeh has been perfecting Japanese cuisine and hibachi entertainment. Our chefs are trained professionals who combine culinary skill with genuine showmanship.
      </p>

      <h3>Authentic Japanese Cuisine</h3>

      <p>
        We use only fresh, high-quality ingredients. Our preparation methods honor traditional Japanese techniques while creating dishes that excite modern palates.
      </p>

      <h3>Professional & Reliable</h3>

      <p>
        From initial consultation through event execution, we're dedicated to exceeding expectations. Our team is professional, courteous, and detail-oriented.
      </p>

      <h3>Hassle-Free Experience</h3>

      <p>
        You focus on enjoying your event. We handle all logistics, setup, cooking, service, and cleanup. It's stress-free celebration.
      </p>

      <h3>Customizable & Flexible</h3>

      <p>
        Every event is unique. We customize menus, accommodate dietary needs, and adapt our service to match your event's style and vision.
      </p>

      <div className="bg-soft-gold/20 rounded-xl p-6 my-8">
        <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
          The Jinbeh Offsite Hibachi Difference
        </h3>
        <ul className="space-y-2 text-charcoal/80">
          <li>✓ Entertaining, skilled hibachi chefs</li>
          <li>✓ Fresh, never-frozen ingredients</li>
          <li>✓ Fully customizable menus</li>
          <li>✓ Complete equipment & setup included</li>
          <li>✓ Professional service staff</li>
          <li>✓ Full cleanup after event</li>
          <li>✓ Dietary accommodations available</li>
          <li>✓ Family-owned since 1988</li>
        </ul>
      </div>

      <h2>Getting Started</h2>

      <p>
        Ready to bring hibachi entertainment and exceptional Japanese cuisine to your next celebration? Contact Jinbeh today to start planning.
      </p>

      <p>
        <strong>Call us:</strong>
      </p>

      <ul>
        <li>
          Frisco:{" "}
          <Link href="tel:2146191200" className="text-accent-red hover:underline">
            (214) 619-1200
          </Link>
        </li>
        <li>
          Lewisville:{" "}
          <Link href="tel:2144882224" className="text-accent-red hover:underline">
            (214) 488-2224
          </Link>
        </li>
      </ul>

      <p>
        <strong>Or visit us in person:</strong>
      </p>

      <ul>
        <li>
          <strong>Frisco Location:</strong> <Link href="/locations/frisco" className="text-accent-red hover:underline">Visit Frisco</Link>
        </li>
        <li>
          <strong>Lewisville Location:</strong> <Link href="/locations/lewisville" className="text-accent-red hover:underline">Visit Lewisville</Link>
        </li>
      </ul>

      <p>
        <strong>Online Inquiry:</strong>{" "}
        <Link href="/catering" className="text-accent-red hover:underline">
          Submit an offsite catering inquiry
        </Link>
      </p>

      <p>
        Tell our team about your event, and we'll create an unforgettable hibachi experience that your guests will remember for years to come.
      </p>

      <RelatedArticles currentSlug={slug} />
    </ArticleLayout>
  );
}
