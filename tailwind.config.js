/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        '1280':'1280px',
        '100':'100px',
        '1200':'1200px'
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
      gap:{
        '30':'30px'
      } 
      
    },
  },
  plugins: [],
}