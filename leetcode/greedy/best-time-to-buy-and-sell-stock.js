import { test } from 'node:test';
import { strict as assert } from 'node:assert';
/**
 * @param {number[]} prices
 * @return {number}
 */

//O(n2)
/*var maxProfit = function(prices) {
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if(profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
};*/

//O(n) 
var maxProfit = function(prices) {
    if (prices.length === 0) {
        return 0;
    }
    
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    
    return maxProfit;
}

/**
 * Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */
test('should return 2 if input is [7,1,5,3,6,4]', () => {
    assert.deepEqual(5,maxProfit([7,1,5,3,6,4]));
})

/**
 * Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */
test('should return 0 if input is [7,6,4,3,1]', () => {
    assert.deepEqual(0,maxProfit([7,6,4,3,1]));
})

test('should return 9 if input is [7,6,4,3,1,10]', () => {
    assert.deepEqual(9,maxProfit([7,6,4,3,1,10]));
})