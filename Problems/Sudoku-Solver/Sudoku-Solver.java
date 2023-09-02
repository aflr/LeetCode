class Solution {
    public void solveSudoku(char[][] board) {
        boolean[][] mustStay = new boolean[9][9];
        for (int i = 0; i < 9; i++)
            for (int j = 0; j < 9; j++)
                mustStay[i][j] = board[i][j] != '.';
        solve(board, mustStay);
    }

    private static boolean solve(char[][] board, boolean[][] mustStay) {
        for (int i = 0; i < 9; i++)
            for (int j = 0; j < 9; j++) {
                if (board[i][j] != '.')
                    continue;
                for (char k = '1'; k <= '9'; k++)
                    if (valid(k, board, i, j)) {
                        board[i][j] = k;
                        if (solve(board, mustStay))
                            return true;
                        else if (!mustStay[i][j])
                            board[i][j] = '.';
                    }
                return false;
            }
        return true;
    }
    private static boolean valid(char k, char[][] board, int i, int j) {
        return validRow(k, board, i) && validCol(k, board, j) && validSquare(k, board, i, j);
    }
    private static boolean validRow(char k, char[][] board, int row) {
        for (int i = 0; i < 9; i++)
            if (board[row][i] == k)
                return false;
        return true;
    }
    private static boolean validCol(char k, char[][] board, int col) {
        for (int i = 0; i < 9; i++)
            if (board[i][col] == k)
                return false;
        return true;
    }
    private static boolean validSquare(char k, char[][] board, int row, int col) {
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                if (board[row / 3 * 3 + i][col / 3 * 3 + j] == k)
                    return false;
        return true;
    }
}
