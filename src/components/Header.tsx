"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface HeaderProps {
  location?: "frisco" | "lewisville";
}

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export default function Header({ location }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu with Escape key and lock body scroll
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    }

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [mobileMenuOpen]);

  const loc = location || "frisco";

  const navItems: NavItem[] = [
    {
      label: "Locations",
      href: "#",
      dropdown: [
        { label: "Frisco", href: "/frisco", description: "Near Stonebriar Centre" },
        { label: "Lewisville", href: "/lewisville", description: "Off I-35E" },
      ],
    },
    {
      label: "Menu",
      href: `/${loc}/menu`,
      dropdown: [
        { label: "Hibachi Menu", href: `/${loc}/menu#hibachi`, description: "Teppanyaki grilled tableside" },
        { label: "Sushi Menu", href: `/${loc}/menu#sushi`, description: "Fresh rolls & nigiri" },
        { label: "Lunch Specials", href: `/${loc}/menu#lunch`, description: "Weekday specials" },
        { label: "Drinks & Sake", href: `/${loc}/menu#drinks`, description: "Full bar & sake selection" },
      ],
    },
    {
      label: "Dining",
      href: "#",
      dropdown: [
        { label: "Happy Hour", href: "/happy-hour", description: "Daily specials at the bar" },
        { label: "Lunch Specials", href: "/lunch-specials", description: "Weekday deals" },
        { label: "Private Dining", href: "/private-dining", description: "Groups & events" },
        { label: "Catering", href: "/catering", description: "Bring Jinbeh to you" },
      ],
    },
    {
      label: "Celebrations",
      href: "/celebrations",
      dropdown: [
        { label: "All Celebrations", href: "/celebrations", description: "Browse all events" },
        { label: "Birthday Parties", href: "/celebrations/birthday", description: "Make it memorable" },
        { label: "Anniversary Dinners", href: "/celebrations/anniversary", description: "Romantic experiences" },
        { label: "Graduation", href: "/celebrations/graduation", description: "Celebrate achievements" },
        { label: "Corporate Events", href: "/celebrations/corporate-events", description: "Team building & parties" },
        { label: "Holiday Parties", href: "/celebrations/holiday-parties", description: "Christmas & more" },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
      dropdown: [
        { label: "All Articles", href: "/blog", description: "Latest from Jinbeh" },
        { label: "🏆 Best Of", href: "/blog?category=best-of", description: "Top picks & recommendations" },
        { label: "🎉 Celebrations", href: "/blog?category=celebrations", description: "Party ideas & guides" },
        { label: "🍣 Japanese Cuisine", href: "/blog?category=cuisine", description: "Sushi, hibachi & more" },
        { label: "📍 Local Guides", href: "/blog?category=local-guides", description: "Frisco, Lewisville & DFW" },
        { label: "🍶 Beverages", href: "/blog?category=beverages", description: "Sake, whiskey & cocktails" },
        { label: "💚 Health & Nutrition", href: "/blog?category=health", description: "Calorie guides & tips" },
      ],
    },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-warm-ivory-dark shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/logos/JinbehLogo.png"
              alt="Jinbeh Japanese Restaurant"
              width={160}
              height={70}
              className="h-12 w-auto transition-transform group-hover:scale-105"
              priority
            />
            {location && (
              <span className="hidden sm:block ml-3 text-sm text-cedar-brown capitalize font-medium border-l border-cedar-brown/30 pl-3">
                {location}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="menu"
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg hover:text-accent-red hover:bg-warm-ivory/50 transition-all font-medium ${
                        activeDropdown === item.label ? "text-accent-red bg-warm-ivory/50" :
                        (item.label === "Locations" && location) ? "text-accent-red" :
                        "text-charcoal"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.label && (
                      <div
                        role="menu"
                        aria-label={`${item.label} submenu`}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-warm-ivory-dark overflow-visible z-[999]"
                        style={{ opacity: 1, transform: 'translateY(0)', pointerEvents: 'auto' }}>
                        <div className="p-2">
                          {item.dropdown.map((subItem) => {
                            // Check if this is the current location
                            const isActiveLocation = item.label === "Locations" &&
                              location &&
                              subItem.label.toLowerCase() === location;

                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className={`block px-4 py-3 rounded-lg transition-colors group ${
                                  isActiveLocation
                                    ? "bg-accent-red/10 border-l-4 border-accent-red"
                                    : "hover:bg-warm-ivory"
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className={`font-medium transition-colors ${
                                  isActiveLocation
                                    ? "text-accent-red"
                                    : "text-charcoal group-hover:text-accent-red"
                                }`}>
                                  {subItem.label}
                                  {isActiveLocation && <span className="ml-2 text-xs">(You are here)</span>}
                                </span>
                                {subItem.description && (
                                  <span className="block text-sm text-charcoal/80 mt-0.5">
                                    {subItem.description}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-charcoal hover:text-accent-red hover:bg-warm-ivory/50 transition-all font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone Number - Always visible */}
            {location ? (
              <a
                href={location === "lewisville" ? "tel:2144882224" : "tel:2146191200"}
                className="inline-flex items-center gap-2 px-4 py-2 text-charcoal hover:text-accent-red transition-colors font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {location === "lewisville" ? "(214) 488-2224" : "(214) 619-1200"}
              </a>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "phone" ? null : "phone")}
                  className="inline-flex items-center gap-2 px-4 py-2 text-charcoal hover:text-accent-red transition-colors font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                  <svg className={`w-3 h-3 transition-transform ${activeDropdown === "phone" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === "phone" && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-warm-ivory-dark overflow-visible z-[999]"
                       style={{ opacity: 1, transform: 'translateY(0)', pointerEvents: 'auto' }}>
                    <div className="p-2">
                      <a
                        href="tel:2146191200"
                        className="block px-4 py-3 rounded-lg hover:bg-warm-ivory transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="font-medium text-charcoal group-hover:text-accent-red">Frisco</span>
                        <span className="block text-sm text-charcoal/80">(214) 619-1200</span>
                      </a>
                      <a
                        href="tel:2144882224"
                        className="block px-4 py-3 rounded-lg hover:bg-warm-ivory transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="font-medium text-charcoal group-hover:text-accent-red">Lewisville</span>
                        <span className="block text-sm text-charcoal/80">(214) 488-2224</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            <Link
              href={`/${loc}#reserve`}
              className="btn btn-primary btn-shimmer"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-warm-ivory transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-charcoal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-warm-ivory-dark animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-2">
              {/* Location Switcher Mobile */}
              <div className="flex items-center gap-2 px-4 py-3 bg-warm-ivory rounded-lg mb-4">
                <span className="text-sm text-charcoal/80 font-medium">Location:</span>
                <Link
                  href="/frisco"
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${location === "frisco"
                      ? "bg-deep-indigo text-white shadow-md"
                      : "bg-white text-charcoal hover:bg-warm-ivory-dark"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Frisco
                </Link>
                <Link
                  href="/lewisville"
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${location === "lewisville"
                      ? "bg-deep-indigo text-white shadow-md"
                      : "bg-white text-charcoal hover:bg-warm-ivory-dark"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Lewisville
                </Link>
              </div>

              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div className="mb-2">
                      <span className="px-4 py-2 text-sm font-semibold text-charcoal/70 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <div className="mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-3 text-charcoal hover:text-accent-red hover:bg-warm-ivory/50 rounded-lg transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-charcoal hover:text-accent-red hover:bg-warm-ivory/50 rounded-lg transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="mt-4 space-y-3 px-4">
                {/* Phone Numbers - Always visible */}
                {location ? (
                  <a
                    href={location === "lewisville" ? "tel:2144882224" : "tel:2146191200"}
                    className="flex items-center justify-center gap-2 w-full py-3 border-2 border-charcoal text-charcoal rounded-xl font-semibold hover:bg-charcoal hover:text-white transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call {location === "lewisville" ? "Lewisville" : "Frisco"}: {location === "lewisville" ? "(214) 488-2224" : "(214) 619-1200"}
                  </a>
                ) : (
                  <div className="flex gap-2">
                    <a
                      href="tel:2146191200"
                      className="flex-1 flex flex-col items-center justify-center py-3 border-2 border-charcoal text-charcoal rounded-xl font-semibold hover:bg-charcoal hover:text-white transition-all text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Frisco
                    </a>
                    <a
                      href="tel:2144882224"
                      className="flex-1 flex flex-col items-center justify-center py-3 border-2 border-charcoal text-charcoal rounded-xl font-semibold hover:bg-charcoal hover:text-white transition-all text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <svg className="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Lewisville
                    </a>
                  </div>
                )}
                <Link
                  href={`/${loc}#reserve`}
                  className="block w-full btn btn-primary btn-shimmer text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reserve a Table
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
