import { Configuration } from 'webpack';
import path from 'path';
import { dir } from '../fileStructure';

const dist = path.join(dir.root, dir.dist);

const publicPath = dir.static + '/';

const server: Configuration['output'] = {
  path: path.join(dist, dir.server),
  filename: 'server.js',
  publicPath,
};

const client: Configuration['output'] = {
  path: path.join(dist, dir.client),
  filename: 'client.js',
  publicPath,
};

export const output = { server, client };
