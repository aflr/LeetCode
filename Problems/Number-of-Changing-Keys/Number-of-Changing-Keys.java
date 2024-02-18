class Solution {
    public int countKeyChanges(String s) {
        s = s.toLowerCase();
        int changes = 0;
        for (int i = 1; i < s.length(); i++)
            if (s.charAt(i) != s.charAt(i - 1))
                changes++;
        return changes;
    }
}
