#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const convertBTC = require('./convertBTC');

program
  .version(pkg.version)
  .description('Convert Bitcoin to any currency defined')
  .option('-C, --currency <currency>', 'Currency to be conveted. (Default: USD)')
  .option('-A, --amount <ammount>', 'Value in Bitcoin to be converted. (Default: 1)')
  .parse(process.argv);

console.log(convertBTC(program.currency, program.amount));
