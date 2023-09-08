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
      backgroundImage:{
        'img1':"url('/img/Group-188.png')",
        'img2':"url('/img/Group-189.svg')",
        'img3':"url('/img/Group-190.png')",
        'img4':"url('/img/Group-191.png')",
        'img5':"url('/img/Group-192.png')",
        'img6':"url('/img/Group-193.png')",
      },
      gap:{
        '30':'30px'
      } 
      
    },
  },
  plugins: [],
}