/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let lastVal = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            const aux = nums[lastVal];
            nums[lastVal] = nums[i]
            nums[i] = aux;
            lastVal++
        }
    }

    return lastVal;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
