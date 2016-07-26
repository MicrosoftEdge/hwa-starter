'use strict';

var program = require('commander');

program
  .command('generate <env> <host>', 'Generate an app at either [local, prod].')
  .command('launch <env>', 'Command to launch app pointing at either [local, prod].')
  .command('package', 'Package the prod app for Store submission.')
  .parse(process.argv);
