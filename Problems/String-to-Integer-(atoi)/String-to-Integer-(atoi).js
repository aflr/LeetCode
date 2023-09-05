/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    return Math.max(-(2**31), Math.min(2**31 - 1, parseInt(s) || 0));
};
