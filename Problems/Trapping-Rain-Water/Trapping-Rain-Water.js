/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
        // Arrays to determine the maximum water height supported from the left and right at any index
        let leftMax = new Array(height.length), rightMax = new Array(height.length);
        // Initialize arrays
        leftMax[0] = height[0];
        rightMax[height.length - 1] = height[height.length - 1];
        // Calculate array values
        for (let i = 1; i < height.length; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
            rightMax[height.length - i - 1] = Math.max(rightMax[height.length - i], height[height.length - i - 1]);
        }
        // Calculate total water trapped, as the sum of minimum (left, right) minus bar height at all indices
        let water = 0;
        for (let i = 0; i < height.length; i++)
            water += Math.min(leftMax[i], rightMax[i]) - height[i];
        return water;
};
