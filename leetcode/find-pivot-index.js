import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let sum = nums.reduce((previus,current) => previus + current)
  let right = sum;
  let left = 0;

  for(let i = 0; i < nums.length; i++) {
    right -= nums[i];
    if(left == right) return i;
    left += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));

/**
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
 */
test('should return 3 if nums = [1,7,3,6,5,6]', () => {
  assert.deepEqual(3,pivotIndex([1,7,3,6,5,6]));
}) 


/**
 Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
 */
test('should return -1 if nums = [1,2,3]', () => {
  assert.deepEqual(-1,pivotIndex([1,2,3]));
}) 

/**
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 */
test('should return 0 if nums = [1,2,3]', () => {
  assert.deepEqual(0,pivotIndex([2,1,-1]));
}) 