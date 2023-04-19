import { Server } from 'http';

import del from 'del';
import { series, task } from 'gulp';
import portfinder from 'portfinder';
import * as yargs from 'yargs';

import config from '../config';
import cypress from '../plugins/gulp-cypress';
import webpackPlugin from '../plugins/gulp-webpack';

import { forceClose, serve } from './serve';

const { paths } = config;

const argv = yargs.option('skipBuild', {}).option('testNamePattern', { alias: 't' }).argv;

task('test:e2e:clean', () => del(paths.e2eDist(), { force: true }));

task('test:e2e:build', cb => {
  webpackPlugin(require('../webpack/webpack.config.e2e').default, cb);
});

let server: Server;
task('test:e2e:serve:start', async () => {
  const serverPort = await portfinder.getPortPromise({ port: config.e2e_port });

  // Assign a port to make it visible for "test:e2e:run" task
  process.env.E2E_PORT = String(serverPort);

  server = await serve(paths.e2eDist(), config.server_host, serverPort, app =>
    app.get('/favicon.ico', (req, res) => res.status(204)),
  );
});

task('test:e2e:serve:stop', () => forceClose(server));
task('test:e2e:serve', series('test:e2e:build', 'test:e2e:serve:start'));

task('test:e2e:run', cb => {
  const serverHost = 'localhost';
  const e2ePort = Number(process.env.E2E_PORT) || 8082;
  const serverUrl = `http://${serverHost}:${e2ePort}`;

  return cypress({ serverUrl })(cb);
});

task(
  'test:e2e',
  series(
    ...(argv.skipBuild ? [] : ['test:e2e:clean', 'test:e2e:build']),
    'test:e2e:serve:start',
    'test:e2e:run',
    'test:e2e:serve:stop',
  ),
);
