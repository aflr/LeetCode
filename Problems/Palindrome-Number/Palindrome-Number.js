/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n = x + "";
    for (let s = 0, e = n.length - 1; s < e; s++, e--)
        if (n[s] != n[e])
            return false;
    return true;
};
