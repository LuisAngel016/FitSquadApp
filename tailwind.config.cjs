/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // 'imgLogin': "url(./src/assets/imgLogin.jpp)"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#283078',
        'secondary': '#7BCA9C',
        'terciary': '#FDFDFD',
        'quaternary': '#F1F1F1',
        'quinary': '#434981',
        'senary': '#EDEEF6',
      }),
      textColor: {
        'primary': '#F3F3F3',
        'secondary': '#000000',
        'terciary': '#616161',
        'quaternary': '#283078',
      },
      fontFamily: {
        FitSquad: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

