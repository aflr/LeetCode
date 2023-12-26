/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let ans = [], evens = nums.filter(n => n % 2 == 0), odds = nums.filter(n => n % 2);
    for (let i = 0; i < evens.length; i++)
        ans.push(evens[i], odds[i]);
    return ans;
};
