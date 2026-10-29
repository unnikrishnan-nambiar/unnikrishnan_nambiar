/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark, editorial base — near-black night with slightly lifted
        // surfaces, hairline borders, and one electric-blue accent (the
        // "Book a call" blue from the sales deck).
        night: '#07080B',
        surface: '#0E1015',
        raised: '#151821',
        line: 'rgba(255,255,255,0.09)',
        'line-strong': 'rgba(255,255,255,0.16)',
        fg: '#F4F5F7',
        muted: '#A2A7B3',
        subtle: '#71768A',
        accent: {
          DEFAULT: '#3D5AFE',
          bright: '#6E85FF',
          soft: 'rgba(61,90,254,0.14)',
        },
        mint: '#5EE6B0',
        rose: '#FF7A8A',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '22px',
      },
      maxWidth: {
        content: '1240px',
        reading: '720px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        dropdown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.06)' },
        },
        typing: {
          '0%, 80%, 100%': { opacity: '0.25' },
          '40%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        dropdown: 'dropdown 250ms cubic-bezier(0.22,1,0.36,1)',
        'fade-up': 'fade-up 800ms cubic-bezier(0.22,1,0.36,1) both',
        glow: 'glow 9s ease-in-out infinite',
        typing: 'typing 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
