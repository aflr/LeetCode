/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    const idx = nums.findIndex((n, i) => n !== i);
    return idx === -1 ? nums.length : idx;
};
