import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let local_max = 0;
    let global_max = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < nums.length; i++) {
        local_max = Math.max(nums[i],nums[i] + local_max);
        if(local_max > global_max) {
            global_max = local_max;
        }
    }

    return global_max;
};

test('should return 6 if input is [-2,1,-3,4,-1,2,1,-5,4]', () => {
    assert.deepEqual(6, maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
});

test('should return 1 if input is [1]', () => {
    assert.deepEqual(1, maxSubArray([1]));
});

test('should return 23 if input is [5,4,-1,7,8]', () => {
    assert.deepEqual(23, maxSubArray([5,4,-1,7,8]));
});

