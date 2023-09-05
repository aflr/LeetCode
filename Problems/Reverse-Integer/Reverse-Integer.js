/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s = x + "";
    if (x < 0)
        s = s.substring(1).split('').reverse().join('') * (-1);
    else
        s = s.split('').reverse().join('');
    if (s < -(2**31) || s > 2**31 - 1)
        return 0;
    return s;
};
