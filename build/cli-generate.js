'use strict';

var cp = require('child_process'),
    program = require('commander'),
    fs = require('fs'),
    path = require('path'),
    rimraf = require('rimraf');

program
  .arguments('<env> <host>')
  .action(action)
  .parse(process.argv);

function action(env, host) {
  var manifest =
    JSON.parse(fs.readFileSync(path.join(__dirname, '../app', 'manifest.webmanifest')));

  var shortName = manifest.short_name,
      localDir = path.join(__dirname, '../tmp', env),
      cwd = path.join(localDir, shortName);

  // Cleanup the local directory and the build project.
  rimraf.sync(localDir);
  cp.execSync('manifoldjs ' + host + ' -d ' + localDir + ' -p windows10 -l info', { stdio: [0, 1, 2] });
}
