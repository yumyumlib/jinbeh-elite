// Your Jinbeh Experience - Visual Walkthrough
// Reduces first-timer anxiety by showing what to expect
// Based on narrative hooks and visual storytelling

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
    title: 'A Warm Welcome',
    hook: 'The moment you walk in, you\'re family',
    description: 'Our gracious hosts greet you with genuine warmth—not a corporate "welcome," but a real smile and "we\'re so glad you\'re here!" You\'ll be seated at a spacious hibachi table or in our sushi bar area, depending on your preference. First-timers? We\'ll walk you through everything.',
    image: '/images/experience/warm-welcome.jpg',
    imageAlt: 'Jinbeh host welcoming guests with warm smile at entrance'
  },
  {
    step: 2,
    title: 'The Show Begins',
    hook: 'Fire, knife tricks, and the famous onion volcano',
    description: 'Your master hibachi chef arrives with flair—precision knife work, shrimp tossing (kids love catching them!), and flames that make everyone at the table go "Whoa!" This isn\'t just cooking; it\'s artistry and entertainment. You\'ll laugh, cheer, and take videos you\'ll watch for years.',
    image: '/images/experience/chef-performance.jpg',
    imageAlt: 'Hibachi chef performing onion volcano with flames at table'
  },
  {
    step: 3,
    title: 'Fresh & Flavorful',
    hook: 'Premium ingredients, perfectly prepared',
    description: 'Every dish is crafted with care—tender filet mignon seared to perfection, jumbo shrimp with just the right char, fresh vegetables grilled with savory butter. Our sushi chefs hand-select pristine fish daily. You taste the difference quality makes. This is why families drive 30 minutes to Jinbeh.',
    image: '/images/photoshoot/hibachi-plate-shrimp.jpg',
    imageAlt: 'Beautifully plated hibachi meal with shrimp, fried rice, and grilled vegetables'
  },
  {
    step: 4,
    title: 'Celebrations Made Memorable',
    hook: 'Birthdays, anniversaries, or just because—we make it special',
    description: 'Whether it\'s your daughter\'s 8th birthday or your 25th anniversary, we treat every celebration like it matters. Our chefs personalize the show, the table sings along, and you leave with photos and memories that last a lifetime. Over 1,247 families chose Jinbeh for their celebration last year.',
    image: '/images/experience/celebration-moment.jpg',
    imageAlt: 'Family celebrating birthday at Jinbeh with chef and cake'
  }
];

export default function JinbehExperience() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-soft-gold/20 text-soft-gold text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-soft-gold/30">
            What to Expect
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Your Jinbeh Experience
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Picture this: You walk in, and here's exactly what happens...
          </p>
        </div>

        {/* Desktop: Side-by-side layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-soft-gold/30">
              <Image
                src={experienceSteps[activeStep].image}
                alt={experienceSteps[activeStep].imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-soft-gold text-charcoal w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                {experienceSteps[activeStep].step}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-3xl font-bold mb-3">
              {experienceSteps[activeStep].title}
            </h3>
            <p className="text-soft-gold text-lg italic mb-4 font-medium">
              "{experienceSteps[activeStep].hook}"
            </p>
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              {experienceSteps[activeStep].description}
            </p>

            {/* Step navigation */}
            <div className="flex gap-3">
              {experienceSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                    activeStep === index
                      ? 'bg-soft-gold text-charcoal shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Step {step.step}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="lg:hidden space-y-8 mb-12">
          {experienceSteps.map((step, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              <div className="aspect-[16/9] relative">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute top-4 left-4 bg-soft-gold text-charcoal w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.step}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-soft-gold italic mb-3">
                  "{step.hook}"
                </p>
                <p className="text-white/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-xl text-white/80 mb-6">
            Ready to experience it yourself?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/frisco#reserve"
              className="inline-flex items-center justify-center gap-2 bg-soft-gold hover:bg-soft-gold/90 text-charcoal px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reserve Your Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white hover:text-charcoal text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border-2 border-white/40"
            >
              View Our Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
