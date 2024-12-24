/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
      },
      backgroundImage: {
          btn: 'linear-gradient(to right, #3B82F6, #A855F7)',
          main: 'linear-gradient(to right, #c4b7ee, #cae2f3)',
          'dark-form' : 'linear-gradient(180deg, #1E3A8A, #121212)',
          'dark-main' : 'linear-gradient(180deg, #2D2D34, #1A202C)',
          'dark-header' : 'linear-gradient(180deg, #0F2027, #203A43)',
          body : '#121212',
          img : "url('/Images/kai.jpg')"
      },
      fontFamily:{

      }
    },
  },
  darkMode: "class",
  plugins: [],
}

