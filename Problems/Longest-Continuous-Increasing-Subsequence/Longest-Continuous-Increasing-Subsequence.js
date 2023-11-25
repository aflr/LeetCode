/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = 1;
    for (let start = 0, end = 1; end < nums.length; max = Math.max(max, end++ - start + 1))
        if (nums[end] <= nums[end - 1])
            start = end;
    return max;
};
