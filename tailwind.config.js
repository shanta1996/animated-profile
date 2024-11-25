/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'sidcup':"url('/public/sidcup.avif')",
        'dolly':"url('/public/dolly.jpg')"
      },
      backgroundColor:{
        'maincolor':'#D4AF37'
      },
      colors:{
        'slatecolor':'#0f172a',
        'maincolor':'#D4AF37'

      }
    },
  },

  


  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '2px white', // Default stroke size and color
        },
     
      }, ['responsive', 'hover']);
    },
  ],
}

