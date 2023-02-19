/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'imgLogin': "url(./src/assets/imgLogin.svg)"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#283078',
        'secondary': '#7BCA9C',
        'terciary': '#FDFDFD',
        'terciary-text': '#F3F3F3',
      })
    },
  },
  plugins: [],
}

