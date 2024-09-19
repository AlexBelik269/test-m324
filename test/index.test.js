import { strict as assert } from 'assert';
import { calculate } from '../index.js';

describe('calculate', function () {
  it('should return 5 for addition of 2 and 3', function () {
    assert.strictEqual(calculate(2, 3, 'addition'), 5);
  });

  it('should return -1 for subtraction of 2 and 3', function () {
    assert.strictEqual(calculate(2, 3, 'subtraction'), -1);
  });

  it('should throw an error for invalid operation', function () {
    assert.throws(() => calculate(2, 3, 'division'), /Invalid operation/);
  });

});


