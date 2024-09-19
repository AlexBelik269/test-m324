const chalk = require('chalk');
console.log(chalk.blue('It works'));


let myUnusedVariable = 42; // Unused variable and should be 'const'
const UsedVariable = 42;

if (UsedVariable == 42) { // Should use '===' instead of '=='
  console.log('This will trigger ESLint errors');
}
