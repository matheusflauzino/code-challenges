/**
 * @param {number} n
 * @return {number}
 */

/** recursion
var climbStairs = function(n) {
    if(n==1) return 1;
    if(n==2) return 2;
    return climbStairs(n-1) + climbStairs(n-2);
};
 */

var climbStairs = function(n) {
    if(n==1) return 1;
    if(n==2) return 2;
    let ways = [];
    ways[0] = 1;
    ways[1] = 2;
    for(let i = 2; i < n; i++) {
        ways[i] = ways[i-1] + ways[i-2];
    }
    return ways[n-1]
};

console.log(climbStairs(2))
console.log(climbStairs(3))