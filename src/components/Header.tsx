"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  location?: "frisco" | "lewisville";
}

export default function Header({ location }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Menu", href: location ? `/${location}/menu` : "/frisco/menu" },
    { label: "Reservations", href: location ? `/${location}#reserve` : "/frisco#reserve" },
    { label: "Happy Hour", href: location ? `/${location}/happy-hour` : "/frisco/happy-hour" },
    { label: "Celebrations", href: "/celebrations" },
    { label: "Catering", href: location ? `/${location}/catering` : "/frisco/catering" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-warm-ivory-dark">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-cedar-brown rounded-lg flex items-center justify-center">
              <span className="text-warm-ivory font-bold text-xl">金</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-semibold text-charcoal">
                JINBEH
              </span>
              {location && (
                <span className="block text-sm text-cedar-brown capitalize">
                  {location}
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-charcoal hover:text-accent-red transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Location Switcher */}
            <div className="flex items-center gap-2 text-sm">
              <Link
                href="/frisco"
                className={`px-3 py-1 rounded-full transition-colors ${
                  location === "frisco"
                    ? "bg-deep-indigo text-white"
                    : "text-charcoal hover:bg-warm-ivory-dark"
                }`}
              >
                Frisco
              </Link>
              <Link
                href="/lewisville"
                className={`px-3 py-1 rounded-full transition-colors ${
                  location === "lewisville"
                    ? "bg-deep-indigo text-white"
                    : "text-charcoal hover:bg-warm-ivory-dark"
                }`}
              >
                Lewisville
              </Link>
            </div>

            <Link
              href={location ? `/${location}#reserve` : "/frisco#reserve"}
              className="btn btn-primary btn-shimmer"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
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
          <div className="lg:hidden py-4 border-t border-warm-ivory-dark">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-charcoal hover:text-accent-red transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Location Switcher Mobile */}
              <div className="flex items-center gap-2 py-2">
                <span className="text-sm text-charcoal-light">Location:</span>
                <Link
                  href="/frisco"
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    location === "frisco"
                      ? "bg-deep-indigo text-white"
                      : "bg-warm-ivory-dark text-charcoal"
                  }`}
                >
                  Frisco
                </Link>
                <Link
                  href="/lewisville"
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    location === "lewisville"
                      ? "bg-deep-indigo text-white"
                      : "bg-warm-ivory-dark text-charcoal"
                  }`}
                >
                  Lewisville
                </Link>
              </div>

              <Link
                href={location ? `/${location}#reserve` : "/frisco#reserve"}
                className="btn btn-primary btn-shimmer w-full mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reserve a Table
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
