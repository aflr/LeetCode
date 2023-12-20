class Solution {

    /**
     * @param Integer[] $prices
     * @param Integer $money
     * @return Integer
     */
    function buyChoco($prices, $money) {
        sort($prices);
        return $prices[0] + $prices[1] <= $money ? $money - $prices[0] - $prices[1] : $money;
    }
}
