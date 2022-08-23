/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        libreFranklin: "'Libre Franklin', sans-serif;",
      },
      colors: {
        bblue: "hsl(223, 87%, 63%)",
        paleBlue: "hsl(223, 100%, 88%)",
        lightRed: "hsl(354, 100%, 66%)",
        ggray: "hsl(0, 0%, 59%)",
        veryDarkBlue: "hsl(209, 33%, 12%)",
        hoverBlue: "hsl(224, 84%, 70%)",
      },
    },
  },
  plugins: [],
};
