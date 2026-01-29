"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface MobileStickyCTAProps {
    location?: "frisco" | "lewisville";
    phone?: string;
}

export default function MobileStickyCTA({
    location = "frisco",
    phone = "(214) 619-1200",
}: MobileStickyCTAProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show after scrolling past hero (500px)
            if (currentScrollY > 500) {
                // Hide when scrolling down, show when scrolling up
                if (currentScrollY < lastScrollY) {
                    setIsVisible(true);
                } else {
                    setIsVisible(true); // Always show on mobile after hero
                }
            } else {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const reserveHref = location === "lewisville"
        ? "https://www.opentable.com/jinbeh-japanese-steak-seafood-and-sushi-house"
        : "https://www.opentable.com/jinbeh-japanese-restaurant-frisco";

    const phoneClean = phone.replace(/[^0-9]/g, "");

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transform transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"
                }`}
        >
            {/* Gradient fade above buttons */}
            <div className="h-4 bg-gradient-to-t from-charcoal to-transparent" />

            {/* Button container */}
            <div className="bg-charcoal py-4 px-6 flex gap-3 shadow-lg shadow-black/20">
                {/* Reserve Button - Primary */}
                <Link
                    href={reserveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn btn-primary btn-shimmer text-center py-4 text-lg font-semibold"
                >
                    Reserve Now
                </Link>

                {/* Call Button - Secondary */}
                <a
                    href={`tel:+1${phoneClean}`}
                    className="flex items-center justify-center gap-2 px-4 py-4 bg-warm-ivory text-charcoal rounded-xl font-semibold hover:bg-white transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                    </svg>
                    Call
                </a>
            </div>
        </div>
    );
}
