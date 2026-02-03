// First Timer FAQ Section
// Addresses objections and reduces booking anxiety
// Based on hooks playbook: Question hooks that address concerns

'use client';

import Link from 'next/link';
import { useState } from 'react';

interface FAQItem {
  icon: string;
  question: string;
  answer: string;
  cta?: {
    text: string;
    href: string;
  };
}

const faqs: FAQItem[] = [
  {
    icon: '💰',
    question: 'Is it affordable for my family?',
    answer: 'Absolutely! Lunch hibachi starts at just $12.95, and dinner entrees range from $20-45. We\'re perfect for birthday celebrations AND weeknight dinners. Many families tell us "we thought it would be more expensive!" Most entrees include soup, salad, fried rice, vegetables, and your protein—it\'s a complete meal.',
    cta: {
      text: 'View Full Menu & Prices',
      href: '/menu'
    }
  },
  {
    icon: '👨‍👩‍👧‍👦',
    question: 'Will my kids love it here?',
    answer: 'Kids LOVE Jinbeh! They go wild for the onion volcano, catching shrimp tossed by chefs, and watching flames shoot up from the grill. We have high chairs, kids menus, and chefs who are pros at entertaining little ones. Over 1,000 families celebrated birthdays with us last year—we\'re the #1 choice for family celebrations in Frisco.',
    cta: {
      text: 'See Birthday Packages',
      href: '/celebrations/birthday'
    }
  },
  {
    icon: '🥢',
    question: 'I\'ve never used chopsticks. Is that okay?',
    answer: 'No problem at all! We provide forks with every meal. Our team is here to make you comfortable, not test your chopstick skills. First-timers are always welcome, and our gracious hosts will guide you through everything. Come as you are!',
  },
  {
    icon: '🍱',
    question: 'What should I order if I\'m a first-timer?',
    answer: 'Great question! Try our Hibachi Chicken & Steak Combo ($28.95)—it\'s our most popular dish and gives you the best of both worlds. It includes soup, salad, fried rice, veggies, and two proteins. If you prefer sushi, our Rainbow Roll is a crowd-pleaser that\'s perfect for beginners.',
    cta: {
      text: 'Browse Our Menu',
      href: '/menu'
    }
  },
  {
    icon: '🎭',
    question: 'What\'s the "show" everyone talks about?',
    answer: 'Dinner and a show! Our master hibachi chefs perform right at your table—knife tricks, the famous onion volcano, shrimp tossing, and flames shooting high. It\'s entertaining for all ages. You\'re not just eating; you\'re experiencing Japanese culinary artistry and having fun with everyone at your table.',
    cta: {
      text: 'Watch a Preview Video',
      href: '/#experience'
    }
  },
  {
    icon: '🏮',
    question: 'Is the food authentic or Americanized?',
    answer: 'Both! We honor authentic Japanese techniques and ingredients (our sushi chefs have decades of training), but we also make it accessible to American palates. You\'ll find traditional nigiri and sashimi alongside creative specialty rolls. Our hibachi uses premium cuts and classic Japanese seasonings. It\'s the real deal, made welcoming.',
  }
];

export default function FirstTimerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-warm-ivory to-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hook: Question format - "First time at Jinbeh?" */}
        <div className="text-center mb-12">
          <span className="inline-block bg-soft-gold/20 text-cedar-brown text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-soft-gold/30">
            First Time Here?
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4">
            Here's What to Know Before You Visit
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            We get these questions all the time. Welcome to the table!
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-charcoal/10"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">
                  {faq.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-charcoal mb-3 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-charcoal/80 text-base leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  {faq.cta && (
                    <Link
                      href={faq.cta.href}
                      className="inline-flex items-center gap-2 text-cedar-brown font-semibold hover:text-accent-red transition-colors text-sm"
                    >
                      {faq.cta.text}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center bg-charcoal text-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            Still Have Questions?
          </h3>
          <p className="text-white/80 mb-6">
            Our gracious hosts are here to help. Give us a call or stop by—we'd love to welcome you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2146191200"
              className="inline-flex items-center justify-center gap-2 bg-soft-gold hover:bg-soft-gold/90 text-charcoal px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Frisco: (214) 619-1200
            </a>
            <a
              href="tel:2144882224"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white hover:text-charcoal text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/40"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Lewisville: (214) 488-2224
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
