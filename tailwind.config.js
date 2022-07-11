/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
        'tfgreen' : '#00502f',
        'tforange' : '#f47A34',
        'tfbackground' : '#F5F6F8',
        'tabsOff' : '#7F7F7F'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        switch: {
          '0%, 100%' : {translate: 20}
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
    // borderRadius: {
    //   'profilePic' : 
    // }
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}
