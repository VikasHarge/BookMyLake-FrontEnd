/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      primary : '#FA6500',
      primaryhead : '#244789',
      secondary  : '#11DA00',
      secondarydark : '#148d09',
      primarywhite : '#ffff',
      primaryblack : '#160606',
      hovergray : '#E0E0E0',
      dropdown : '#170071',
      button1 : '#244789',
      button1hover : '#0b234f',
      button2 : '#FA6500',
      button2hover : '#c75000',
      pink : '#E62851',
    
      lighthead : '#00308818',
      lighthead2 : '#00308883',
      lightprimary : '#fa640013',
    },
    fontFamily : {
      primaryFont : ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
