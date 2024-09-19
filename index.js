const ConflictVariable = 42;
const UsedVariable = 42;

if (UsedVariable === 42) {
  console.log('This will trigger ESLint errors');
}

export function calculate(a, b, operation) {
    if (operation == 'addition') { // Deliberately use == instead of ===
      return a + b;
    } else if (operation == 'subtraction') {
      return a - b;
    } else {
      throw new Error('Invalid operation');
    }
  }
  