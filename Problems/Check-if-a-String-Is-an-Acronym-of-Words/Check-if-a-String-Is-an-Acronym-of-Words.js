/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if (s.length != words.length)
        return false;
    for (let i = words.length - 1; i >= 0; i--)
        if (s.charAt(i) != words[i].charAt(0))
            return false;
    return true;
};
