import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;
    for(let number of nums) {
        res = res^number;
    }

    return res;
};

/**
 * Since in XOR Operations 0^0 = 0 and 1^1 = 0.
 * A^A=0
 * A^B^A=B
 * (A^A^B) = (B^A^A) = (A^B^A) = B
 */

test('should return 1 if input is [2,2,1]', () => {
    assert.deepEqual(1, singleNumber([2,2,1]));
})

test('should return 4 if input is [4,1,2,1,2]', () => {
    assert.deepEqual(4, singleNumber([4,1,2,1,2]));
})

test('should return 1 if input is [1]', () => {
    assert.deepEqual(1, singleNumber([1]));
})
