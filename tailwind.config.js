module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coral: {
          default: 'hsl(360, 78%, 68%)',
          dark: 'hsl(360, 78%, 08%)',
        },
        darkGray: '#1A1A1A',
        darkGreen: '#58926F',
      },
    },
    boxShadow: {
      shad: '10px 10px 20px rgba(0, 0, 0, 0.3)',
    },
  },
  variants: {},
  plugins: [],
};
