// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    let min = Number.MAX_SAFE_INTEGER
    let max = 0
    prices.forEach((v, i) => {
        if (v < min) {
            min = v
            max = 0
        } else if (v > max && v > min) {
            max = v
            if (max - min > profit) {
                profit = max - min
                max = 0
            }
        }
    })
    return profit
};