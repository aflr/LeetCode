/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    // Find indices to remove
    let n = 0, indexToRemove = [];
    for (let i = 0; i < s.length; i++)
        if (s[i] == '(' && n++ == 0)
            indexToRemove.push(i);
        else if (s[i] == ')' && --n == 0)
            indexToRemove.push(i);
    // Make new string without indices
    let str = "";
    for (let i = 0, j = 0; i < s.length; i++) {
        if (indexToRemove[j] == i) {
            j++;
            continue;
        }
        str += s.at(i);
    }
    return str;
    // This way of making the new string is much faster than the much shorter:
    // return s.split("").filter((e, j) => !indexToRemove.includes(j)).join("");
};
