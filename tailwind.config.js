/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bunge-inline': ['"Bunge Inline"', 'cursive'],
      },
    },
  },
  plugins: [],
}

