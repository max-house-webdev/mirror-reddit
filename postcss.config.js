module.exports = {
  plugins: [
    'autoprefixer',

    {
      'postcss-preset-env': {
        stage: 2,
        browser: 'last 2 version',
      },
    },
  ],
};
