import { extensions } from '../fileStructure';
const { svg } = extensions;

const svgLoader = [
  {
    test: svg,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  },
];

export default svgLoader;
