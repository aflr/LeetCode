void rotate(int* nums, int numsSize, int k){
    k %= numsSize;
    int *copy = (int *)malloc(sizeof(int) * numsSize);
    memcpy(copy, nums, sizeof(int) * numsSize);
    for (int i = 0; i < numsSize; i++)
        nums[i] = copy[(i + numsSize - k) % numsSize];
}
