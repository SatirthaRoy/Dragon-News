/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        old: '"UnifrakturCook", cursive'
      },
      colors : {
        dark : {
          300: '#9F9F9F',
          400: '#706F6F',
          500: '#444444',
          600: '#403F3F'
        },
        
      },
    },
  },
  plugins: [require("daisyui")],
}