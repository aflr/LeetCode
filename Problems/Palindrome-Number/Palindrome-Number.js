/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let n = x + "";
    let s = 0, e = n.length - 1;
    while (s < e) {
        if (n[s++] != n[e--])
            return false;
    }
    return true;
};
