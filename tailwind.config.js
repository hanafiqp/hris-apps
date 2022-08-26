module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      popins: ['Poppins-Medium'],
    },
    extend: {
      fontFamily: {
        popins: ['Poppins-Medium'],
      },
      backgroundImage: {
        'gradient-blue-skies': "url('/assets/imgs/gradient-blue-skies.jpg')",
      },
      colors: {
        primary: {
          100: '#DBE6F9',
          200: '#b6cef2',
          300: '#92b5ec',
          400: '#6d9ce6',
          500: '#4983e0',
          600: '#246bd9',
          700: '#0052d3',
          800: '#002ba1',
          900: '#003281',
        },
      },
    },
  },
  plugins: [],
};
