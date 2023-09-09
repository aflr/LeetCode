/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var set = new Set();
    for (n of nums)
        set.has(n) ? set.delete(n) : set.add(n);
    return set.values().next().value;
};
