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
    title: 'The Show Begins',
    hook: 'Fire, precision, and pure entertainment',
    description: 'Your master hibachi chef doesn\'t just cook—they perform. Watch as expert knife work meets theatrical flair with the famous onion volcano erupting in flames. Shrimp fly through the air (kids love catching them!), and every sizzle builds anticipation. This is where dinner becomes an unforgettable experience.',
    image: '/images/photoshoot/hibachi-flame-action.jpg',
    imageAlt: 'Hibachi chef creating dramatic flames at tableside grill'
  },
  {
    step: 2,
    title: 'Expertly Crafted, Beautifully Presented',
    hook: 'Premium ingredients, perfectly prepared',
    description: 'Every plate tells a story of quality. Tender filet mignon seared to perfection. Jumbo shrimp with the perfect char. Fresh sushi crafted by master chefs with decades of training. We source the finest ingredients because you taste the difference. This is why families drive across DFW to dine at Jinbeh.',
    image: '/images/photoshoot/hibachi-plate-shrimp.jpg',
    imageAlt: 'Beautifully plated hibachi meal with shrimp, fried rice, and grilled vegetables'
  },
  {
    step: 3,
    title: 'Sushi Bar Excellence',
    hook: 'Fresh fish, artistic presentation, authentic craftsmanship',
    description: 'Our sushi chefs hand-select pristine fish daily and transform it into edible art. From classic nigiri to stunning specialty rolls, every piece reflects traditional Japanese technique with creative modern touches. The sushi tower alone is Instagram-worthy—but the taste is what brings guests back.',
    image: '/images/photoshoot/sushi-tower.jpg',
    imageAlt: 'Artistic sushi tower with fresh sashimi and specialty rolls'
  },
  {
    step: 4,
    title: 'Celebrations Made Memorable',
    hook: 'Where special moments become lasting memories',
    description: 'Whether it\'s your daughter\'s 8th birthday or your 25th anniversary, we make it unforgettable. Our chefs personalize every show, the table erupts in song, and you capture moments you\'ll treasure forever. Over 1,200 families chose Jinbeh for their celebrations last year—because ordinary restaurants don\'t create memories like this.',
    image: '/images/celebrations/jinbeh_group.jpg',
    imageAlt: 'Family celebrating birthday at Jinbeh with chef and festive atmosphere'
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
            More Than a Meal—
            <br />
            <span className="text-soft-gold">An Experience</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Picture this: You walk in as strangers around a table. You leave with full bellies, huge smiles, and memories you'll talk about for years.
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
            Ready to Experience It Yourself?
          </h3>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Don't just take our word for it. See why families across DFW choose Jinbeh for their most memorable meals.
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
