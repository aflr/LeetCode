class Solution {
    public int[] plusOne(int[] digits) {
        int carry = 1, i = digits.length - 1;
        while (carry == 1 && i >= 0) {
            carry = 0;
            digits[i] += 1;
            if (digits[i] > 9) {
                carry = 1;
                digits[i] = 0;
            }
            i--;
        }
        if (carry == 0)
            return digits;
        int[] res = new int[digits.length + 1];
        res[0] = 1;
        return res;
    }
}
