class Solution {
    public boolean isValidSudoku(char[][] board) {
        for (int i = 0; i < 9; i++)
            for (int j = 0; j < 9; j++)
                if (board[i][j] != '.' && !valid(board[i][j], board, i, j))
                    return false;
        return true;
    }

    private static boolean valid(char k, char[][] board, int i, int j) {
        return validRow(k, board, i, j) && validCol(k, board, i, j) && validSquare(k, board, i, j);
    }
    private static boolean validRow(char k, char[][] board, int row, int col) {
        for (int i = 0; i < 9; i++)
            if (i != col && board[row][i] == k)
                return false;
        return true;
    }
    private static boolean validCol(char k, char[][] board, int row, int col) {
        for (int i = 0; i < 9; i++)
            if (i != row && board[i][col] == k)
                return false;
        return true;
    }
    private static boolean validSquare(char k, char[][] board, int row, int col) {
        for (int i = 0; i < 3; i++)
            for (int j = 0; j < 3; j++)
                if ((row / 3 * 3 + i != row || col / 3 * 3 + j != col)
                    && board[row / 3 * 3 + i][col / 3 * 3 + j] == k)
                    return false;
        return true;
    }
}
