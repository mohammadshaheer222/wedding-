/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'parallax' : 'url("/src/assets/images/parallelax.jpg")'
      }
    },
    fontFamily: {
      "quikSand" : ['Quicksand', "sans-serif"],
    }
  },
  plugins: [],
};
