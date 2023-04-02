import { extensions } from '../fileStructure';
const { image } = extensions;

const imageLoader = [
  {
    test: image,
    type: 'asset/resource',
  },
];

export default imageLoader;
