'use strict';

// Include dependencies
const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

// Define variables
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'app', 'manifest.webmanifest')));
const shortName = manifest.short_name;
const localDir = path.join(__dirname, 'tmp', 'local');
const cwd = path.join(localDir, shortName);

// Clean localDir, build project, and launch.
rimraf.sync(localDir);
cp.execSync(`manifoldjs http://localhost:3000/ -d ${localDir} -p windows10 -l info`, {stdio: [0,1,2]});
cp.execSync(`manifoldjs run windows10`, { stdio: [0,1,2], cwd: cwd });
