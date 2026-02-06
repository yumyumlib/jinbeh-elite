// The Jinbeh Experience - Top 4 reasons to dine at Jinbeh
// Punchy, benefit-driven selling points with professional imagery
// Based on VOC phrases, brand differentiators, and competitive positioning

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ExperienceReason {
  label: string;
  title: string;
  hook: string;
  description: string;
  image: string;
  imageAlt: string;
}

const reasons: ExperienceReason[] = [
  {
    label: 'Dinner & A Show',
    title: 'Dinner & A Show',
    hook: 'Fire, laughter, and a standing ovation—every single night',
    description: 'Your hibachi chef doesn\'t just cook—they perform. The onion volcano erupts, shrimp fly through the air, and your whole table erupts in laughter. It\'s the dinner experience families talk about for weeks.',
    image: '/images/catalog/9-C060324-6484.jpg',
    imageAlt: 'Hibachi chef performing tableside cooking with flames and theatrical presentation at Jinbeh Japanese Restaurant Frisco TX'
  },
  {
    label: 'House-Made Everything',
    title: 'House-Made Everything',
    hook: 'Real crab. Fresh fish. Sauces made from scratch, daily.',
    description: 'Our Yum Yum sauce, every dipping sauce, and the garlic butter are all made in-house daily. The sushi uses real crab—no imitation here. After 37 years, we know: you taste the difference when every detail is done right.',
    image: '/images/catalog/6-C060324-6405.jpg',
    imageAlt: 'Premium fresh sushi and sashimi presentation with salmon, tuna, yellowtail at Jinbeh Japanese Restaurant Texas'
  },
  {
    label: 'DFW\'s Birthday Spot',
    title: 'DFW\'s Birthday Spot',
    hook: 'The place families come back to, year after year',
    description: 'One guest has celebrated her birthday here every year since she was 7—she\'s 24 now. Whether it\'s a birthday, anniversary, or graduation, Jinbeh makes every celebration unforgettable. That\'s 37 years of memories and counting.',
    image: '/images/catalog/7-C060324-6447.jpg',
    imageAlt: 'Hibachi chef cooking premium ingredients tableside at Jinbeh Japanese Restaurant Frisco Texas - perfect for celebrations'
  },
  {
    label: 'Come Hungry, Leave Happy',
    title: 'Come Hungry, Leave Happy',
    hook: 'Premium cuts. Generous plates. Leftovers guaranteed.',
    description: 'Tender filet mignon. Jumbo shrimp with the perfect char. Fresh vegetables grilled in house-made garlic butter. Every plate is generous—most guests leave with a to-go box. As one guest put it: "Best steak I\'ve ever had. 10/10... food touched my soul."',
    image: '/images/catalog/12-C060324-6551.jpg',
    imageAlt: 'Premium hibachi dinner with filet mignon, lobster tail, shrimp, fried rice and vegetables at Jinbeh Japanese Restaurant'
  }
];

export default function JinbehExperience() {
  const [activeReason, setActiveReason] = useState<number>(0);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-charcoal via-deep-indigo to-charcoal text-white relative overflow-hidden">
      {/* Subtle Japanese pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-soft-gold/20 text-soft-gold text-sm font-semibold px-6 py-2 rounded-full mb-6 border border-soft-gold/30 tracking-wide">
            WHAT MAKES JINBEH DIFFERENT
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            Not Just Dinner—
            <br />
            <span className="text-soft-gold">A Memory</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Family-owned since 1988. Never a chain. Here&apos;s why over 1,200 reviewers give us five stars.
          </p>
        </div>

        {/* Desktop: Side-by-side layout with image transition */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-soft-gold/40 transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={reasons[activeReason].image}
                alt={reasons[activeReason].imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={activeReason === 0}
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {reasons[activeReason].title}
            </h3>
            <p className="text-soft-gold text-xl md:text-2xl italic mb-6 font-medium leading-snug">
              &ldquo;{reasons[activeReason].hook}&rdquo;
            </p>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10">
              {reasons[activeReason].description}
            </p>

            {/* Reason navigation — short labels instead of step numbers */}
            <div className="grid grid-cols-2 gap-3">
              {reasons.map((reason, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReason(index)}
                  className={`py-4 px-4 rounded-xl font-bold transition-all duration-300 text-sm ${
                    activeReason === index
                      ? 'bg-soft-gold text-charcoal shadow-xl scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20 hover:scale-102'
                  }`}
                  aria-label={`View: ${reason.label}`}
                >
                  {reason.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="lg:hidden space-y-6 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-white/20 hover:border-soft-gold/40 transition-all">
              <div className="aspect-[16/9] relative">
                <Image
                  src={reason.image}
                  alt={reason.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                {/* Label badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-soft-gold text-charcoal text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {reason.label}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-soft-gold text-lg italic mb-3 font-medium">
                  &ldquo;{reason.hook}&rdquo;
                </p>
                <p className="text-white/90 leading-relaxed text-base md:text-lg">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-deep-indigo to-charcoal rounded-3xl p-10 md:p-12 border-2 border-soft-gold/20 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            See What the Buzz Is About
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Over 1,200 five-star reviews. 37 years of tradition. Two locations in DFW.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/frisco#reserve"
              className="inline-flex items-center justify-center gap-3 bg-soft-gold hover:bg-soft-gold/90 text-charcoal px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105 hover:shadow-soft-gold/50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reserve Your Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-3 bg-white/20 hover:bg-white hover:text-charcoal text-white px-8 py-5 rounded-xl font-bold text-lg transition-all border-2 border-white/40 hover:border-white"
            >
              View Our Menu
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
