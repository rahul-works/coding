/**
 * @param {number[]} prices
 * @return {number}
 * Example:

Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    } else if (prices.length === 2 && prices[0]<prices[1]) {
        return prices[1]-prices[0];
    } else if (prices.length === 2 && prices[0]>prices[1]) {
        return 0;
    }
    
    let dp = [];
    dp[0] = [];
    //Day 0
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    console.log(dp);
    // Day 1
    dp[1] = [];
    dp[1][0] = Math.max(dp[0][0], dp[0][1] + prices[1]);
    dp[1][1] = Math.max(dp[0][1], dp[0][0]-prices[1]);
    console.log(dp);
    for (let p = 2; p < prices.length; p++) {
        dp[p] = [];
        dp[p][0] = Math.max(dp[p-1][0], dp[p-1][1]+prices[p]);
        dp[p][1] = Math.max(dp[p-1][1], dp[p-2][0]-prices[p]); //cool down
        console.log(dp);
    }

    return dp[prices.length-1][0];
};

console.log(maxProfit([1,2,3,0,2]));
// console.log(maxProfit([1,2,4]));