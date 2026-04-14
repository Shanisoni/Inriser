// Design Tokens: Spacing, Radius, Shadows, Containers
// Inriser Fintech SaaS Spacing System

export const spacing = {
  section: {
    xs: '2rem',
    sm: '3rem',
    md: '5rem',
    lg: '7rem',
    xl: '9rem',
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  gap: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
  },
} as const;

export const radius = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.25rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  glow: '0 0 40px rgba(139, 92, 246, 0.15)',
  'glow-lg': '0 0 60px rgba(139, 92, 246, 0.25)',
} as const;

export type SpacingToken = typeof spacing;
export type RadiusToken = typeof radius;
export type ShadowToken = typeof shadows;
