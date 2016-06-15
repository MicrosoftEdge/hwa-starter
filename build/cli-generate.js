'use strict';

// Include dependencies
const cp = require('child_process');
const program = require('commander');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

// Define program
program
  .arguments('<env> <host>')
  .action(action)
  .parse(process.argv);

function action(env, host) {
  const manifest = 
    JSON.parse(fs.readFileSync(path.join(__dirname, 'app', 'manifest.webmanifest')));
  const shortName = manifest.short_name;
  const localDir = path.join(__dirname, 'tmp', env);
  const cwd = path.join(localDir, shortName);

  // Clean localDir, build project.
  rimraf.sync(localDir);
  cp.execSync(`manifoldjs ${host} -d ${localDir} -p windows10 -l info`, {stdio: [0,1,2]});
}
