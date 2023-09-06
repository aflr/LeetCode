/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let abc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < magazine.length; i++)
        abc[magazine.charCodeAt(i) - 97] += 1;
    for (let i = 0; i < ransomNote.length; i++)
        if (--abc[ransomNote.charCodeAt(i) - 97] < 0)
            return false;
    return true;
};
