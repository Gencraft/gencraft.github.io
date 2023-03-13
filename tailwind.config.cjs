/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans']
      },
      animation: {
        text:'text 4s ease infinite',
      },
      keyframes: {
        text: {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    }
    }
    
  },
  plugins: [
    require('flowbite/plugin')
]
}