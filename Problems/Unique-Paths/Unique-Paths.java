class Solution {
    public int uniquePaths(int m, int n) {
        return choose(m + n - 2, Math.min(m, n) - 1);
    }

    private static int choose(int n1, int n2) {
        if (n2 == n1 || n2 == 0)
            return 1;
        if (n2 > n1 / 2)
            n2 = n1 - n2;
        long res = 1;
        for (int i = 1; i <= n2; i++) {
            res *= n1 - i + 1;
            res /= i;
        }
        return (int)res;
    }
}
