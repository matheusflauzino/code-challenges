import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { join } from 'node:path';
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
  let sums = [];
  for(let i = 0; i < nums.length; i++) {
    let sum = 0;
    for(let j = 0; j < i+1; j++) {
      sum += nums[j];
    }
    sums.push(sum);
  }

  return sums;
};


test('should return [1,3,6,10] if nums = [1,2,3,4]', () => {
  assert.deepEqual([1,3,6,10],runningSum([1,2,3,4]));
})


test('should return [1,2,3,4] if nums = [1,1,1,1]', () => {
  assert.deepEqual([1,2,3,4],runningSum([1,1,1,1]));
})