class Solution {
    public int findComplement(int num) {
        return Integer.highestOneBit(num) * 2 - num - 1;
    }
}
