int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    *returnSize = 2;
    for (int i = 0; i < numsSize - 1; i++)
        for (int j = i + 1; j < numsSize; j++)
            if (nums[i] + nums[j] == target){
                int *arr = (int *)malloc(sizeof(int) * 2);
                arr[0] = i;
                arr[1] = j;
                return arr;
            }
    return (void *)0;
}
