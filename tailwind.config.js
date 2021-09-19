const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'coolgray':colors.coolGray,
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
       },
       boxShadow: {
        btn : '0 1px 2px rgba(0, 0, 0, 0.06),0 1px 3px rgba(0, 0, 0, 0.10)', 
        icon_shd : '0 4px 6px -2px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.10)',
      },
      textColor: {
        'coolgray': colors.coolGray,
      },
      borderColor:{
        'coolgray': colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
