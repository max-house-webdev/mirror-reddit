import { Configuration } from 'webpack';

import { isDev } from './setMode';

const shared = {
  modules: ['node_modules', 'src'],
  extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
};

const server: Configuration['resolve'] = { ...shared };

const client: Configuration['resolve'] = {
  ...shared,

  alias: {
    'react-dom': isDev() ? '@hot-loader/react-dom' : 'react-dom',
  },
};

export const resolve = { server, client };
