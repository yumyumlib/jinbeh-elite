"use client";

import { useState } from "react";
import ShimmerButton from "@/components/ui/shimmer-button";

/**
 * VIP Club signup form.
 *
 * Posts to /api/vip-signup which is handled by nginx on the VPS:
 *   nginx rate-limits, injects an X-VIP-Secret header, and forwards
 *   to the n8n webhook on 127.0.0.1:5678. n8n validates, hashes the
 *   client IP with a daily-rotating salt, and appends a row to the
 *   VIP Club Google Sheet. No Google Service Account code lives in
 *   the Next.js app anymore.
 *
 * See docs/vip-signup-form.md for the full engineering spec.
 */
export default function VipClubForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "ratelimited">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const form = e.currentTarget;
        const fd = new FormData(form);

        // Capture UTM parameters from the current URL (safe on client only).
        const params =
            typeof window !== "undefined"
                ? new URLSearchParams(window.location.search)
                : new URLSearchParams();

        const payload = {
            first_name: fd.get("first_name"),
            last_name: fd.get("last_name"),
            email: fd.get("email"),
            location: fd.get("location"),
            birthday_mmdd: fd.get("birthday_mmdd"),
            consent: fd.get("consent") === "on",
            // Honeypot — humans can't see or tab into this; bots fill it.
            website: fd.get("website") || "",
            source: typeof window !== "undefined" ? window.location.pathname : "",
            utm_source: params.get("utm_source") || "",
            utm_medium: params.get("utm_medium") || "",
            utm_campaign: params.get("utm_campaign") || "",
        };

        try {
            const response = await fetch("/api/vip-signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.status === 429) {
                setErrorMessage(
                    "Too many tries, please wait a minute and try again."
                );
                setStatus("ratelimited");
                return;
            }

            if (response.ok) {
                setStatus("success");
                // Optional GA4/dataLayer event for reporting.
                if (
                    typeof window !== "undefined" &&
                    (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer
                ) {
                    (window as unknown as { dataLayer: Array<Record<string, unknown>> }).dataLayer.push({
                        event: "vip_signup",
                    });
                }
                return;
            }

            let message = "Something went wrong.";
            try {
                const result = await response.json();
                if (result?.error) message = result.error;
            } catch {
                // Response had no JSON body — keep the default message.
            }
            setErrorMessage(message);
            setStatus("error");
        } catch {
            setErrorMessage("Failed to connect to the server.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-accent-red text-center py-12 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">You&apos;re in the club!</h3>
                <p className="text-charcoal/70">
                    Welcome to the Jinbeh VIP Family. Keep an eye on your inbox for exclusive updates and your special birthday treats.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-br from-charcoal to-deep-indigo rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto my-16">
            <div className="grid md:grid-cols-2">
                <div className="p-10 md:p-12 text-white flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red opacity-10 blur-[100px] rounded-full pointer-events-none" />
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">
                        Join the Jinbeh VIP Club
                    </h2>
                    <p className="text-warm-ivory/80 text-lg mb-8 relative z-10">
                        Sign up to receive exclusive invites, secret menu updates, and a special gift ($25 gift card) on your birthday.
                    </p>
                    <ul className="space-y-4 text-warm-ivory/90 relative z-10 hidden md:block">
                        <li className="flex items-center gap-3">
                            <span className="text-accent-red text-xl" aria-hidden="true">🎉</span> Birthday Gift ($25 Gift Card) &amp; Anniversary Treats
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-accent-red text-xl" aria-hidden="true">✉️</span> Secret Menu &amp; Seasonal Updates
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-accent-red text-xl" aria-hidden="true">🥂</span> Exclusive Event Invitations
                        </li>
                    </ul>
                </div>

                <div className="p-10 md:p-12 bg-white relative">
                    <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left relative z-10" aria-describedby="vip-form-status">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium text-charcoal mb-1">
                                    First Name <span className="text-accent-red">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    maxLength={80}
                                    autoComplete="given-name"
                                    className="w-full px-4 py-3 bg-warm-ivory rounded-xl border-transparent focus:border-accent-red focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="Taro"
                                />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium text-charcoal mb-1">
                                    Last Name <span className="text-accent-red">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    maxLength={80}
                                    autoComplete="family-name"
                                    className="w-full px-4 py-3 bg-warm-ivory rounded-xl border-transparent focus:border-accent-red focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="Tanaka"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                                Email Address <span className="text-accent-red">*</span>
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                maxLength={254}
                                autoComplete="email"
                                className="w-full px-4 py-3 bg-warm-ivory rounded-xl border-transparent focus:border-accent-red focus:bg-white focus:ring-0 transition-colors"
                                placeholder="taro@example.com"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-charcoal mb-1">
                                    Preferred Location <span className="text-accent-red">*</span>
                                </label>
                                <select
                                    required
                                    id="location"
                                    name="location"
                                    className="w-full px-4 py-3 bg-warm-ivory rounded-xl border-transparent focus:border-accent-red focus:bg-white focus:ring-0 transition-colors text-charcoal"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Choose one</option>
                                    <option value="Frisco">Frisco</option>
                                    <option value="Lewisville">Lewisville</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="birthday_mmdd" className="block text-sm font-medium text-charcoal mb-1">
                                    Birthday (MM/DD) <span className="text-accent-red">*</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="birthday_mmdd"
                                    name="birthday_mmdd"
                                    placeholder="MM/DD"
                                    inputMode="numeric"
                                    maxLength={5}
                                    pattern="^(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])$"
                                    className="w-full px-4 py-3 bg-warm-ivory rounded-xl border-transparent focus:border-accent-red focus:bg-white focus:ring-0 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Honeypot — hidden from humans, bots fill it in. */}
                        <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
                            <label htmlFor="website">Website</label>
                            <input
                                type="text"
                                id="website"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <div className="flex items-start gap-3 pt-1">
                            <input
                                required
                                type="checkbox"
                                id="consent"
                                name="consent"
                                className="mt-1 h-4 w-4 rounded border-stone-300 text-accent-red focus:ring-accent-red"
                            />
                            <label htmlFor="consent" className="text-sm text-charcoal/80 leading-relaxed">
                                I agree to receive emails from Jinbeh about VIP perks and birthday offers. We won&apos;t share your info.
                            </label>
                        </div>

                        {status === "error" && (
                            <div id="vip-form-status" role="alert" className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
                                {errorMessage}
                            </div>
                        )}
                        {status === "ratelimited" && (
                            <div id="vip-form-status" role="alert" className="p-4 bg-amber-50 text-amber-700 rounded-lg text-sm border border-amber-100">
                                {errorMessage}
                            </div>
                        )}

                        <div className="mt-8">
                            <ShimmerButton
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full text-lg shadow-xl"
                                shimmerColor="#C9A227"
                                background="#C1121F"
                            >
                                {status === "loading" ? "Processing..." : "Join the VIP Club"}
                            </ShimmerButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
