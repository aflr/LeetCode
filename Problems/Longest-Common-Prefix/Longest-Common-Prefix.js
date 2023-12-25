/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";
    let pre = strs[0], i = 1, j;
    for (; i < strs.length && pre.length > 0; pre = pre.substring(0, j), i++)
        for (j = 0; j < Math.min(pre.length, strs[i].length) && pre.at(j) == strs[i].at(j); j++);
    return pre;
};
