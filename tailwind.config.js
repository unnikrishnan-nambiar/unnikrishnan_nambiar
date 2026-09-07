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
        'ink-soft': '#4A4842',
        gold: {
          DEFAULT: '#9C6B2E',
          dark: '#7E551F',
          wash: '#FBF1DE',
        },
        hairline: '#E4E1D8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      maxWidth: {
        prose: '38rem',
      },
    },
  },
  plugins: [],
};
