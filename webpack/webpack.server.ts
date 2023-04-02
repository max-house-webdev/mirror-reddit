/**
 ** server config
 * */
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

import { setMode, resolve, setDevtool, entry, output, plugins } from './config';
import { serverLoaders } from './loaders';

const webpackServerConfig: Configuration = {
  mode: setMode(),

  target: 'node',

  resolve: resolve.server,

  devtool: setDevtool(),

  entry: entry.server,

  output: output.server,

  externals: [nodeExternals()],

  optimization: {
    minimize: false,
  },

  plugins: plugins.server,

  module: {
    rules: [...serverLoaders],
  },
};

export default webpackServerConfig;
