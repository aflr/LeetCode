/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let ig = g.length - 1, is = s.length - 1, c = 0;
    g.sort((a, b) => a - b), s.sort((a, b) => a - b);
    while (ig >= 0 && g[ig] > s[is])
        ig--;
    for (; ig >= 0 && is >= 0; ig--)
        if (g[ig] <= s[is])
            c++, is--;
    return c;
};
