import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const sort = nums.sort((a, b) => a - b)
    for (let i = 0; i < sort.length - 1; i++) {
        if (sort[i] === sort[i + 1]) return true;
    }
    return false;
};

test('should return true if nums = [1,2,3,1]', () => {
    assert.deepEqual(true, containsDuplicate([1, 2, 3, 1]))
});

test('should return false if nums = [1,2,3,4]', () => {
    assert.deepEqual(false, containsDuplicate([1, 2, 3, 4]))
});

test('should return true if nums = [1,1,1,3,3,4,3,2,4,2]', () => {
    assert.deepEqual(true, containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
});
