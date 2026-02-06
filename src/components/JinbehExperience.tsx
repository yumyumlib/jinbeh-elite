// The Jinbeh Experience - Redesigned with working images and dream-selling
// Showcases the chef's artistry and the memorable dining experience
// Based on Marketing Machine (customer journey) + Visual Design + Hooks principles

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ExperienceStep {
  step: number;
  title: string;
  hook: string;
  description: string;
  image: string;
  imageAlt: string;
}

const experienceSteps: ExperienceStep[] = [
  {
    step: 1,
    title: 'The Show That Starts Your Celebration',
    hook: 'Fire, laughter, and a standing ovation—every single night',
    description: 'Your hibachi chef doesn\'t just cook—they perform. Watch as expert knife work meets theatrical flair: the famous onion volcano erupts, shrimp fly through the air, and your whole table erupts in laughter. This isn\'t dinner at a restaurant. It\'s dinner and a show that families talk about for weeks. As one guest put it: "The chefs are very entertaining! They always put on an excellent show!"',
    image: '/images/catalog/9-C060324-6484.jpg',
    imageAlt: 'Hibachi chef performing tableside cooking with flames and theatrical presentation at Jinbeh Japanese Restaurant Frisco TX'
  },
  {
    step: 2,
    title: 'Sushi Crafted by Masters, Not Machines',
    hook: 'Hand-selected fish. Traditional technique. Modern artistry.',
    description: 'Since 1988, our sushi chefs have perfected the balance of tradition and creativity. Every roll is hand-crafted with pristine fish, precise knife work, and an artist\'s eye for presentation. From classic nigiri to signature specialty rolls, each piece reflects decades of mastery. This isn\'t chain restaurant sushi—this is why sushi lovers drive from across DFW to Jinbeh. As one regular said: "Everything is so yummy and so fresh!"',
    image: '/images/catalog/6-C060324-6405.jpg',
    imageAlt: 'Premium fresh sushi and sashimi presentation with salmon, tuna, yellowtail at Jinbeh Japanese Restaurant Texas'
  },
  {
    step: 3,
    title: 'Where Birthdays Become Unforgettable',
    hook: 'The birthday spot families come back to, year after year',
    description: 'Whether it\'s your daughter\'s 8th birthday, your parents\' anniversary, or a graduation dinner, Jinbeh makes every celebration feel special. Our chefs personalize the show, the table sings along, and the birthday guest goes home with memories (and a full belly). It\'s why families have been celebrating here for 37 years. In their words: "It\'s truly the perfect place for kids, birthdays, and entertaining the whole fam!"',
    image: '/images/catalog/7-C060324-6447.jpg',
    imageAlt: 'Hibachi chef cooking premium ingredients tableside at Jinbeh Japanese Restaurant Frisco Texas - perfect for celebrations'
  },
  {
    step: 4,
    title: 'Premium Quality, Generous Portions',
    hook: 'Come hungry. Leave with leftovers.',
    description: 'Tender filet mignon seared to perfection. Jumbo shrimp with the perfect char. Fresh vegetables grilled tableside with butter and garlic. Every plate is generous—most guests leave with a to-go box. We source the finest ingredients because after 37 years, we know: you taste the difference. And at Jinbeh, the food always delivers. As one guest raved: "Best steak I\'ve ever had. 10/10... food touched my soul."',
    image: '/images/catalog/12-C060324-6551.jpg',
    imageAlt: 'Premium hibachi dinner with filet mignon, lobster tail, shrimp, fried rice and vegetables at Jinbeh Japanese Restaurant'
  }
];

export default function JinbehExperience() {
  const [activeStep, setActiveStep] = useState<number>(0);

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
        {/* Header - Hook-driven headline */}
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
            Walk in as strangers sharing a table. Leave as friends sharing a story. That's the Jinbeh difference—and it's been happening here since 1988.
          </p>
        </div>

        {/* Desktop: Side-by-side layout with image transition */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Image with dramatic border */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-soft-gold/40 transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={experienceSteps[activeStep].image}
                alt={experienceSteps[activeStep].imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={activeStep === 0}
              />
              {/* Step number badge */}
              <div className="absolute top-6 left-6 bg-soft-gold text-charcoal w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl border-4 border-white">
                {experienceSteps[activeStep].step}
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right: Content with enhanced typography */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {experienceSteps[activeStep].title}
            </h3>
            <p className="text-soft-gold text-xl md:text-2xl italic mb-6 font-medium leading-snug">
              "{experienceSteps[activeStep].hook}"
            </p>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-10">
              {experienceSteps[activeStep].description}
            </p>

            {/* Step navigation with better contrast */}
            <div className="grid grid-cols-4 gap-3">
              {experienceSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`py-4 px-2 rounded-xl font-bold transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-soft-gold text-charcoal shadow-xl scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20 hover:scale-102'
                  }`}
                  aria-label={`View step ${step.step}: ${step.title}`}
                >
                  <div className="text-2xl mb-1">{step.step}</div>
                  <div className="text-xs hidden sm:block">Step</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Stacked cards with better visual hierarchy */}
        <div className="lg:hidden space-y-6 mb-12">
          {experienceSteps.map((step, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-white/20 hover:border-soft-gold/40 transition-all">
              <div className="aspect-[16/9] relative">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-4 left-4 bg-soft-gold text-charcoal w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-3 border-white">
                  {step.step}
                </div>
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-soft-gold text-lg italic mb-4 font-medium">
                  "{step.hook}"
                </p>
                <p className="text-white/90 leading-relaxed text-base md:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA with stronger visual hierarchy */}
        <div className="text-center bg-gradient-to-br from-deep-indigo to-charcoal rounded-3xl p-10 md:p-12 border-2 border-soft-gold/20 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            See What the Buzz Is About
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Over 1,000 five-star reviews. 37 years of tradition. Two locations in DFW. Your table is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/frisco#reserve"
              className="inline-flex items-center justify-center gap-3 bg-soft-gold hover:bg-soft-gold/90 text-charcoal px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105 hover:shadow-soft-gold/50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reserve Your Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-3 bg-white/20 hover:bg-white hover:text-charcoal text-white px-8 py-5 rounded-xl font-bold text-lg transition-all border-2 border-white/40 hover:border-white"
            >
              View Our Menu
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
