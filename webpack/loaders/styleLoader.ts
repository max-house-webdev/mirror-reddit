import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

import { TRenderSide } from '../types';
import { extensions } from '../fileStructure';
const { globalCss, css, globalScss, scss } = extensions;

import { isDev } from '../config';

export default function styleLoader(renderSide: TRenderSide): RuleSetRule[] {
  const clientCssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        mode: 'local',
        localIdentName: isDev()
          ? '[path][name]__[local]'
          : '[name]__[local]--[hash:base64:5]',
      },
    },
  };

  const serverCssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        mode: 'local',
        localIdentName: isDev()
          ? '[path][name]__[local]'
          : '[name]__[local]--[hash:base64:5]',
        //! next line server only
        exportOnlyLocals: true,
      },
    },
  };

  const serverStylesLoader: RuleSetRule[] = [
    // css
    {
      test: globalCss,
      use: ['css-loader'],
    },

    {
      test: css,
      exclude: globalCss,
      use: serverCssLoader,
    },
    // scss
    {
      test: [globalScss, scss],
      use: [serverCssLoader, 'postcss-loader', 'sass-loader'],
    },
  ];

  const clientStyleLoader: RuleSetRule[] = [
    // css
    {
      test: globalCss,
      use: [
        isDev() ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    },
    {
      test: css,
      exclude: globalCss,
      use: [
        isDev() ? 'style-loader' : MiniCssExtractPlugin.loader,
        clientCssLoader,
  
      ],
    },
    // scss
    {
      test: globalScss,
      use: [
        isDev() ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    },
    {
      test: scss,
      exclude: globalScss,
      use: [
        isDev() ? 'style-loader' : MiniCssExtractPlugin.loader,
        clientCssLoader,
        'postcss-loader',
        'sass-loader',
      ],
    },
  ];

  if (renderSide === 'server') return serverStylesLoader;

  if (renderSide === 'client') return clientStyleLoader;

  console.log('[styleLoader.ts] >> style loader error');

  return [];
}
