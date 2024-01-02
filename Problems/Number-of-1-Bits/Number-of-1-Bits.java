public class Solution {
    public int hammingWeight(int n) {
        return (int)Integer.toBinaryString(n).codePoints().filter(c -> c == '1').count();
    }
}
