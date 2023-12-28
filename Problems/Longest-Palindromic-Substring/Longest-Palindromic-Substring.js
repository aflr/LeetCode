/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1)
        return s;
    let maxlen = 1, start = 0, end = 1;
    for (let i = 0; i < s.length; i++) {
        // Find odd length palindromes (1 char as center)
        for (let l = 1; i - l >= 0 && i + l < s.length; l++)
            if (s.at(i - l) != s.at(i + l))
                break;
            else if (l * 2 + 1 > maxlen) {
                maxlen = l * 2 + 1;
                start = i - l;
                end = i + l + 1;
            }
        // Find even length palindromes (2 chars as center)
        if (i + 1 < s.length && s.at(i) == s.at(i + 1))
            for (let l = 0; i - l >= 0 && i + 1 + l < s.length; l++)
                if (s.at(i - l) != s.at(i + 1 + l))
                    break;
                else if (l * 2 + 2 > maxlen) {
                    maxlen = l * 2 + 2;
                    start = i - l;
                    end = i + l + 2;
                }
    }
    return s.substring(start, end);
};
