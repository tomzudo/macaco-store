/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2F2E0',
        secondary: '#E5E5D6',
        accent: '#D6D6C5',
        soft: '#C7C7B8',

        darkSection: '#0F0F12',
        darkCard: '#1A1A1F',

        textMain: '#0a0a0a',
        textSoft: '#4b4b4b',
      }
    },
  },
  plugins: [],
}