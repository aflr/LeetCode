/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let s = "1", ns = "";
    for (; --n; s = ns, ns = "")
        for (let i = 0, j = 0; i < s.length; ns += j + s.at(i), i += j, j = 0)
            while (s.at(i + j) == s.at(i))
                j++;
    return s;
};
