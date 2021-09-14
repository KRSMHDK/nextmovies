module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
      colors: {
        header: '#032541',
      },
      padding: {
        'p-60%': '60%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    // eslint-disable-next-line global-require
    require('@tailwindcss/line-clamp'),
  ],
};
