import {
  Configuration,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { isDev, isProd } from './setMode';

const shared: Configuration['plugins'] = [
  new DefinePlugin({
    'process.env': JSON.stringify(process.env),
  }),
];

const server: Configuration['plugins'] = [...shared];

const clientDevPlugins: Configuration['plugins'] = [
  new CleanWebpackPlugin(),
  new HotModuleReplacementPlugin(),
];
const clientProdPlugins: Configuration['plugins'] = [
  new MiniCssExtractPlugin({
    filename: 'main.css',
  }),
];

const client = () => {
  if (isDev()) return [...shared, ...clientDevPlugins];

  if (isProd()) return [...clientProdPlugins];

  console.log('webpack>> setPlugin error');

  return [];
};

export const plugins = { server, client };
