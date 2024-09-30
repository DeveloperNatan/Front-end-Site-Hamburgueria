/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    fontFamily:{
      "sans":['Poppins', 'sans-serif'],
      "oswald":['Oswald', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        home: "url('/src/assets/local.jpeg')",
      },
    },
  },
  plugins: [],
};
