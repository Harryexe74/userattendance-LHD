/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFE7D9',
        secondary:'#7A0B2E',
        lightblue:'#D0F2FE'
      },
    },
  },
  plugins: [],
}
