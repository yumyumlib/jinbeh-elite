"use client";

import { useState } from "react";

interface FeedbackFormProps {
  location: "Frisco" | "Lewisville";
}

export default function FeedbackForm({ location }: FeedbackFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const phone = location === "Frisco" ? "(214) 619-1200" : "(214) 488-2224";
  const phoneClean = location === "Frisco" ? "2146191200" : "2144882224";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.location = location;

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const result = await response.json();
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage(`Failed to connect. Please call us at ${phone}.`);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-heading font-bold text-charcoal mb-4">Thank You for Your Feedback!</h3>
        <p className="text-charcoal/70 max-w-md mx-auto">
          We appreciate you taking the time to share your experience at Jinbeh {location}. Your feedback helps us continue to improve.
        </p>
        <div className="mt-6">
          <a href={`tel:${phoneClean}`} className="text-accent-red hover:underline font-medium">
            {phone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="feedback-name" className="block text-sm font-semibold mb-2 text-charcoal">
            Your Name <span className="text-accent-red">*</span>
          </label>
          <input
            id="feedback-name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="feedback-email" className="block text-sm font-semibold mb-2 text-charcoal">
            Email Address <span className="text-accent-red">*</span>
          </label>
          <input
            id="feedback-email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="feedback-phone" className="block text-sm font-semibold mb-2 text-charcoal">
            Phone Number
          </label>
          <input
            id="feedback-phone"
            name="phone"
            type="tel"
            placeholder="(555) 123-4567"
            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="feedback-visit-date" className="block text-sm font-semibold mb-2 text-charcoal">
            Date of Visit
          </label>
          <input
            id="feedback-visit-date"
            name="visitDate"
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-charcoal/20 text-charcoal focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="feedback-rating" className="block text-sm font-semibold mb-2 text-charcoal">
          Overall Experience <span className="text-accent-red">*</span>
        </label>
        <select
          id="feedback-rating"
          name="rating"
          required
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 text-charcoal focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 transition-colors"
        >
          <option value="">Select a rating</option>
          <option value="excellent">Excellent — I loved it!</option>
          <option value="good">Good — Enjoyed my visit</option>
          <option value="average">Average — It was okay</option>
          <option value="below-average">Below Average — Could be better</option>
          <option value="poor">Poor — I had issues</option>
        </select>
      </div>

      <div>
        <label htmlFor="feedback-dining" className="block text-sm font-semibold mb-2 text-charcoal">
          What did you dine on?
        </label>
        <select
          id="feedback-dining"
          name="diningType"
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 text-charcoal focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 transition-colors"
        >
          <option value="">Select...</option>
          <option value="hibachi">Hibachi</option>
          <option value="sushi">Sushi / Sashimi</option>
          <option value="both">Both Hibachi & Sushi</option>
          <option value="bar">Bar / Drinks</option>
          <option value="takeout">Takeout / Delivery</option>
          <option value="catering">Catering</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="feedback-message" className="block text-sm font-semibold mb-2 text-charcoal">
          Your Feedback <span className="text-accent-red">*</span>
        </label>
        <textarea
          id="feedback-message"
          name="message"
          placeholder="Tell us about your experience — what we did well, and what we can improve..."
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg border border-charcoal/20 text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-accent-red focus:ring-2 focus:ring-accent-red/20 transition-colors resize-none"
        />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200" role="alert">
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
          "Submit Feedback"
        )}
      </button>
    </form>
  );
}
