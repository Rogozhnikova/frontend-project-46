#!/usr/bin/env node

import { program } from 'commander'
import genDiff from '../index.js';

program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
program.parse()