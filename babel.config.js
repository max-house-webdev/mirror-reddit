module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // use node current version
        },
        bugfixes: true,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],

  plugins: ['@loadable/babel-plugin'], // ssr

  ignore: [
    'node_modules',
    'dist', // distribution dir
  ],
};
