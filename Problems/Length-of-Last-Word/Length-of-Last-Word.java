class Solution {
    public int lengthOfLastWord(String s) {
        var a = s.split(" ");
        return a[a.length - 1].length();
    }
}
