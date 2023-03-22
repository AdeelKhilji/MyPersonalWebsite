/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        akihi:['akihi','sans-serif'],
        akihi_h:['akihi_h','sans-serif'],
      }
    },
  },
  plugins: [],
}