import { extensions } from '../fileStructure';
const { font } = extensions;

const fontLoader = [
  {
    test: font,
    type: 'asset/resource',
  },
];

export default fontLoader;
