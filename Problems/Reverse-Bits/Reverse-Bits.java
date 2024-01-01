public class Solution {
    public int reverseBits(int n) {
        int r = 0;
        for (int b = Integer.SIZE - 1; b >= 0; b--)
            r |= (n >> b & 1) << (Integer.SIZE - 1 - b);
        return r;
    }
}
