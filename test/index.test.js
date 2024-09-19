import { strict as assert } from 'assert';
import { calculate } from '../index.js';

describe('calculate', function () {
  it('should return 5 for addition of 2 and 3', function () {
    assert.strictEqual(calculate(2, 3, 'addition'), 5);
  });

  it('should return -1 for subtraction of 2 and 3', function () {
    assert.strictEqual(calculate(2, 3, 'subtraction'), -1);
  });

  it('should return error for dividion', function () {
    assert.strictEqual(calculate(2, 3, 'division'), -1);
  });

});


