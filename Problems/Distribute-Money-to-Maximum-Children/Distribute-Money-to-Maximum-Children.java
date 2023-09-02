class Solution {
    public int distMoney(int money, int children) {
        if (children > money)
            return -1;
        money -= children;
        int res = Math.min(money / 7, children);
        money -= res * 7;
        if (res == children && money != 0)
            return res - 1;
        if (res >= children - 1 && money == 3)
            res--;
        return res;
    }
}
