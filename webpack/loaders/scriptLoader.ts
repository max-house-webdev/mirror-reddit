import { extensions } from '../fileStructure';
const { script, typescript } = extensions;

const scriptLoader = [
  {
    test: typescript,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },

  {
    test: script,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
];

export default scriptLoader;
