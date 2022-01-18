const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-0': {
      transform: 'rotateX(0deg)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
    '.rotate-y-90': {
      transform: 'rotateY(90deg)',
    },
    '.-rotate-x-90': {
      transform: 'rotateX(-90deg)',
    },
  })
})

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [rotateX],
};
