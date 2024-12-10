/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        OpenSans:['Open Sans', 'sans-serif'],
       PTSerif:[ "PT Serif", 'serif'],
     comforter:[ 'Comforter', 'cursive'],
     NotoSans:['Noto Sans', 'sans-serif'],
     Kalam: ["Kalam", 'cursive']

     },
     clipPath: {
        'circle-150': 'circle(120px at 80% 20%)',
        'circle-300': 'circle(200px at 80% -20%)',
    },

     animation: {
      "spin-custom": "spinCustom 30s linear infinite",
      'bounce-out': 'bounce-out 0.5s ease-out forwards',
      flash: 'flash 1s infinite',


    },
    keyframes: {
      spinCustom: {
        "100%": { transform: "rotate(360deg)" },
      },
      'bounce-out': {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '20%': { transform: 'scale(1.1)', opacity: '1' },
        '100%': { transform: 'scale(0.5)', opacity: '0' },
      },
      flash: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0 },
      },
    },
    colors: {
      'rotatebg': '#eee8e2',
    },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.transition-clip-path': {
          transition: 'clip-path 0.3s ease-in-out',
        },
      });
    }),
  ],
}

