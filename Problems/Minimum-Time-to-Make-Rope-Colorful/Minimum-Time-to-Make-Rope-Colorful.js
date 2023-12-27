/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    const n = colors.length;
    let sum = 0;
    for (let i = 0, j, cs; i < n; i = j) {
        cs = [];
        for (j = i; j < n && colors[j] == colors[i]; j++)
            cs.push(neededTime[j]);
        cs.sort((a, b) => a - b);
        for (let k = 0; k < cs.length - 1; k++)
            sum += cs[k];
    }
    return sum;
};
