import { Configuration } from 'webpack';
import path from 'path';
import { dir } from '../fileStructure';

const core = path.join(dir.root, dir.src, dir.core);

const server: Configuration['entry'] = [
  path.format({
    dir: path.join(core, dir.server),
    base: 'index.ts',
  }),
];

const hmrServerPort = 3001; // should match hmrServerPort in devServer

const client: Configuration['entry'] = [
  path.format({
    dir: path.join(core, dir.client),
    base: 'index.tsx',
  }),
  `webpack-hot-middleware/client?path=http://localhost:${hmrServerPort}${dir.static}/__webpack_hmr`,
];

export const entry = { server, client };
