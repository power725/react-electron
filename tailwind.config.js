module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       zIndex: {      
       '60': 60,
       '70': 70,
       '100': 100
      },
      colors: {
        'gray': {
          'lightest': '#F5F7FA',
          'light': '#EDF1F5',
          'normal': '#C4C7E0',
          'dark': '#617691',
          'darkest': '#666666'
        }
      },
      width: {
        '13': '3.25rem',
        '42': '10.5rem'
      },
      height: {
        '13': '3.25rem'
      },
      padding: {
        '13': '3.25rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("@tailwindcss/forms")({
      strategy: 'class',
    })
  ],
  important: true
}
