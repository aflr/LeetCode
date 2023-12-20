/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const m = img.length, n = img[0].length, res = [];
    for (let i = 0; i < m; i++) {
        res.push([]);
        for (let j = 0, adj = 0, sum = 0; j < n; res[i].push(~~(sum/adj)), adj = 0, sum = 0, j++)
            for (let k = i - 1; k <= i + 1; k++)
                for (let l = j - 1; l <= j + 1; l++)
                    if (k >= 0 && l >= 0 && k < m && l < n && ++adj)
                        sum += img[k][l];
    }
    return res;
};
