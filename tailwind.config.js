/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      fontFamily: {
        openSans: "'Open Sans', sans-serif",
        railway: "'Raleway', sans-serif",
      },
      colors: {
        intro: '#1c2431',
        main: '#181f2a',
        test: '#202a3c',
        footer: '#0b1523',
        white: '#fff',
        cyan: '#65e2d9',
        blue: '#339ecc',
        gradient: 'linear-gradient(90deg, rgba(101,226,217,1) 0%, rgba(51,158,204,1) 100%)',
        error: '#ff4242',
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}


