"use client";

import React from "react";

export function EventInquiryForm() {
  return (
    <form 
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thank you for your event inquiry! Our team will contact you shortly to plan your event.');
        (e.target as HTMLFormElement).reset();
      }}
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

      <button
        type="submit"
        className="w-full py-4 bg-accent-red hover:bg-[#b91c1c] text-white rounded-lg font-bold text-lg transition-colors shadow-lg shadow-accent-red/20"
      >
        Submit Event Inquiry
      </button>
    </form>
  );
}

export function NewsletterForm({ location = '' }: { location?: string }) {
  return (
    <form 
      className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter! You\'ll receive our latest updates soon.');
        (e.target as HTMLFormElement).reset();
      }}
    >
      <div className="flex-grow">
        <label htmlFor={`newsletter-email${location ? '-' + location : ''}`} className="sr-only">Email address</label>
        <input
          id={`newsletter-email${location ? '-' + location : ''}`}
          type="email"
          placeholder="Enter your email address"
          aria-label="Email address for newsletter"
          className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
          required
        />
      </div>
      <button
        type="submit"
        className="px-8 py-4 bg-soft-gold hover:bg-white text-charcoal rounded-full font-bold transition-colors whitespace-nowrap"
      >
        Subscribe Now
      </button>
    </form>
  );
}

export function SeasonalSpecialsForm({ idBase = 'seasonal' }: { idBase?: string }) {
  return (
    <form 
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Thank you! We will notify you when new seasonal specials arrive.');
        (e.target as HTMLFormElement).reset();
      }}
    >
      <label htmlFor={`${idBase}-email`} className="sr-only">Email for Seasonal Updates</label>
      <input
        id={`${idBase}-email`}
        type="email"
        placeholder="Enter your email"
        aria-label="Email address for seasonal specials updates"
        className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-soft-gold focus:ring-1 focus:ring-soft-gold/50 transition-colors"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-soft-gold hover:bg-white text-charcoal rounded-lg font-bold transition-colors whitespace-nowrap"
      >
        Notify Me
      </button>
    </form>
  );
}
