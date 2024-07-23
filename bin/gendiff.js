#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  // .option('-V, --version', 'output the version number')
  // .option('-f, --format [type]  output format')
  // .option('-h, --help', 'output usage information')
  .action(() => {
    program.outputHelp();
  });

program.parse(process.argv);

export default program;