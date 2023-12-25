/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1)
        return s;
    let arr = Array(numRows).fill('');
    for (let i = 0, j = 0, inc = 1; i < s.length; i++) {
        arr[j] += s.at(i);
        j += inc;
        if (j == 0 || j == numRows - 1)
            inc *= -1;
    }
    return arr.join('');
};
