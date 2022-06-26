/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let windowEnd = 1,
        windowStart = 0,
        maxProfit = 0;
    
    while (windowEnd < prices.length) {
        if (prices[windowStart] < prices[windowEnd]) {
            const currentProfit = prices[windowEnd] - prices[windowStart];
            maxProfit = Math.max(maxProfit, currentProfit);
        } else {
            windowStart = windowEnd;
        }
        windowEnd += 1;
    }
    return maxProfit;
};