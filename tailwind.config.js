/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFE4E1', // Soft pink
          gold: '#FFD700',    // Royal gold
          brown: '#8B4513',   // Corgi brown
          cherry: '#FFB7C5',  // Cherry blossom pink
        }
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
};