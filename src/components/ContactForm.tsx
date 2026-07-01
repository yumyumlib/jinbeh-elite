"use client";

import React, { useState } from "react";
import { fireConversion, setEnhancedConversionData } from "@/lib/gtag";
import CallLink from "@/components/CallLink";

export function EventInquiryForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/event-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Enhanced Conversions: hash + send email/phone, then fire the event
        // inquiry lead conversion (label is a placeholder until the conversion
        // action is created in Google Ads — see src/lib/gtag.ts).
        await setEnhancedConversionData({
          email: data.email as string,
          phone: data.phone as string,
        });
        fireConversion("event_inquiry");
        setStatus("success");
      } else {
        const result = await response.json();
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Failed to connect. Please call us at (214) 619-1200.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-white mb-4">Inquiry Received!</h3>
        <p className="text-warm-ivory/80 max-w-md mx-auto">
          Thank you for your event inquiry! Our team will contact you shortly to plan your event.
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
    <form 
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="event-name" className="block text-sm font-semibold mb-2 text-white">Your Name</label>
          <input
            id="event-name"
            name="name"
            type="text"
            placeholder="John Doe"
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal/30 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-soft-gold focus:ring-2 focus:ring-soft-gold transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="event-email" className="block text-sm font-semibold mb-2 text-white">Email Address</label>
          <input
            id="event-email"
            name="email"
            type="email"
            placeholder="john@example.com"
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal/30 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-soft-gold focus:ring-2 focus:ring-soft-gold transition-colors"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="event-phone" className="block text-sm font-semibold mb-2 text-white">Phone Number</label>
          <input
            id="event-phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal/30 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-soft-gold focus:ring-2 focus:ring-soft-gold transition-colors"
          />
        </div>
        <div>
          <label htmlFor="event-date" className="block text-sm font-semibold mb-2 text-white">Event Date</label>
          <input
            id="event-date"
            name="eventDate"
            type="date"
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal/30 text-charcoal focus:outline-none focus:border-soft-gold focus:ring-2 focus:ring-soft-gold transition-colors"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="event-type" className="block text-sm font-semibold mb-2 text-white">Event Type</label>
          <select id="event-type" name="eventType" aria-required="true" className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal/30 text-charcoal focus:outline-none focus:border-soft-gold focus:ring-2 focus:ring-soft-gold transition-colors" required>
            <option value="">Select an event type</option>
            <option value="birthday">Birthday Party</option>
            <option value="corporate">Corporate Event</option>
            <option value="rehearsal">Rehearsal Dinner</option>
            <option value="baby-shower">Baby Shower</option>
            <option value="team-building">Team Building</option>
            <option value="holiday">Holiday Party</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="event-guests" className="block text-sm font-semibold mb-2 text-white">Guest Count</label>
          <input
            id="event-guests"
            name="guestCount"
            type="number"
            placeholder="Number of guests"
            aria-required="true"
            className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal/30 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-soft-gold focus:ring-2 focus:ring-soft-gold transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="event-details" className="block text-sm font-semibold mb-2 text-white">Event Details</label>
        <textarea
          id="event-details"
          name="details"
          placeholder="Tell us about your event, any special requests, or questions..."
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal/30 text-charcoal placeholder-charcoal/50 focus:outline-none focus:border-soft-gold focus:ring-2 focus:ring-soft-gold transition-colors resize-none"
          required
        />
      </div>

      {status === "error" && (
        <div className="p-4 bg-red-500/20 text-red-300 rounded-lg text-sm border border-red-500/30" role="alert">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-accent-red hover:bg-[#b91c1c] disabled:bg-accent-red/50 text-white rounded-lg font-bold text-lg transition-colors shadow-lg shadow-accent-red/20 inline-flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Submitting...
          </>
        ) : (
          "Submit Event Inquiry"
        )}
      </button>
    </form>
  );
}

export function NewsletterForm({ location = '' }: { location?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: location ? `newsletter-${location}` : "newsletter",
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const result = await response.json();
        setErrorMessage(result.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Failed to connect. Please try again later.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-4 max-w-xl mx-auto">
        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-semibold text-lg">You&apos;re subscribed!</p>
        <p className="text-warm-ivory/70 text-sm mt-1">Watch your inbox for our latest updates.</p>
      </div>
    );
  }

  return (
    <form 
      className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex-grow">
        <label htmlFor={`newsletter-email${location ? '-' + location : ''}`} className="sr-only">Email address</label>
        <input
          id={`newsletter-email${location ? '-' + location : ''}`}
          type="email"
          name="email"
          placeholder="Enter your email address"
          aria-label="Email address for newsletter"
          className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
          required
        />
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm self-center">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-4 bg-soft-gold hover:bg-white disabled:bg-soft-gold/50 text-charcoal rounded-full font-bold transition-colors whitespace-nowrap"
      >
        {status === "loading" ? "..." : "Subscribe Now"}
      </button>
    </form>
  );
}

export function SeasonalSpecialsForm({ idBase = 'seasonal' }: { idBase?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");

    try {
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "seasonal-specials",
        }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const result = await response.json();
        setErrorMessage(result.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Failed to connect. Please try again later.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-3 max-w-md mx-auto">
        <p className="text-white font-semibold">✅ You&apos;re on the list!</p>
        <p className="text-warm-ivory/70 text-sm mt-1">We&apos;ll notify you when new seasonal specials arrive.</p>
      </div>
    );
  }

  return (
    <form 
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <label htmlFor={`${idBase}-email`} className="sr-only">Email for Seasonal Updates</label>
      <input
        id={`${idBase}-email`}
        type="email"
        name="email"
        placeholder="Enter your email"
        aria-label="Email address for seasonal specials updates"
        className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
        required
      />
      {status === "error" && (
        <p className="text-red-400 text-sm self-center">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-soft-gold hover:bg-white disabled:bg-soft-gold/50 text-charcoal rounded-lg font-bold transition-colors whitespace-nowrap"
      >
        {status === "loading" ? "..." : "Notify Me"}
      </button>
    </form>
  );
}
