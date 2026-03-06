"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import locationsData from "@/data/locations.json";
import { getNavItems } from "@/data/navigation";

interface HeaderProps {
  location?: "frisco" | "lewisville";
}



export default function Header({ location }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showReserveModal, setShowReserveModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<"frisco" | "lewisville">(location || "frisco");
  const dropdownRef = useRef<HTMLElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | HTMLDivElement | null>>({});
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number; right?: number } | null>(null);
  const [portalReady, setPortalReady] = useState(false);

  // Portal readiness check
  useEffect(() => {
    setPortalReady(true);
  }, []);

  // Update dropdown position when activeDropdown changes
  useEffect(() => {
    if (activeDropdown && buttonRefs.current[activeDropdown]) {
      const rect = buttonRefs.current[activeDropdown]!.getBoundingClientRect();
      setDropdownPos({ top: rect.bottom + 6, left: rect.left, right: undefined });
    } else {
      setDropdownPos(null);
    }
  }, [activeDropdown]);

  // Track scroll position for enhanced glass effect
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      // Check both the header nav AND the portal container (which renders at document.body level)
      if (
        dropdownRef.current && !dropdownRef.current.contains(target) &&
        (!portalRef.current || !portalRef.current.contains(target))
      ) {
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
        setShowReserveModal(false);
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

  // Desktop hover handlers for dropdowns
  const handleMouseEnter = useCallback((label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  }, []);

  // Cleanup hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Sync selectedLocation with prop
  useEffect(() => {
    if (location) setSelectedLocation(location);
  }, [location]);

  const loc = selectedLocation;

  // Handle reservation click - opens OpenTable for the correct location
  const handleReserveClick = useCallback((targetLocation: "frisco" | "lewisville") => {
    const rid = locationsData.locations[targetLocation].reservation.rid;
    const openTableUrl = `https://www.opentable.com/booking/restref/availability?rid=${rid}&lang=en-US`;
    window.open(openTableUrl, '_blank', 'noopener,noreferrer');
    setShowReserveModal(false);
  }, []);

  const navItems = getNavItems(loc);

  return (
    <>
      <header className="sticky top-0 z-[9999] overflow-visible">
        {/* Blur background — z-[-1] ensures it sits behind all header children including dropdowns */}
        <div
          className={`absolute inset-0 z-[-1] transition-all duration-300 ${scrolled
            ? "bg-charcoal/90 backdrop-blur-xl shadow-lg border-b border-white/10"
            : "bg-charcoal/30 backdrop-blur-md border-b border-white/5"
            }`}
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 py-1">
            {/* Logo — white SVG on transparent bg for seamless dark nav */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <Image
                src="/images/logos/jinbehlogo-white.svg"
                alt="Jinbeh Japanese Restaurant - Home"
                width={44}
                height={38}
                className="h-9 w-auto transition-transform group-hover:scale-105 drop-shadow-lg"
                priority
              />
              <span className="ml-2 text-white font-heading font-bold text-lg tracking-wide [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)] hidden sm:inline">JINBEH</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-0.5" ref={dropdownRef} aria-label="Main navigation">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative flex items-center"
                  onMouseEnter={() => (item.dropdown || item.megaMenu) && handleMouseEnter(item.label)}
                  onMouseLeave={() => (item.dropdown || item.megaMenu) && handleMouseLeave()}
                >
                  {/* Visual separator before About */}
                  {item.label === "About" && (
                    <span className="text-white/20 mx-2 select-none text-lg" aria-hidden="true">·</span>
                  )}
                  {item.megaMenu ? (
                    <>
                      <button
                        ref={(el) => { buttonRefs.current[item.label] = el; }}
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        aria-expanded={activeDropdown === item.label}
                        aria-label={activeDropdown === item.label ? `Close ${item.label} menu` : `Open ${item.label} menu`}
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-soft-gold hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 text-sm font-semibold tracking-wide [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)] ${activeDropdown === item.label ? "text-soft-gold bg-white/10" : "text-white"}`}
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </>
                  ) : item.dropdown ? (
                    <>
                      <button
                        ref={(el) => { buttonRefs.current[item.label] = el; }}
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        aria-expanded={activeDropdown === item.label}
                        aria-label={activeDropdown === item.label ? `Close ${item.label} menu` : `Open ${item.label} menu`}
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:text-soft-gold hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 text-sm font-semibold tracking-wide [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)] ${activeDropdown === item.label ? "text-soft-gold bg-white/10" :
                          (item.label === "Locations" && location) ? "text-soft-gold" :
                            "text-white"
                          }`}
                      >
                        {item.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-block px-3 md:mx-1 py-2 rounded-lg text-white hover:text-soft-gold hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 text-sm font-semibold tracking-wide [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons - Desktop */}
            <div className="hidden xl:flex items-center gap-2">
              {/* Phone */}
              {location ? (
                <a
                  href={location === "lewisville" ? "tel:2144882224" : "tel:2146191200"}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-white hover:text-soft-gold transition-colors text-sm font-medium [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]"
                  aria-label={`Call Jinbeh ${location === "lewisville" ? "Lewisville" : "Frisco"}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="hidden 2xl:inline">{location === "lewisville" ? "(214) 488-2224" : "(214) 619-1200"}</span>
                </a>
              ) : (
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("phone")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    ref={(el) => { buttonRefs.current["phone"] = el; }}
                    onClick={() => setActiveDropdown(activeDropdown === "phone" ? null : "phone")}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-white hover:text-soft-gold transition-colors text-sm font-medium [text-shadow:_0_1px_3px_rgb(0_0_0_/_60%)]"
                    aria-label="Call us - choose location"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                    <svg className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === "phone" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Reserve Button - Location specific or dropdown */}
              {location ? (
                <button
                  onClick={() => handleReserveClick(location)}
                  className="btn-shimmer inline-flex items-center gap-2 bg-accent-red text-white hover:bg-accent-red/90 px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
                  aria-label={`Reserve a table at Jinbeh ${location === "lewisville" ? "Lewisville" : "Frisco"}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Reserve {location === "lewisville" ? "Lewisville" : "Frisco"}
                </button>
              ) : (
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter("reserve")}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    ref={(el) => { buttonRefs.current["reserve"] = el; }}
                    onClick={() => setActiveDropdown(activeDropdown === "reserve" ? null : "reserve")}
                    className="btn-shimmer inline-flex items-center gap-1.5 bg-accent-red text-white hover:bg-accent-red/90 px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 relative overflow-hidden"
                    aria-label="Reserve a table"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Reserve
                    <svg className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === "reserve" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6 text-white drop-shadow-md"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`xl:hidden border-t border-white/10 transition-all duration-300 ease-in-out ${mobileMenuOpen
              ? "max-h-[85vh] opacity-100 py-6 overflow-y-auto"
              : "max-h-0 opacity-0 overflow-hidden"
              }`}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {/* Location Switcher Mobile */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-xl mb-4">
                <span className="text-sm text-white/80 font-medium mr-auto">Location:</span>
                <button
                  onClick={() => setSelectedLocation("frisco")}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedLocation === "frisco"
                    ? "bg-accent-red text-white shadow-md"
                    : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                >
                  Frisco
                </button>
                <button
                  onClick={() => setSelectedLocation("lewisville")}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedLocation === "lewisville"
                    ? "bg-accent-red text-white shadow-md"
                    : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                >
                  Lewisville
                </button>
              </div>

              {navItems.map((item) => (
                <div key={item.label}>
                  {item.megaMenu ? (
                    <div className="mb-2">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-bold text-white/90 uppercase tracking-wider hover:text-soft-gold transition-colors"
                        aria-expanded={activeDropdown === item.label}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`mt-1 pl-2 border-l-2 border-soft-gold/30 ml-4 transition-all duration-200 ${activeDropdown === item.label
                          ? "max-h-[1000px] opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                      >
                        {item.megaMenu.map((section) => (
                          <div key={section.title} className="mb-3">
                            <span className="block px-4 py-1.5 text-xs font-bold text-soft-gold/80 uppercase tracking-wider">
                              {section.icon} {section.title}
                            </span>
                            {section.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="block px-4 py-2 text-white hover:text-soft-gold hover:bg-white/10 rounded-lg transition-colors font-medium text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link
                          href="/blog"
                          className="block px-4 py-3 text-soft-gold hover:text-white font-semibold text-sm border-t border-white/10 mt-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All Articles &rarr;
                        </Link>
                      </div>
                    </div>
                  ) : item.dropdown ? (
                    <div className="mb-2">
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-bold text-white/90 uppercase tracking-wider hover:text-soft-gold transition-colors"
                        aria-expanded={activeDropdown === item.label}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`mt-1 space-y-0.5 pl-2 border-l-2 border-soft-gold/30 ml-4 transition-all duration-200 ${activeDropdown === item.label
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-3 text-white hover:text-soft-gold hover:bg-white/10 rounded-lg transition-colors font-medium text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                            {subItem.description && (
                              <span className="block text-xs text-white/50 mt-0.5">{subItem.description}</span>
                            )}
                          </Link>
                        ))}
                        {item.footerLinks && item.footerLinks.length > 0 && (
                          <div className="border-t border-white/10 mt-2 pt-2">
                            <span className="block px-4 py-1 text-[10px] font-bold text-white/40 uppercase tracking-widest">Guides</span>
                            {item.footerLinks.map((fl) => (
                              <Link
                                key={fl.label}
                                href={fl.href}
                                className="block px-4 py-2 text-white/70 hover:text-soft-gold hover:bg-white/10 rounded-lg transition-colors font-medium text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                📖 {fl.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white hover:text-soft-gold hover:bg-white/10 rounded-lg transition-colors font-medium text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTAs */}
              <div className="mt-4 space-y-3 px-4 pt-4 border-t border-white/10">
                {/* Phone numbers */}
                <div className="flex gap-2">
                  <a
                    href="tel:2146191200"
                    className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Frisco
                  </a>
                  <a
                    href="tel:2144882224"
                    className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Lewisville
                  </a>
                </div>

                {/* Reserve buttons - clearly labeled per location */}
                <div className="flex gap-2">
                  <a
                    href="https://www.opentable.com/booking/restref/availability?rid=1056652&lang=en-US"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 btn-shimmer bg-accent-red text-white py-3.5 rounded-xl font-bold text-sm text-center shadow-lg relative overflow-hidden"
                  >
                    <svg className="w-4 h-4 inline-block mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Reserve Frisco
                  </a>
                  <a
                    href="https://www.opentable.com/booking/restref/availability?rid=1056663&lang=en-US"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 btn-shimmer bg-deep-indigo text-white py-3.5 rounded-xl font-bold text-sm text-center shadow-lg relative overflow-hidden"
                  >
                    <svg className="w-4 h-4 inline-block mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Reserve Lewisville
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Portal-rendered dropdown panels — render at body level to bypass ALL stacking context issues */}
      {portalReady && activeDropdown && dropdownPos && createPortal(
        <div ref={portalRef}>
          {/* Nav item dropdowns */}
          {navItems.map((item) => {
            if (item.label !== activeDropdown) return null;

            if (item.megaMenu) {
              return (
                <div
                  key={item.label}
                  role="menu"
                  aria-label={`${item.label} submenu`}
                  className="fixed w-[680px] bg-white rounded-xl shadow-2xl border border-stone-200 opacity-100 pointer-events-auto"
                  style={{ top: dropdownPos.top, right: 120, zIndex: 99999 }}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-4 gap-0 p-4">
                    {item.megaMenu.map((section) => (
                      <div key={section.title} className="px-2">
                        <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-stone-100">
                          <span className="text-base" aria-hidden="true">{section.icon}</span>
                          <span className="text-xs font-bold text-charcoal/80 uppercase tracking-wider">{section.title}</span>
                        </div>
                        <div className="space-y-0.5">
                          {section.items.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-2 py-1.5 rounded-md text-sm text-charcoal/80 hover:text-accent-red hover:bg-warm-ivory transition-all"
                              role="menuitem"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-stone-100 px-4 py-3 bg-warm-ivory/50 rounded-b-xl flex items-center justify-between">
                    <a href="/blog" className="text-sm font-semibold text-accent-red hover:text-accent-red/80 transition-colors" onClick={() => setActiveDropdown(null)}>
                      View All Articles &rarr;
                    </a>
                    <div className="flex items-center gap-3">
                      {["Celebrations", "Catering", "Tips"].map((cat) => (
                        <a key={cat} href={`/blog/category/${cat.toLowerCase()}`} className="text-xs px-2.5 py-1 rounded-full bg-white border border-stone-200 text-charcoal/70 hover:border-accent-red hover:text-accent-red transition-all" onClick={() => setActiveDropdown(null)}>
                          {cat}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  role="menu"
                  aria-label={`${item.label} submenu`}
                  className="hidden xl:block fixed w-72 bg-white rounded-xl shadow-2xl border border-stone-200 opacity-100 pointer-events-auto"
                  style={{ top: dropdownPos.top, left: dropdownPos.left, zIndex: 99999 }}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.label === "Menu" && (
                    <div className="px-3 pt-3 pb-1">
                      <div className="flex items-center gap-1.5 bg-warm-ivory rounded-lg p-1">
                        <button
                          onClick={() => setSelectedLocation("frisco")}
                          className={`flex-1 px-3 py-1.5 rounded-md text-xs font-bold tracking-wide transition-all ${selectedLocation === "frisco" ? "bg-accent-red text-white shadow-md" : "text-charcoal/60 hover:text-charcoal hover:bg-white/80"}`}
                        >
                          📍 Frisco
                        </button>
                        <button
                          onClick={() => setSelectedLocation("lewisville")}
                          className={`flex-1 px-3 py-1.5 rounded-md text-xs font-bold tracking-wide transition-all ${selectedLocation === "lewisville" ? "bg-accent-red text-white shadow-md" : "text-charcoal/60 hover:text-charcoal hover:bg-white/80"}`}
                        >
                          📍 Lewisville
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="p-2">
                    {item.dropdown.map((subItem) => {
                      const isActiveLocation = item.label === "Locations" && location && subItem.label.toLowerCase().includes(location);
                      return (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className={`block px-4 py-3 rounded-lg transition-all group ${isActiveLocation ? "bg-accent-red/10 border-l-4 border-accent-red" : "hover:bg-warm-ivory"}`}
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className={`font-semibold text-sm transition-colors ${isActiveLocation ? "text-accent-red" : "text-charcoal group-hover:text-accent-red"}`}>
                            {subItem.label}
                            {isActiveLocation && <span className="ml-2 text-xs font-normal">(Current)</span>}
                          </span>
                          {subItem.description && (
                            <span className="block text-xs text-charcoal/60 mt-0.5">{subItem.description}</span>
                          )}
                        </a>
                      );
                    })}
                  </div>
                  {item.footerLinks && item.footerLinks.length > 0 && (
                    <div className="border-t border-stone-100 px-2 py-2 bg-warm-ivory/50 rounded-b-xl">
                      <span className="block px-4 pt-1 pb-1.5 text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Popular Guides</span>
                      {item.footerLinks.map((fl) => (
                        <a key={fl.label} href={fl.href} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white transition-all group" role="menuitem" onClick={() => setActiveDropdown(null)}>
                          <svg className="w-3.5 h-3.5 text-accent-red/60 group-hover:text-accent-red transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <span className="text-sm text-charcoal/70 group-hover:text-accent-red transition-colors font-medium">{fl.label}</span>
                          {fl.description && <span className="text-xs text-charcoal/40 ml-auto">{fl.description}</span>}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}

          {/* Call Us portal dropdown */}
          {activeDropdown === "phone" && (
            <div
              className="fixed w-56 bg-white rounded-xl shadow-2xl border border-stone-200 opacity-100 pointer-events-auto"
              style={{ top: dropdownPos.top, left: Math.max(16, dropdownPos.left - 120), zIndex: 99999 }}
              onMouseEnter={() => handleMouseEnter("phone")}
              onMouseLeave={handleMouseLeave}
            >

              <div className="p-2">
                <a href="tel:2146191200" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-warm-ivory transition-colors group" onClick={() => setActiveDropdown(null)}>
                  <span className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  <div>
                    <span className="font-semibold text-sm text-charcoal group-hover:text-accent-red transition-colors">Frisco</span>
                    <span className="block text-xs text-charcoal/60">(214) 619-1200</span>
                  </div>
                </a>
                <a href="tel:2144882224" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-warm-ivory transition-colors group" onClick={() => setActiveDropdown(null)}>
                  <span className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  <div>
                    <span className="font-semibold text-sm text-charcoal group-hover:text-accent-red transition-colors">Lewisville</span>
                    <span className="block text-xs text-charcoal/60">(214) 488-2224</span>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Reserve portal dropdown */}
          {activeDropdown === "reserve" && (
            <div
              className="fixed w-60 bg-white rounded-xl shadow-2xl border border-stone-200 opacity-100 pointer-events-auto"
              style={{ top: dropdownPos.top, left: Math.max(16, dropdownPos.left - 120), zIndex: 99999 }}
              onMouseEnter={() => handleMouseEnter("reserve")}
              onMouseLeave={handleMouseLeave}
            >

              <div className="p-2">
                <a
                  href={`https://www.opentable.com/booking/restref/availability?rid=${locationsData.locations.frisco.reservation.rid}&lang=en-US`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActiveDropdown(null)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-warm-ivory transition-colors group text-left"
                >
                  <span className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </span>
                  <div>
                    <span className="font-semibold text-sm text-charcoal group-hover:text-accent-red transition-colors">Frisco</span>
                    <span className="block text-xs text-charcoal/60">Near Stonebriar Centre</span>
                  </div>
                </a>
                <a
                  href={`https://www.opentable.com/booking/restref/availability?rid=${locationsData.locations.lewisville.reservation.rid}&lang=en-US`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActiveDropdown(null)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-warm-ivory transition-colors group text-left"
                >
                  <span className="w-8 h-8 rounded-full bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </span>
                  <div>
                    <span className="font-semibold text-sm text-charcoal group-hover:text-accent-red transition-colors">Lewisville</span>
                    <span className="block text-xs text-charcoal/60">Easy access from I-35E</span>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>,
        document.body
      )}

      {/* Reservation Location Picker Modal */}
      {showReserveModal && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
          onClick={() => setShowReserveModal(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Choose a location to reserve"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

          {/* Modal Content */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in zoom-in-95 fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowReserveModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 transition-colors"
              aria-label="Close reservation dialog"
            >
              <svg className="w-4 h-4 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-14 h-14 mx-auto mb-4 bg-accent-red/10 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-heading font-bold text-charcoal mb-2">
                Reserve Your Table
              </h2>
              <p className="text-charcoal/60 text-sm">
                Which location would you like to dine at?
              </p>
            </div>

            {/* Location buttons */}
            <div className="space-y-3">
              <a
                href="https://www.opentable.com/booking/restref/availability?rid=1056652&lang=en-US"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowReserveModal(false)}
                className="w-full group flex items-center gap-4 p-5 bg-warm-ivory hover:bg-accent-red hover:text-white rounded-xl border-2 border-stone-200 hover:border-accent-red transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-accent-red/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <span className="text-xl">📍</span>
                </div>
                <div className="text-left">
                  <span className="block font-bold text-lg group-hover:text-white text-charcoal transition-colors">Jinbeh Frisco</span>
                  <span className="block text-sm text-charcoal/60 group-hover:text-white/80 transition-colors">Near Stonebriar Centre • (214) 619-1200</span>
                </div>
                <svg className="w-5 h-5 ml-auto text-charcoal/30 group-hover:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="https://www.opentable.com/booking/restref/availability?rid=1056663&lang=en-US"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowReserveModal(false)}
                className="w-full group flex items-center gap-4 p-5 bg-warm-ivory hover:bg-deep-indigo hover:text-white rounded-xl border-2 border-stone-200 hover:border-deep-indigo transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-deep-indigo/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
                  <span className="text-xl">📍</span>
                </div>
                <div className="text-left">
                  <span className="block font-bold text-lg group-hover:text-white text-charcoal transition-colors">Jinbeh Lewisville</span>
                  <span className="block text-sm text-charcoal/60 group-hover:text-white/80 transition-colors">Off I-35E near Vista Ridge • (214) 488-2224</span>
                </div>
                <svg className="w-5 h-5 ml-auto text-charcoal/30 group-hover:text-white/60 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Footer trust signal */}
            <p className="text-center text-xs text-charcoal/40 mt-6">
              Powered by OpenTable • Family-owned since 1988
            </p>
          </div>
        </div>
      )}
    </>
  );
}
