//EM5 style call
//This should be used if the package.json just uses "node" to automate
//var chalk = require('chalk');

//When "babelnode" is used in the package.json we can use EM6 style calls.
import chalk from 'chalk';

console.log(chalk.green('Starting the app in dev mode')); //eslint-disable-line no-console
