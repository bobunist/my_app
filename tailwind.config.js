/** @type {import('tailwindcss').Config} */


// const remark = require('remark')


module.exports = {
  content: [
    "./src/**/*.{html,ts,md}",
  ],
  theme: {
    extend: {
      colors: {
        'branded-grey': '#2D2F31',
        'input-grey': '#D9D9D9',
        'hint-grey': '#6A6F73',
        'secondary-grey': '#D1D7DC',
        'code-bg': '#EEEEEE',
        'section-grey': '#F7F9FA'
      },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      courier: ['Courier Prime', 'monospace'],
    }},
  },
  plugins: [],
}