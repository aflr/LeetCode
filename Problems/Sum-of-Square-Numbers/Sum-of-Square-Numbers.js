/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(let a = 0; a * a <= c >> 1; a++) {
        let b2 = c - a * a;
        let b = ~~Math.sqrt(b2);
        if (b * b == b2)
            return true;
    }
    return false;
};
