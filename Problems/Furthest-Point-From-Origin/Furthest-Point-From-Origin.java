class Solution {
    public int furthestDistanceFromOrigin(String moves) {
        int[] ct = {0, 0, 0};
        for (char c : moves.toCharArray())
            switch (c) {
                case 'L': ct[1]++; break;
                case 'R': ct[2]++; break;
                case '_': ct[0]++;
            }
        return ct[0] + Math.abs(ct[1] - ct[2]);
    }
}
