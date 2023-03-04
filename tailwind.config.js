const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx,md,mdx}',
    './constants/tailwind-index.ts',
  ],
  theme: {
    colors: {
      green: {
        ...colors.green,
        50: '#FFFEFE',
        100: '#E5F1EB',
        200: '#D3F6E5',
        300: '#D0FDD7',
        400: '#9FCDB1',
        900: '#2D422D',
      },
    },
    fontFamily: {
      serif: ['times', 'serif'],
    },
    extend: {
      brightness: {
        40: '.4',
      },
    },
  },
  plugins: [],
};
