import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let aux = nums[0];
    let uniques = [];

    uniques.push(nums[0])
    for(const num of nums) {
        if(aux !== num) {
            uniques.push(num);
            aux = num;
        }
    }

    const add = nums.length - uniques.length;
    for(let i = 0; i < add; i++) {
        console.log('aqui')
        uniques.push("_")
    }

    return uniques;
};
/*
console.log(removeDuplicates([0,1,2]))
console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
*/

test('should return "2, nums = [1,2,_]" if input is [1,1,2]', () => {
    assert.deepEqual("2, nums = [1,2,_]",removeDuplicates([1,1,2]));
})


test('should return "5, nums = [0,1,2,3,4,_,_,_,_,_]" if input is [0,0,1,1,1,2,2,3,3,4]', () => {
    assert.deepEqual("5, nums = [0,1,2,3,4,_,_,_,_,_]",plusOne([9]));
})
