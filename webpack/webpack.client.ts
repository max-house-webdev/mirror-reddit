/**
 ** client config
 * */
import { Configuration } from 'webpack';

import { setMode, resolve, setDevtool, entry, output, plugins } from './config';
import { clientLoaders } from './loaders';

const webpackClientConfig: Configuration = {
  mode: setMode(),

  resolve: resolve.client,

  devtool: setDevtool(),

  entry: entry.client,

  output: output.client,

  plugins: plugins.client(),

  module: { rules: [...clientLoaders] },
};

export default webpackClientConfig;
