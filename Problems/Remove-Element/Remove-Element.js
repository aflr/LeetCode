/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0, end = nums.length - 1;
    for (; i <= end; i++)
        if (nums[i] == val) {
        while (nums[end] == val && end > i)
            end--;
        nums[i] = nums[end--];
    }
    return end + 1;
};
