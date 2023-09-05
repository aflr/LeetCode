class Solution {
    public boolean isPalindrome(int x) {
        char[] n = Integer.toString(x).toCharArray();
        int s = 0, e = n.length - 1;
        while (s < e) {
            if (n[s++] != n[e--])
                return false;
        }
        return true;
    }
}
