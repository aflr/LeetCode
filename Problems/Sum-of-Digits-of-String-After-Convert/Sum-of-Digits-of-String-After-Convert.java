class Solution {
    private static final Map<Character, String> LU = new HashMap<>();
    static {
        for (int i = 0; i < 26; i++)
            LU.put((char) ('a' + i), Integer.toString(i + 1));
    }

    public int getLucky(String s, int k) {
        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray())
            sb.append(LU.get(c));
        int n = digitSum(sb.toString());
        for (int i = 1; i < k; i++)
            n = digitSum(Integer.toString(n));
        return n;
    }

    private static int digitSum(String s) {
        int n = 0;
        for (char c : s.toCharArray())
            n += Character.digit(c, 10);
        return n;
    }
}
