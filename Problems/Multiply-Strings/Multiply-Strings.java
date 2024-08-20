class Solution {
    public String multiply(String num1, String num2) {
        if ("0".equals(num1) || "0".equals(num2))
            return "0";
        int[] ans = new int[num1.length() + num2.length()];
        for (int i = num1.length() - 1; i >= 0; i--) {
            int c = num1.charAt(i) - '0';
            for (int j = num2.length() - 1; j >= 0; j--) {
                ans[i + j + 1] += c * (num2.charAt(j) - '0');
                ans[i + j] = ans[i + j] + ans[i + j + 1] / 10;
                ans[i + j + 1] %= 10;
            }
        }
        return Arrays.stream(ans).mapToObj(String::valueOf)
                .reduce(String::concat).get().replaceFirst("^0+", "");
    }
}
