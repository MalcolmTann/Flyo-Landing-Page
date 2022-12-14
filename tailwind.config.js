/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scripts/main.js"],
  safelist: [],
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
        error: '#ff4242',
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      maxWidth: {
        '2xs': '12rem',
      },
      fontWeight: {
        light: '400',
        bold: '700'
      },
      screens: {
        '2xl': '1440px',
      },
    }
  },
  variants: {
    fill: ['hover', 'focus'],
  },
}


