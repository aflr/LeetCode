class Solution {

    private static int h, w, sum[][];

    public int minPathSum(int[][] grid) {
        h = grid.length; w = grid[0].length;
        sum = new int[h][w];
        for (int i = 0; i < h; i++)
            Arrays.fill(sum[i], Integer.MAX_VALUE);
        flood(0, grid, 0, 0);
        return sum[h - 1][w - 1];
    }

    private static void flood(int k, int[][] grid, int y, int x) {
        if (grid[y][x] + k < sum[y][x]) {
            sum[y][x] = grid[y][x] + k;
            if (y + 1 < h)
                flood(sum[y][x], grid, y + 1, x);
            if (x + 1 < w)
                flood(sum[y][x], grid, y, x + 1);
        }
    }
}
