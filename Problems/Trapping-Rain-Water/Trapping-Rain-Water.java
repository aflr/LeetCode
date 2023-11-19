class Solution {
    public int trap(int[] height) {
        // Arrays to determine the maximum water height supported from the left and right at any index
        int[] leftMax = new int[height.length], rightMax = new int[height.length];
        // Initialize arrays
        leftMax[0] = height[0];
        rightMax[height.length - 1] = height[height.length - 1];
        // Calculate array values
        for (int i = 1; i < height.length; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
            rightMax[height.length - i - 1] = Math.max(rightMax[height.length - i], height[height.length - i - 1]);
        }
        // Calculate total water trapped, as the sum of minimum (left, right) minus bar height at all indices
        int water = 0;
        for (int i = 0; i < height.length; i++)
            water += Math.min(leftMax[i], rightMax[i]) - height[i];
        return water;
    }
}
