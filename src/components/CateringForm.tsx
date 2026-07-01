"use client";

import { useState } from "react";
import { fireConversion, setEnhancedConversionData } from "@/lib/gtag";
import CallLink from "@/components/CallLink";

export default function CateringForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/catering-inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Fire the Google Ads "Catering lead form" conversion only on a
                // confirmed successful submission (not on validation/network errors).
                // Enhanced Conversions: hash + send email/phone first so they
                // attach to the conversion below.
                await setEnhancedConversionData({
                    email: data.email as string,
                    phone: data.phone as string,
                });
                // Unique id per successful submit so Google de-dupes any refire.
                const txnId =
                    typeof crypto !== "undefined" && crypto.randomUUID
                        ? crypto.randomUUID()
                        : `catering-${Date.now()}`;
                fireConversion("catering", undefined, "USD", txnId);
                setStatus("success");
            } else {
                const result = await response.json();
                setErrorMessage(result.error || "Something went wrong.");
                setStatus("error");
            }
        } catch {
            setErrorMessage("Failed to connect. Please call us directly.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Inquiry Received!</h3>
                <p className="text-warm-ivory/80 max-w-md mx-auto">
                    Thank you for your catering inquiry. We&apos;ll review your details and get back to you within 1 business day.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center text-sm">
                    <CallLink href="tel:2146191200" className="text-soft-gold hover:text-soft-gold/80 transition-colors">
                        📞 Frisco: (214) 619-1200
                    </CallLink>
                    <span className="hidden sm:inline text-white/30">|</span>
                    <CallLink href="tel:2144882224" className="text-soft-gold hover:text-soft-gold/80 transition-colors">
                        📞 Lewisville: (214) 488-2224
                    </CallLink>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Info Row */}
                <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Your Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="catering-name" className="block text-sm font-medium text-warm-ivory/80 mb-1">
                                Full Name <span className="text-accent-red">*</span>
                            </label>
                            <input
                                required
                                type="text"
                                id="catering-name"
                                name="name"
                                placeholder="Your name"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="catering-email" className="block text-sm font-medium text-warm-ivory/80 mb-1">
                                Email <span className="text-accent-red">*</span>
                            </label>
                            <input
                                required
                                type="email"
                                id="catering-email"
                                name="email"
                                placeholder="you@email.com"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="catering-phone" className="block text-sm font-medium text-warm-ivory/80 mb-1">
                                Phone <span className="text-accent-red">*</span>
                            </label>
                            <input
                                required
                                type="tel"
                                id="catering-phone"
                                name="phone"
                                placeholder="(214) 555-0123"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
                            />
                        </div>
                    </div>
                </div>

                {/* Event Details */}
                <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-soft-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Event Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="catering-date" className="block text-sm font-medium text-warm-ivory/80 mb-1">
                                Event Date <span className="text-accent-red">*</span>
                            </label>
                            <input
                                required
                                type="date"
                                id="catering-date"
                                name="eventDate"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors [color-scheme:dark]"
                            />
                        </div>
                        <div>
                            <label htmlFor="catering-guests" className="block text-sm font-medium text-warm-ivory/80 mb-1">
                                Number of Guests <span className="text-accent-red">*</span>
                            </label>
                            <select
                                required
                                id="catering-guests"
                                name="guestCount"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
                            >
                                <option value="" className="bg-charcoal">Select...</option>
                                <option value="10-25" className="bg-charcoal">10–25 guests</option>
                                <option value="25-50" className="bg-charcoal">25–50 guests</option>
                                <option value="50-100" className="bg-charcoal">50–100 guests</option>
                                <option value="100-200" className="bg-charcoal">100–200 guests</option>
                                <option value="200+" className="bg-charcoal">200+ guests</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="catering-type" className="block text-sm font-medium text-warm-ivory/80 mb-1">
                                Event Type <span className="text-accent-red">*</span>
                            </label>
                            <select
                                required
                                id="catering-type"
                                name="eventType"
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
                            >
                                <option value="" className="bg-charcoal">Select...</option>
                                <option value="Corporate Event" className="bg-charcoal">Corporate Event</option>
                                <option value="Wedding" className="bg-charcoal">Wedding</option>
                                <option value="Birthday Party" className="bg-charcoal">Birthday Party</option>
                                <option value="Holiday Party" className="bg-charcoal">Holiday Party</option>
                                <option value="Graduation" className="bg-charcoal">Graduation</option>
                                <option value="Family Gathering" className="bg-charcoal">Family Gathering</option>
                                <option value="Other" className="bg-charcoal">Other</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Location & Dietary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="catering-location" className="block text-sm font-medium text-warm-ivory/80 mb-1">
                            Event Location / Delivery Address
                        </label>
                        <input
                            type="text"
                            id="catering-location"
                            name="eventLocation"
                            placeholder="Address or venue name"
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="catering-dietary" className="block text-sm font-medium text-warm-ivory/80 mb-1">
                            Dietary Restrictions
                        </label>
                        <input
                            type="text"
                            id="catering-dietary"
                            name="dietaryRestrictions"
                            placeholder="Allergies, vegetarian, gluten-free, etc."
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
                        />
                    </div>
                </div>

                {status === "error" && (
                    <div className="p-4 bg-red-500/20 text-red-300 rounded-xl text-sm border border-red-500/30">
                        {errorMessage}
                    </div>
                )}

                {/* Submit + Contact Info */}
                <div className="flex flex-col md:flex-row items-center gap-6 pt-2">
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full md:w-auto btn bg-accent-red hover:bg-accent-red/90 disabled:bg-accent-red/50 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                    >
                        {status === "loading" ? (
                            <>
                                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            <>
                                Submit Inquiry
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </>
                        )}
                    </button>
                    <div className="flex flex-col sm:flex-row gap-3 text-sm text-warm-ivory/60">
                        <span>Or call us:</span>
                        <CallLink href="tel:2146191200" className="text-soft-gold hover:text-soft-gold/80 transition-colors underline decoration-soft-gold/30">
                            Frisco (214) 619-1200
                        </CallLink>
                        <CallLink href="tel:2144882224" className="text-soft-gold hover:text-soft-gold/80 transition-colors underline decoration-soft-gold/30">
                            Lewisville (214) 488-2224
                        </CallLink>
                    </div>
                </div>
            </form>
        </div>
    );
}
