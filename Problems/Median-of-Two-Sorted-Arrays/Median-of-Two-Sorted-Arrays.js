/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Merge arrays, keeping sort
    let arr = [], i = 0, j = 0;
    while (i < nums1.length && j < nums2.length)
        arr.push(nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]);
    while (i < nums1.length)
        arr.push(nums1[i++]);
    while (j < nums2.length)
        arr.push(nums2[j++]);
    // Return median
    return arr.length % 2 ? arr[~~(arr.length / 2)] : (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
};
