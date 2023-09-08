/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
        let len = nums.length;
        let res = new Array(len), left = new Array(len), right = Array(len);

        left[0] = 1;
        for (let i = 1; i < len; i++)
            left[i] = left[i - 1] * nums[i - 1];
        right[len - 1] = 1;
        for (let i = len - 2; i >= 0; i--)
            right[i] = right[i + 1] * nums[i + 1];
        for (let i = 0; i < len; i++)
            res[i] = left[i] * right[i];
        return res;
};
