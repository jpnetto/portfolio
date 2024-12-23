/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: { 
    extend: {
      colors: { 
      black: '#0F0E0E', 
      eerieBlack: '#131111',
      jet: '#1C1A1A',
      dimGray: '#808080',
      blackBean: '#3F0E0E',
      white: '#F0F0F0',
      fireRed: '#D71D1D',
    },
    fontFamily: {
      sans: ['Fira Sans', 'sans-serif'],
     },
    }, 
  },
  plugins: [],
}

