module.exports = {
  content: [ './src/**/*.{html,js,ts,jsx,tsx}' ],
  theme: {
    extend: {},
    screens: {
      'screens1': '700px',
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Add this line
  ],
};
