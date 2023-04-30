/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastZero = 0;
    for(let i = 0; i < nums.length; i++) {
       if(nums[i] !== 0) {
        const aux  = nums[lastZero];
        nums[lastZero]  = nums[i];
        nums[i] = aux;
        lastZero++
       }
    }

    console.log(nums)
};

moveZeroes([0,1,0,3,12])


var movesGreaterThanTen= function (nums) {
    let lastGreaterThanTen = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < 10) {
            const aux = nums[lastGreaterThanTen];
            nums[lastGreaterThanTen] = nums[i];
            nums[i] = aux;
            lastGreaterThanTen++

        }
    }

    console.log(nums);
}

movesGreaterThanTen([10,12,1,2,13,3,4,11,5])
