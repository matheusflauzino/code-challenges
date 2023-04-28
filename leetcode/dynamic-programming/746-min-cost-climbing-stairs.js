/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let dp = Array(n).fill(0);
    dp[0] = cost[0]
    dp[1] = cost[1]

    for(let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i-2], dp[i-1]);
    }

    return Math.min(dp[n-1], dp[n-2]);
};

console.log(minCostClimbingStairs([10, 15 ,20]))
console.log(minCostClimbingStairs([  1 ,100, 1 ,1, 1 , 100, 1 , 1 ,100, 1 ]))