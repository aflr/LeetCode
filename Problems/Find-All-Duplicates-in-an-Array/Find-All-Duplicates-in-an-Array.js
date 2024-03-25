/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const set = new Set();
    const dups = [];
    for (let n of nums)
        if (set.has(n))
            dups.push(n);
        else
            set.add(n);
    return dups;
};
