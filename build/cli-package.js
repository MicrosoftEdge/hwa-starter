'use strict';

var cp = require('child_process'),
    program = require('commander'),
    fs = require('fs'),
    path = require('path');

program
  .action(action)
  .parse(process.argv);

function action() {
  var manifest =
    JSON.parse(fs.readFileSync(path.join(__dirname, '../app', 'manifest.webmanifest')));

  var shortName = manifest.short_name,
      cwd = path.join(__dirname, '../tmp', 'prod', shortName);

  cp.execSync('package -p windows10', { stdio: [0, 1, 2], cwd: cwd });
}
