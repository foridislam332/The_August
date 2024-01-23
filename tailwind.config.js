/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#ea0000',
        'blue': '#2a68f8',
        'dark': '#282828',
        'gray': '#666',
        'lightGray': '#727272',
        'darkWhite': '#ddd',
      },
      boxShadow: {
        'custom': '0px 16px 48px rgba(39, 39, 39, 0.1)',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1320px',
    },
    fontFamily: {
      'PlayFair': ['Playfair Display', "serif"]
    }
  },
  plugins: [require("daisyui")],
=======
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
>>>>>>> 6b830c3c07ee179a4919f30b7af24657434427b1
}

