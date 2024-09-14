/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let count = 0, max = 0, longest = 0;
    for (let i = 0; i < nums.length; i++)
        if (nums[i] > max) {
            max = nums[i];
            longest = count = 1;
        } else if (nums[i] == max)
            longest = Math.max(longest, ++count);
        else
            count = 0;
    return longest;
};
