import fs from 'fs';
import path from 'path';

import { workspaceRoot } from '@fluentui/scripts-monorepo';
import { runPrettier } from '@fluentui/scripts-prettier';
import { sh } from '@fluentui/scripts-utils';
import through2 from 'through2';

const insideGitRepo = fs.existsSync(path.resolve(workspaceRoot, '.git'));

export default () =>
  through2.obj((file, enc, done) => {
    sh(`doctoc ${file.path} --github --maxlevel 4`)
      .then<any>(() => runPrettier([file.path]))
      .then<any>(() => insideGitRepo && sh(`git add ${file.path}`))
      .then(() => {
        done(null, file);
      })
      .catch(done);
  });
