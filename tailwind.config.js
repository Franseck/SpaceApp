/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
first:"#35374B",
sec:"#344955",
three:"#50727B",
four:"#78A083",
five: "#9DB2BF",

        tex :"#803D3B",
        primary : "#E8E0C8",
        primaryDark:"#D3A446",
        secondary:"#B66D2F",
        secondaryDark:"#297272",
        third:"#1a4146",
        forth: "#6D8B74",
      },
      fontFamily:{
        general : ["Special Elite"],
        fewer:["Schoolbell"],
        less :["Annie Use Your Telescope"],
      },

    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [],
  },
}