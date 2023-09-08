/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        '1280':'1280px',
        '1200':'1150px'
      },
      colors:{
        'musicalMist':'#F7EBE5'
      },
      spacing:{
        '124':'124px',
        '422':'422px',
      },
      fontSize:{
        '42':'42px'
      },
    },
  },
  plugins: [],
}