/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1D1F24',
        cream: '#FAF8F5',
        coral: '#FF7A5C',
        plum: '#6B4EFF',
        sage: '#AFC9B8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
      },
    },
  },
  plugins: [],
}
