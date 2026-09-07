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
        paper: '#FFFFFF',
        ink: '#0A0A0A',
        'ink-secondary': '#525252',
        'ink-muted': '#8A8A8A',
        border: '#E5E5E5',
        card: '#F7F7F7',
        // Maximalist multi-color accent system — four bold "standard" hues,
        // each with a dark (text-on-tint) and light (tint background) step.
        violet: {
          DEFAULT: '#7C3AED',
          dark: '#5B21B6',
          light: '#F1E8FF',
        },
        pink: {
          DEFAULT: '#EC4899',
          dark: '#BE185D',
          light: '#FFE7F3',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          dark: '#0E7490',
          light: '#DFF9FD',
        },
        amber: {
          DEFAULT: '#F59E0B',
          dark: '#B45309',
          light: '#FFF3DC',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '10px',
        card: '20px',
      },
      maxWidth: {
        content: '1240px',
        reading: '720px',
      },
      spacing: {
        18: '4.5rem',
      },
      boxShadow: {
        'glow-violet': '0 12px 40px -8px rgba(124, 58, 237, 0.45)',
        'glow-pink': '0 12px 40px -8px rgba(236, 72, 153, 0.45)',
        'glow-cyan': '0 12px 40px -8px rgba(6, 182, 212, 0.4)',
        'glow-amber': '0 12px 40px -8px rgba(245, 158, 11, 0.4)',
        hard: '6px 6px 0 0 #0A0A0A',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(3%, -4%) scale(1.06)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.96)' },
        },
        dropdown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'backdrop-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'modal-in': {
          from: { opacity: '0', transform: 'translateY(12px) scale(0.97)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        blob: 'blob 14s ease-in-out infinite',
        dropdown: 'dropdown 250ms cubic-bezier(0.22,1,0.36,1)',
        'fade-up': 'fade-up 700ms cubic-bezier(0.22,1,0.36,1) both',
        'backdrop-in': 'backdrop-in 200ms ease-out both',
        'modal-in': 'modal-in 280ms cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
