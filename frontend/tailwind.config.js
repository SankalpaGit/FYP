/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'rgba(253,253,253,255)', // Your custom background color
      },
      fontSize: {
        '10x': '14rem', // Custom font size
    },
    },
  },
  plugins: [],
}