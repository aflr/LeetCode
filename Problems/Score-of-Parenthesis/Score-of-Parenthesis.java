class Solution {
    public int scoreOfParentheses(String s) {
        int score = 0;
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++)
            switch (s.charAt(i)) {
                case '(':
                    stack.push(score);
                    score = 0;
                    break;
                case ')':
                    score = stack.pop() + (score == 0 ? 1 : 2 * score);
                    break;
            }
        return score;
    }
}
