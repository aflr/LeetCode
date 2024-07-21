/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const N = nums.length;
    nums.sort((a, b) => a - b);
    let solution = [];
    for (let i = 0; i < N - 2; i++) {
        if (nums[i] > 0) break;
        if (i && nums[i] == nums[i - 1]) continue;
        let [j, k] = [i + 1, N - 1];
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum == 0) {
                solution.push([nums[i], nums[j++], nums[k--]]);
                while (j < k && nums[j] == nums[j - 1]) j++;
                while (j < k && nums[k] == nums[k + 1]) k--;
            } else if (sum < 0) {
                j++;
            } else { 
                k--;
            }
        }
    }
    return solution;
};
