import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {number} x
 * @return {number}
 */
var plusOne = function(digits) {
    let n = digits.length; 
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    let result = new Array(n + 1).fill(0);
    result[0] = 1;
    return result;
};




test('should return [1,2,4] if input is [1,2,3]', () => {
    assert.deepEqual([1,2,4],plusOne([1,2,3]));
})


test('should return [1,0] if input is [9]', () => {
    assert.deepEqual([1,0],plusOne([9]));
})
