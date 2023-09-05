class Solution {
    public int numIslands(char[][] grid) {
        int num = 0;
        for (int i = 0; i < grid.length; i++)
            for (int j = 0; j < grid[0].length; j++)
                if (grid[i][j] == '1') {
                    num++;
                    sink(grid, i, j);
                }
        return num;
    }

    private static void sink(char[][] grid, int y, int x) {
        if (y < 0 || x < 0 || y >= grid.length || x >= grid[0].length || grid[y][x] != '1')
            return;
        grid[y][x] = '0';
        sink(grid, y - 1, x);
        sink(grid, y + 1, x);
        sink(grid, y, x - 1);
        sink(grid, y, x + 1);
    }
}
