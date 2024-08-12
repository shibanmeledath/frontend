/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'hero-gradient': "url('./images/hero5.jpg'), linear-gradient(to bottom, black, rgba(0, 0, 0, 0.825))",
      },
    },
  },
  plugins: [],
}

