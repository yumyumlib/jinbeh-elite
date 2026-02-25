"use client";

import { useState } from "react";
import ShimmerButton from "@/components/ui/shimmer-button";

export default function VipClubForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/vip-club", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
            } else {
                const result = await response.json();
                setErrorMessage(result.error || "Something went wrong.");
                setStatus("error");
            }
        } catch {
            setErrorMessage("Failed to connect to the server.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-accent-red text-center py-12 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                            <span className="text-accent-red text-xl">🎉</span> Birthday Gift ($25 Gift Card) & Anniversary Treats
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-accent-red text-xl">✉️</span> Secret Menu & Seasonal Updates
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-accent-red text-xl">🥂</span> Exclusive Event Invitations
                        </li>
                    </ul>
                </div>

                <div className="p-10 md:p-12 bg-white relative">
                    <form onSubmit={handleSubmit} className="space-y-5 text-left relative z-10">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1">First Name <span className="text-accent-red">*</span></label>
                                <input required type="text" id="firstName" name="firstName" className="w-full px-4 py-3 bg-warm-ivory rounded-xl border-transparent focus:border-accent-red focus:bg-white focus:ring-0 transition-colors" placeholder="Taro" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-1">Last Name <span className="text-accent-red">*</span></label>
                                <input required type="text" id="lastName" name="lastName" className="w-full px-4 py-3 bg-warm-ivory rounded-xl border-transparent focus:border-accent-red focus:bg-white focus:ring-0 transition-colors" placeholder="Tanaka" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email Address <span className="text-accent-red">*</span></label>
                            <input required type="email" id="email" name="email" className="w-full px-4 py-3 bg-warm-ivory rounded-xl border-transparent focus:border-accent-red focus:bg-white focus:ring-0 transition-colors" placeholder="taro@example.com" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-charcoal mb-1">Preferred Location <span className="text-accent-red">*</span></label>
                                <select required id="location" name="location" className="w-full px-4 py-3 bg-warm-ivory rounded-xl border-transparent focus:border-accent-red focus:bg-white focus:ring-0 transition-colors text-charcoal">
                                    <option value="">Select...</option>
                                    <option value="Frisco">Frisco</option>
                                    <option value="Lewisville">Lewisville</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="birthday" className="block text-sm font-medium text-charcoal mb-1">Birthday (MM/DD) <span className="text-accent-red">*</span></label>
                                <input required type="text" id="birthday" name="birthday" placeholder="01/25" pattern="(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])" className="w-full px-4 py-3 bg-warm-ivory rounded-xl border-transparent focus:border-accent-red focus:bg-white focus:ring-0 transition-colors" />
                            </div>
                        </div>

                        {status === "error" && (
                            <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
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
