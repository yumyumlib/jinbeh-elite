/**
 * Jinbeh Brand Design Tokens
 * Based on the Visual Design System specification
 *
 * The Gracious Host - warm, spirited, authentic
 */

export const colors = {
  // Primary Colors
  charcoal: '#1F1F1F',      // Primary text, headers, navigation
  warmIvory: '#F6F1E8',     // Section backgrounds, menus, cozy undertone

  // Accent Colors
  cedarBrown: '#7A4E2D',    // Headers, icons, menu/signage elements, warmth
  deepIndigo: '#1E2A44',    // CTA buttons, navbar/footer, premium sections
  accentRed: '#C1121F',     // Reserve button, special offers, logo mark, emphasis
  softGold: '#C9A227',      // VIP badges, celebrations, premium touches

  // Functional
  white: '#FFFFFF',
  black: '#000000',

  // State variations
  charcoalLight: '#3A3A3A',
  warmIvoryDark: '#E8E3D9',
  accentRedHover: '#A60F1A',
  deepIndigoHover: '#253557',
} as const;

export const typography = {
  // Font families
  fonts: {
    heading: '"Noto Serif JP", "Yu Mincho", serif',
    body: '"Source Sans Pro", "Open Sans", sans-serif',
    accent: '"Brush Script MT", cursive', // Very limited use - authenticity not kitsch
  },

  // Font sizes (desktop / mobile)
  sizes: {
    h1: { desktop: '64px', mobile: '40px' },
    h2: { desktop: '48px', mobile: '32px' },
    h3: { desktop: '36px', mobile: '28px' },
    h4: { desktop: '28px', mobile: '24px' },
    body: { desktop: '18px', mobile: '16px' },
    caption: { desktop: '14px', mobile: '12px' },
  },

  // Font weights
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.7,
  },

  // Letter spacing
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
  },
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
} as const;

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(31, 31, 31, 0.05)',
  md: '0 4px 6px -1px rgba(31, 31, 31, 0.1), 0 2px 4px -1px rgba(31, 31, 31, 0.06)',
  lg: '0 10px 15px -3px rgba(31, 31, 31, 0.1), 0 4px 6px -2px rgba(31, 31, 31, 0.05)',
  xl: '0 20px 25px -5px rgba(31, 31, 31, 0.1), 0 10px 10px -5px rgba(31, 31, 31, 0.04)',
  // Warm shadow for cards (brand-appropriate)
  warm: '0 10px 25px -5px rgba(122, 78, 45, 0.15), 0 4px 6px -2px rgba(122, 78, 45, 0.08)',
} as const;

export const animation = {
  // Timing
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '400ms',
    emphasis: '600ms',
  },

  // Easing
  easing: {
    entrance: 'ease-out',
    exit: 'ease-in',
    transition: 'ease-in-out',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Brand Voice Constants
export const brandVoice = {
  name: 'The Gracious Host',
  traits: ['welcoming', 'family-oriented', 'spirited', 'warm', 'authentic'],
  signaturePhrases: [
    'Welcome to the table',
    "It's a celebration",
    'Dinner and a show',
    'Experience Japanese Cuisine',
    'Where memories are made',
  ],
  neverUse: ['cold', 'snobbish', 'generic', 'corporate', 'impersonal'],
  readingLevel: '6th-8th grade',
} as const;
