import fontLoader from './fontLoader';
import imageLoader from './imageLoader';
import scriptLoader from './scriptLoader';
import svgLoader from './svgLoader';
import styleLoader from './styleLoader';

const shared = [...scriptLoader, ...svgLoader, ...imageLoader, ...fontLoader];

const serverLoaders = [...shared, ...styleLoader('server')];

const clientLoaders = [...shared, ...styleLoader('client')];

export { serverLoaders, clientLoaders };
