/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = 0;
    for (let i = 0; i < nums.length; i++) {
        if (len == 0 || nums[len - 1] < nums[i])
            nums[len++] = nums[i];
        else
            nums[nums.findIndex(e => e >= nums[i])] = nums[i];
    }
    return len;
};
