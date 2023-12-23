/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    arr.forEach((e, i) => fn(e, i) ? filteredArr.push(e) : 0);
    return filteredArr;
};
