'use strict';

// Include dependencies
const cp = require('child_process');
const program = require('commander');
const fs = require('fs');
const path = require('path');

// Define program
program
  .action(action)
  .parse(process.argv);

function action() {
  const manifest = 
    JSON.parse(fs.readFileSync(path.join(__dirname, '../app', 'manifest.webmanifest')));
  const shortName = manifest.short_name;
  const cwd = path.join(__dirname, '../tmp', 'prod', shortName);

  cp.execSync(`package -p windows10`, { stdio: [0,1,2], cwd: cwd });
}