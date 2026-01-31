import Link from "next/link";
import Image from "next/image";
import locations from "@/data/locations.json";
import blogData from "@/data/blog-posts.json";

export default function Footer() {
  const { frisco, lewisville } = locations.locations;
  const { business } = locations;
  const currentYear = new Date().getFullYear();

  // Get featured articles for the footer
  const featuredPosts = blogData.posts
    .filter((post) => post.featured)
    .slice(0, 4);

  // Blog categories from actual data
  const blogCategories = blogData.categories;

  return (
    <footer className="bg-charcoal text-warm-ivory">
      {/* Upper Footer - Comprehensive Navigation */}
      <div className="container mx-auto px-6 py-12 border-b border-warm-ivory/10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Explore Menu */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4 text-soft-gold uppercase tracking-wider">
              Explore Menu
            </h3>
            <nav className="space-y-2 text-sm">
              <Link href="/frisco/hibachi" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Hibachi Grill
              </Link>
              <Link href="/frisco/sushi-rolls" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Sushi Rolls
              </Link>
              <Link href="/frisco/sashimi" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Sashimi
              </Link>
              <Link href="/frisco/appetizers" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Appetizers
              </Link>
              <Link href="/frisco/cocktails" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Cocktails & Sake
              </Link>
              <Link href="/happy-hour" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Happy Hour
              </Link>
              <Link href="/lunch-specials" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Lunch Specials
              </Link>
            </nav>
          </div>

          {/* Celebrations */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4 text-soft-gold uppercase tracking-wider">
              Celebrations
            </h3>
            <nav className="space-y-2 text-sm">
              <Link href="/celebrations/birthday" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Birthday Parties
              </Link>
              <Link href="/celebrations/anniversary" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Anniversary Dinners
              </Link>
              <Link href="/celebrations/graduation" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Graduation
              </Link>
              <Link href="/celebrations/corporate-events" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Corporate Events
              </Link>
              <Link href="/celebrations/date-night" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Date Night
              </Link>
              <Link href="/celebrations/holiday-parties" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Holiday Parties
              </Link>
              <Link href="/celebrations" className="block text-warm-ivory/70 hover:text-accent-red transition-colors font-medium">
                View All →
              </Link>
            </nav>
          </div>

          {/* Blog Categories */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4 text-soft-gold uppercase tracking-wider">
              Blog & Guides
            </h3>
            <nav className="space-y-2 text-sm">
              {blogCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/blog?category=${cat.id}`}
                  className="block text-warm-ivory/70 hover:text-accent-red transition-colors"
                >
                  {cat.icon} {cat.name}
                </Link>
              ))}
              <Link href="/blog" className="block text-warm-ivory/70 hover:text-accent-red transition-colors font-medium">
                All Articles →
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4 text-soft-gold uppercase tracking-wider">
              Services
            </h3>
            <nav className="space-y-2 text-sm">
              <Link href="/catering" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Catering
              </Link>
              <Link href="/catering/corporate" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Corporate Catering
              </Link>
              <Link href="/catering/wedding" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Wedding Catering
              </Link>
              <Link href="/private-dining" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Private Dining
              </Link>
              <Link href="/gift-cards" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Gift Cards
              </Link>
              <Link href="/takeout" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Order Takeout
              </Link>
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4 text-soft-gold uppercase tracking-wider">
              Service Areas
            </h3>
            <nav className="space-y-2 text-sm">
              <Link href="/frisco" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Frisco
              </Link>
              <Link href="/lewisville" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Lewisville
              </Link>
              <Link href="/nearby/plano" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Plano
              </Link>
              <Link href="/nearby/mckinney" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                McKinney
              </Link>
              <Link href="/nearby/the-colony" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                The Colony
              </Link>
              <Link href="/nearby/allen" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Allen
              </Link>
              <Link href="/nearby/flower-mound" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Flower Mound
              </Link>
            </nav>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-heading text-sm font-semibold mb-4 text-soft-gold uppercase tracking-wider">
              Information
            </h3>
            <nav className="space-y-2 text-sm">
              <Link href="/about" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Contact
              </Link>
              <Link href="/faq" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                FAQ
              </Link>
              <Link href="/reservations" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Reservations
              </Link>
              <Link href="/menu" className="block text-warm-ivory/70 hover:text-accent-red transition-colors">
                Full Menu
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Popular Articles Section */}
      <div className="container mx-auto px-6 py-8 border-b border-warm-ivory/10">
        <h3 className="font-heading text-sm font-semibold mb-6 text-soft-gold uppercase tracking-wider">
          Popular Articles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-warm-ivory/5 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-warm-ivory/90 group-hover:text-accent-red transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-warm-ivory/50 mt-1">
                  {post.readTime} min read
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link
            href="/blog"
            className="text-sm text-soft-gold hover:text-warm-ivory transition-colors"
          >
            Browse all articles →
          </Link>
        </div>
      </div>

      {/* Location Details */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logos/jinbeh-logo-dark.png"
                alt="Jinbeh Japanese Restaurant"
                width={160}
                height={70}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-warm-ivory/70 text-sm italic mb-4">
              {business.tagline}
            </p>
            <p className="text-warm-ivory/80 mb-4 text-sm">
              {business.heritage}
            </p>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${business.social.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-warm-ivory/10 rounded-full flex items-center justify-center hover:bg-accent-red transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={`https://facebook.com/${business.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-warm-ivory/10 rounded-full flex items-center justify-center hover:bg-accent-red transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/jinbeh-japanese-restaurant-frisco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-warm-ivory/10 rounded-full flex items-center justify-center hover:bg-accent-red transition-colors"
                aria-label="Yelp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.965 5.835a1.073 1.073 0 0 1-.932 1.326 9.265 9.265 0 0 1-4.023-.646 1.073 1.073 0 0 1-.373-1.655l3.004-3.963c.601-.79 1.81-.39 1.827.612l.497 4.326zM12.4 8.32V3.073A1.073 1.073 0 0 0 11.1 2.05a9.318 9.318 0 0 0-3.873 2.108 1.072 1.072 0 0 0 .14 1.694l4.074 2.948c.82.593 1.96-.131 1.96-1.18l-.001-.3zM5.78 9.61a1.073 1.073 0 0 0 .34 1.613l4.4 2.428c.88.487 1.86-.392 1.476-1.326L9.937 7.47a1.072 1.072 0 0 0-1.6-.453 9.196 9.196 0 0 0-2.557 2.593zm.676 6.747a9.265 9.265 0 0 0 1.593 3.728 1.073 1.073 0 0 0 1.643.104l3.386-3.554c.673-.707.147-1.857-.795-1.736l-4.979.663a1.073 1.073 0 0 0-.848 1.295z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Frisco */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-soft-gold whitespace-nowrap">
              Frisco Location
            </h3>
            <address className="not-italic text-warm-ivory/80 space-y-1 text-sm">
              <p>{frisco.address.street}</p>
              <p>{frisco.address.suite}</p>
              <p>
                {frisco.address.city}, {frisco.address.state} {frisco.address.zip}
              </p>
            </address>
            <a
              href={`tel:${frisco.phoneClean}`}
              className="inline-flex items-center gap-2 mt-4 bg-accent-red hover:bg-accent-red-hover text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {frisco.phone}
            </a>
            <div className="mt-4 space-y-1 text-xs text-warm-ivory/60">
              <p>Lunch: Mon-Fri {frisco.hours.lunch.weekday.display}</p>
              <p>Weekend: {frisco.hours.lunch.weekend.display}</p>
              <p>Dinner: Sun-Thu {frisco.hours.dinner.sunThurs.display}</p>
              <p>Fri-Sat {frisco.hours.dinner.friSat.display}</p>
            </div>
            <Link
              href="/frisco"
              className="inline-block mt-3 text-sm text-soft-gold hover:text-warm-ivory transition-colors"
            >
              View Frisco Page →
            </Link>
          </div>

          {/* Lewisville */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-soft-gold whitespace-nowrap">
              Lewisville Location
            </h3>
            <address className="not-italic text-warm-ivory/80 space-y-1 text-sm">
              <p>{lewisville.address.street}</p>
              <p>{lewisville.address.suite}</p>
              <p>
                {lewisville.address.city}, {lewisville.address.state}{" "}
                {lewisville.address.zip}
              </p>
            </address>
            <a
              href={`tel:${lewisville.phoneClean}`}
              className="inline-flex items-center gap-2 mt-4 bg-accent-red hover:bg-accent-red-hover text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {lewisville.phone}
            </a>
            <div className="mt-4 space-y-1 text-xs text-warm-ivory/60">
              <p>Lunch: Mon-Fri {lewisville.hours.lunch.weekday.display}</p>
              <p>Weekend: {lewisville.hours.lunch.weekend.display}</p>
              <p>Dinner: Sun-Thu {lewisville.hours.dinner.sunThurs.display}</p>
              <p>Fri-Sat {lewisville.hours.dinner.friSat.display}</p>
            </div>
            <Link
              href="/lewisville"
              className="inline-block mt-3 text-sm text-soft-gold hover:text-warm-ivory transition-colors"
            >
              View Lewisville Page →
            </Link>
          </div>

          {/* More Service Areas */}
          <div>
            <h3 className="font-heading text-base font-semibold mb-4 text-soft-gold whitespace-nowrap">
              Also Serving
            </h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <Link href="/nearby/carrollton" className="text-warm-ivory/70 hover:text-accent-red transition-colors">
                Carrollton
              </Link>
              <Link href="/nearby/coppell" className="text-warm-ivory/70 hover:text-accent-red transition-colors">
                Coppell
              </Link>
              <Link href="/nearby/denton" className="text-warm-ivory/70 hover:text-accent-red transition-colors">
                Denton
              </Link>
              <Link href="/nearby/grapevine" className="text-warm-ivory/70 hover:text-accent-red transition-colors">
                Grapevine
              </Link>
              <Link href="/nearby/highland-village" className="text-warm-ivory/70 hover:text-accent-red transition-colors">
                Highland Village
              </Link>
              <Link href="/nearby/little-elm" className="text-warm-ivory/70 hover:text-accent-red transition-colors">
                Little Elm
              </Link>
              <Link href="/nearby/richardson" className="text-warm-ivory/70 hover:text-accent-red transition-colors">
                Richardson
              </Link>
            </nav>
            <p className="mt-4 text-xs text-warm-ivory/50">
              Conveniently located for all of North Texas
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-ivory/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-warm-ivory/70">
            <p>
              © {currentYear} Jinbeh Japanese Restaurant. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-warm-ivory transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-warm-ivory transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-warm-ivory transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/sitemap.xml"
                className="hover:text-warm-ivory transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
