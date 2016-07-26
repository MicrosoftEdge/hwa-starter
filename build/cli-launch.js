'use strict';

var cp = require('child_process'),
    program = require('commander'),
    fs = require('fs'),
    path = require('path');

program
  .arguments('<env>')
  .action(action)
  .parse(process.argv);

function action(env) {
  var manifest =
    JSON.parse(fs.readFileSync(path.join(__dirname, '../app', 'manifest.webmanifest')));

  var shortName = manifest.short_name,
      cwd = path.join(__dirname, '../tmp', env, shortName);

  cp.execSync('manifoldjs run windows10', { stdio: [0, 1, 2], cwd: cwd });
}
