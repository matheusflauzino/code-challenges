/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const arrayResult = [];
    for(let i = 0; i < arr.length; i++) {
        if(fn( arr[i],i)) arrayResult.push(arr[i])
    }

    return arrayResult;
};

const greaterThan10 = (n) => n > 10;

console.log(greaterThan10(12));
console.log(greaterThan10(10));
console.log(greaterThan10(9));

console.log(filter([0,10,20,30],greaterThan10))