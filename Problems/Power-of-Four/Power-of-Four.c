bool isPowerOfFour(int n) {
    return __builtin_popcount(n) == 1 && __builtin_ffs(n) % 2;
}
