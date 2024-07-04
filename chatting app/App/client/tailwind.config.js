/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#0079FF',
        'primary': '#27374D',
        'secondary': '#526D82',
        'bgMain':'#C4DFDF',
        'bgOver':'#D2E9E9',
        'bgTransparent':"#f7ffe587"
      },
      fontFamily: {
        'secondary': ['Montserrat', 'sans-serif'],
        'primary': ['Poppins', 'sans-serif'],
        'logo': ['Montserrat', 'sans-serif'],

      },
    },
  },
  plugins: [],
}