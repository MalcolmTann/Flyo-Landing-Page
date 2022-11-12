/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        intro: '#1c2431',
        main: '#181f2a',
        test: '#202a3c',
        footer: '#0b1523',
        white: '#fff',
        gradient: 'linear-gradient(90deg, rgba(101,226,217,1) 0%, rgba(51,158,204,1) 100%)',
        error: '#ff4242',
      },
    },
  },
  plugins: [],
}


