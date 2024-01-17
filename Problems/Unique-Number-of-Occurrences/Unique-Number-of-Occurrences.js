/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const occMap = new Map();
    for (let n of arr)
        occMap.set(n, (occMap.get(n) ?? 0) + 1);
    const occArr = [...occMap.values()].sort((a, b) => a - b);
    for (let i = 1; i < occArr.length; i++)
        if (occArr[i - 1] == occArr[i])
            return false;
    return true;
};
