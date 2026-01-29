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
        { label: "Private Dining", href: `/${loc}/private-dining`, description: "Groups & events" },
        { label: "Catering", href: "/catering", description: "Bring Jinbeh to you" },
      ],
    },
    {
      label: "Celebrations",
      href: "/celebrations",
      dropdown: [
        { label: "Birthday Parties", href: "/celebrations/birthday", description: "Make it memorable" },
        { label: "Anniversary Dinners", href: "/celebrations/anniversary", description: "Romantic experiences" },
        { label: "Group Events", href: "/celebrations/groups", description: "Corporate & family gatherings" },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
      dropdown: [
        { label: "All Articles", href: "/blog", description: "Latest from Jinbeh" },
        { label: "🎉 Celebrations", href: "/blog?category=celebrations", description: "Party ideas & guides" },
        { label: "📍 Locations", href: "/blog?category=locations", description: "Frisco, Lewisville & DFW" },
        { label: "🍣 Cuisine", href: "/blog?category=cuisine", description: "Sushi, hibachi & more" },
        { label: "🍶 Beverages", href: "/blog?category=beverages", description: "Sake, whiskey & cocktails" },
        { label: "🍱 Catering", href: "/blog?category=catering", description: "Events & private dining" },
        { label: "✨ Tips & Guides", href: "/blog?category=tips-guides", description: "Happy hour & more" },
      ],
    },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-warm-ivory-dark shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logos/jinbehlogo-black.svg"
              alt="Jinbeh Japanese Restaurant"
              width={48}
              height={48}
              className="h-12 w-auto transition-transform group-hover:scale-105"
              priority
            />
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-semibold text-charcoal">
                JINBEH
              </span>
              {location && (
                <span className="block text-sm text-cedar-brown capitalize font-medium">
                  {location}
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-charcoal hover:text-accent-red hover:bg-warm-ivory/50 transition-all font-medium ${activeDropdown === item.label ? "text-accent-red bg-warm-ivory/50" : ""
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
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-warm-ivory-dark overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-3 rounded-lg hover:bg-warm-ivory transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className="font-medium text-charcoal group-hover:text-accent-red transition-colors">
                                {subItem.label}
                              </span>
                              {subItem.description && (
                                <span className="block text-sm text-charcoal/60 mt-0.5">
                                  {subItem.description}
                                </span>
                              )}
                            </Link>
                          ))}
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
            {/* Order Online */}
            <a
              href={location === "lewisville"
                ? "https://www.grubhub.com/restaurant/jinbeh-japanese-restaurant-lewisville-2440-s-stemmons-fwy-a-lewisville/2135139"
                : "https://www.grubhub.com/restaurant/jinbeh-japanese-restaurant-frisco-2693-preston-rd-frisco/2134962"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-charcoal hover:text-accent-red transition-colors font-medium"
            >
              Order Online
            </a>

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
                <span className="text-sm text-charcoal/70 font-medium">Location:</span>
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
                      <span className="px-4 py-2 text-sm font-semibold text-charcoal/50 uppercase tracking-wider">
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
                <a
                  href={location === "lewisville"
                    ? "https://www.grubhub.com/restaurant/jinbeh-japanese-restaurant-lewisville-2440-s-stemmons-fwy-a-lewisville/2135139"
                    : "https://www.grubhub.com/restaurant/jinbeh-japanese-restaurant-frisco-2693-preston-rd-frisco/2134962"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 border-2 border-charcoal text-charcoal rounded-xl font-semibold hover:bg-charcoal hover:text-white transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order Online
                </a>
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
