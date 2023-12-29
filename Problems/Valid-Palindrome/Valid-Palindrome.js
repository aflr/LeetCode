/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toUpperCase().replaceAll(/[^0-9A-Z]/g, '');
    for (let i = 0, j = s.length - 1; i < j; i++, j--)
        if (s.at(i) != s.at(j))
            return false;
    return true;
};
