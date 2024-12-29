/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        itim: ['Itim', 'sans-serif'], // Ensure 'sans-serif' is used as fallback
      },
    },
  },
  plugins: [],
}
