/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length, middle;
    if (nums[0] >= target)
        return 0;
    if (nums[right] <= target)
        return right;
    while (left < right - 1) {
        middle = (left + right) >> 1;
        if (nums[middle] < target) {
            left = middle;
        } else if (nums[middle] > target) {
            right = middle;
        } else {
            return middle;
        }
    }
    return right;
};
