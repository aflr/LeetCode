/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let r = 0;
    for (let b = 32 - 1; b >= 0; b--)
        r |= (n >>> b & 1) << (32 - 1 - b);
    return r >>> 0;
};
