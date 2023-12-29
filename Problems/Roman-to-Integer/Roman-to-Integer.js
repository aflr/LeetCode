/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let RI = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let n = RI[s.at(0)];
    for (let i = 1; i < s.length; i++) {
        n += RI[s.at(i)];
        if (RI[s.at(i)] > RI[s.at(i - 1)])
            n -= 2 * RI[s.at(i - 1)];
    }
    return n;
};
