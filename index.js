const chalk = require('chalk');
console.log(chalk.blue('It works'));

const UsedVariable = 42;

if (UsedVariable === 42) {
  console.log('This will trigger ESLint errors');
}
