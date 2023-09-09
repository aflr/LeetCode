/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return choose(m + n - 2, Math.min(m, n) - 1);
};

function choose(n1, n2) {
    if (n2 == n1 || n2 == 0)
        return 1;
    if (n2 > n1 / 2)
        n2 = n1 - n2;
    let res = 1;
    for (let i = 1; i <= n2; i++) {
        res *= n1 - i + 1;
        res /= i;
    }
    return res;
}
