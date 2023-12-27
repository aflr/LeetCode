/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    for (var l = 0, r = 0, m = 0; r < s.length; m = Math.max(m, r - l), r++)
        while (s.substring(l, r).includes(s.at(r)))
            l++;
    return m + 1;
};
