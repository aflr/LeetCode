/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let b = 0, e = s.length - 1;
    while (b < e) {
        let tmp = s[b];
        s[b++] = s[e];
        s[e--] = tmp;
    }
};
