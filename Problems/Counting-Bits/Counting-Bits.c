int* countBits(int n, int* returnSize){
    int *res = malloc(sizeof(int) * (*returnSize = n + 1));
    for (int i = n; i >= 0; i--)
        res[i] = __builtin_popcount(i);
    return res;
}
