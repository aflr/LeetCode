class Solution {
    public int reverse(int x) {
        char[] cs = Integer.toString(x).toCharArray();
        for (int i = cs[0] == '-' ? 1 : 0, e = cs.length - 1; i < e; i++, e--) {
            char tmp = cs[i];
            cs[i] = cs[e];
            cs[e] = tmp;
        }
        try {
            return Integer.parseInt(String.valueOf(cs));
        } catch (RuntimeException ex) {
            return 0;
        }
    }
}
