export const theme = {
  colors: {
    // Core Palette (Color Hunt: 202734 / 36415A / B7D894 / E0F8C7)
    darkBase: '#202734',          // Primary Dark Background
    secondarySurface: '#36415A',  // Card, Section & Container Surface
    accentLime: '#B7D894',         // Primary Accent, Badges & CTA
    textHighlight: '#E0F8C7',      // Primary Headings & High-contrast text

    // AW Media Style Glassmorphism Surfaces
    glass: 'rgba(54, 65, 90, 0.55)',
    glassHover: 'rgba(62, 74, 103, 0.75)',
    glassElevated: 'rgba(42, 51, 68, 0.85)',

    // Semantic Variants & Contrast Helpers
    background: '#202734',
    surface: '#36415A',
    surfaceHover: '#3e4a67',
    surfaceElevated: '#2a3344',
    
    // Text Hierarchy (High-contrast, accessible)
    textPrimary: '#E0F8C7',
    textSecondary: '#C5D8B4',
    textMuted: '#9DA9C1',
    textInverse: '#202734',

    // Subtle Borders (AW Media / Brandlos: 1px subtle contrast, no heavy drop shadows)
    border: 'rgba(183, 216, 148, 0.16)',
    borderHover: 'rgba(183, 216, 148, 0.45)',
    borderSubtle: 'rgba(255, 255, 255, 0.08)',
    borderGlass: 'rgba(183, 216, 148, 0.18)',

    // Accents & Badges
    accentGlow: 'rgba(183, 216, 148, 0.15)',
    accentMuted: 'rgba(183, 216, 148, 0.10)',
    overlay: 'rgba(32, 39, 52, 0.85)',
  },

  fonts: {
    body: "'Google Sans', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    heading: "'Google Sans', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    display: "'Poiret One', cursive, sans-serif",
    code: "'Fira Code', 'Courier New', monospace",
  },

  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    md: '1.125rem',   // 18px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    '2xl': '1.875rem',// 30px
    '3xl': '2.25rem', // 36px
    '4xl': '3rem',    // 48px
    '5xl': '3.75rem', // 60px
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.15,
    normal: 1.5,
    relaxed: 1.7,
  },

  letterSpacings: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
  },

  // 4px / 8px Spacing scale
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
    '5xl': '128px',
  },

  radii: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },

  // Responsive Breakpoints
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },

  media: {
    mobile: '@media (max-width: 480px)',
    tablet: '@media (max-width: 768px)',
    desktop: '@media (min-width: 1024px)',
    wide: '@media (min-width: 1280px)',
  },

  // Micro-interactions (150ms-250ms snappy transitions)
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  shadows: {
    subtle: '0 4px 20px rgba(0, 0, 0, 0.25)',
    card: '0 8px 30px rgba(0, 0, 0, 0.35)',
    glow: '0 0 25px rgba(183, 216, 148, 0.2)',
    glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  },

  effects: {
    blur: 'blur(12px)',
    blurHeavy: 'blur(20px)',
  },
} as const;

export type Theme = typeof theme;
