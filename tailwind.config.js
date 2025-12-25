/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#84cc16', // Lime green from logo
          teal: '#2dd4bf',  // Teal from logo
          dark: '#0f172a',  // Dark background
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to bottom right, #84cc16, #2dd4bf)',
        'brand-gradient-hover': 'linear-gradient(to bottom right, #65a30d, #14b8a6)',
      },
    },
  },
  plugins: [],
};