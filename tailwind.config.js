/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['Rubik', 'sans-serif'],
        secondaryFont: ['Rambla', 'sans-serif'],
        thirdFont: ['Karla', 'sans-serif']
      }
    },
  },
  plugins: [],
}