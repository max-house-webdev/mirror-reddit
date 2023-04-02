import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import nodemon from 'nodemon';
import express from 'express';
// webpack configs
import webpackServerConfig from '../webpack/webpack.server';
import webpackClientConfig from '../webpack/webpack.client';

import { dir } from '../webpack/fileStructure';

// client side
const clientCompiler = webpack(webpackClientConfig);

const hmrServer = express();

hmrServer.use(
  webpackDevMiddleware(clientCompiler, {
    serverSideRender: true,
    writeToDisk: true,
    stats: 'errors-only',
    publicPath: webpackClientConfig.output?.publicPath,
  })
);

hmrServer.use(
  webpackHotMiddleware(clientCompiler, { path: `${dir.static}/__webpack_hmr` })
);

const hmrServerPort = 3001;

hmrServer.listen(hmrServerPort, () => {
  console.log(
    `[dev.ts] >> HMR server started successfully on http://localhost: ${hmrServerPort}`
  );
});

// server side
const serverCompiler = webpack(webpackServerConfig);

serverCompiler.run((err) => {
  const compilationSuccessful = () =>
    console.log('[dev.ts] >> Server side compilation successful');

  err ? cathError(err) : compilationSuccessful();

  const serverIsWatching = () =>
    console.log('[dev.ts] >> Server is watching...');

  serverCompiler.watch({}, (err) => {
    err ? cathError(err) : serverIsWatching();
  });

  const SERVER_DIR = webpackServerConfig.output?.path;
  const CLIENT_DIR = webpackClientConfig.output?.path;

  const SERVER = path.format({
    dir: SERVER_DIR,
    base: webpackServerConfig.output?.filename as string,
  });

  if (SERVER_DIR && CLIENT_DIR && SERVER) {
    nodemon({
      script: SERVER,
      watch: [SERVER_DIR, CLIENT_DIR],
    });
  } else {
    console.log(
      `[dev.ts] >> Cannot resolve path 
      SERVER_DIR is ${SERVER_DIR}
      CLIENT_DIR is ${CLIENT_DIR} 
      SERVER is ${SERVER}`
    );
  }
});

function cathError(err: Error) {
  console.log(`[dev.ts] >> Compilation failed! Error: ${err}`);
}
