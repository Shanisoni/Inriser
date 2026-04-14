// Design Tokens: Colors
// Inriser Fintech SaaS Color System

export const colors = {
  // Brand
  primary: {
    DEFAULT: '#1A103D',
    50: '#F5F3FF',
    100: '#EDE9FE',
    200: '#DDD6FE',
    300: '#C4B5FD',
    400: '#A78BFA',
    500: '#8B5CF6',
    600: '#7C3AED',
    700: '#6D28D9',
    800: '#5B21B6',
    900: '#1A103D',
    950: '#0F0A24',
  },
  accent: {
    DEFAULT: '#E8740C',
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FED7AA',
    300: '#FDBA74',
    400: '#FB923C',
    500: '#F97316',
    600: '#E8740C',
    700: '#C2410C',
    800: '#9A3412',
    900: '#7C2D12',
  },
  // Surfaces
  surface: {
    white: '#FFFFFF',
    light: '#FAFAFA',
    muted: '#F5F5F5',
    dark: '#1F2937',
    darker: '#111827',
    darkest: '#0A0A0A',
  },
  // Text
  text: {
    primary: '#111827',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
    inverted: '#FFFFFF',
    muted: '#D1D5DB',
  },
  // Borders
  border: {
    light: '#E5E7EB',
    DEFAULT: '#D1D5DB',
    dark: '#374151',
    accent: 'rgba(139, 92, 246, 0.3)',
  },
  // Badge
  badge: {
    bg: '#F3F0FF',
    text: '#6D28D9',
    border: '#DDD6FE',
  },
  // Status
  status: {
    success: '#10B981',
    successBg: '#ECFDF5',
  },
} as const;

export type ColorToken = typeof colors;
