class Solution {
    public boolean checkString(String s) {
        return java.util.regex.Pattern.matches("a*b*", s);
    }
}
