/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'noir': '#0D0D0D',
        'noir-soft': '#1A1A1A',
        'dore': '#C9A961',
        'dore-light': '#D4AF37',
        'creme': '#F5F1EA',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}