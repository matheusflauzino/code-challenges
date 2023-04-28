/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = Array(n + 1).fill(0);
    let offset = 1;
    for(let i = 1; i< n + 1; i++) {
        if(offset*2 === i) offset = i;
        result[i] = 1 + result[i - offset];
    }

    return result;
};

console.log(countBits(2))
console.log(countBits(5))
console.log(countBits(3))