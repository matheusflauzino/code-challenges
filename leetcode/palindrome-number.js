import { test } from 'node:test';
import { strict as assert } from 'node:assert';

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    return String(x) === String(x).split('').reverse().join('');
};


test('should return true if input is 121', () => {
    assert.deepEqual(true, isPalindrome(121));
})


test('should return true if input is -121', () => {
    assert.deepEqual(false, isPalindrome(-121));
})

test('should return true if input is -121', () => {
    assert.deepEqual(false, isPalindrome(10));
})  
