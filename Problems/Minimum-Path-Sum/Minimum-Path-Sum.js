/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    h = grid.length; w = grid[0].length;
    let sum = new Array(h);
    for (let i = 0; i < h; i++) {
        sum[i] = new Array(w);
        for (let j = 0; j < w; j++)
            sum[i][j] = h * w * 200;
    }
    flood(0, sum, grid, 0, 0);
    return sum[h - 1][w - 1];
};

function flood(k, sum, grid, y, x) {
    if (grid[y][x] + k < sum[y][x]) {
        sum[y][x] = grid[y][x] + k;
        if (y + 1 < h)
            flood(sum[y][x], sum, grid, y + 1, x);
        if (x + 1 < w)
            flood(sum[y][x], sum, grid, y, x + 1);
    }
}
