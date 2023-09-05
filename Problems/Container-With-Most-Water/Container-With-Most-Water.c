int maxArea(int* height, int heightSize){
    int max = 0, left = 0, right = heightSize - 1;
    while (left < right) {
        max = fmax(max, fmin(height[left], height[right]) * (right - left));
        if (height[left] < height[right])
            left++;
        else
            right--;
    }
    return max;
}
