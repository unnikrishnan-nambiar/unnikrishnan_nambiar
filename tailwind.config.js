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
        ink: '#111111',
        'ink-secondary': '#666666',
        'ink-muted': '#8A8A8A',
        border: '#E8E8E8',
        card: '#F7F7F7',
        indigo: {
          DEFAULT: '#4F46E5',
          dark: '#3730A3',
          light: '#EEF2FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '10px',
        card: '16px',
      },
      maxWidth: {
        content: '1200px',
        reading: '720px',
      },
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
};
