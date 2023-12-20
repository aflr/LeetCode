/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);
    return prices[0] + prices[1] <= money ? money - prices[0] - prices[1] : money;
};
