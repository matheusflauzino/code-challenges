import { test } from 'node:test';
import { strict as assert } from 'node:assert';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] == target) return [i,j]
    }
  }
};




test('should return [0,1] if nums = [2,7,11,15], target = 9', () => {
  assert.deepEqual([0,1],twoSum([2,7,11,15],9));
})

test('should return [0,1] if nums = [3,2,4], target = 6', () => {
  assert.deepEqual([1,2],twoSum([3,2,4], 6));
})

test('should return [0,1] if nums = [3,3], target = 6', () => {
  assert.deepEqual([0,1],twoSum([3,3], 6));
})