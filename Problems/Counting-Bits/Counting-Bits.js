/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const max = 17; // Check bits 0-16
    let ans = [];
    for (let i = 0; i <= n; i++) {
        let b = 0;
        for (let j = 0; j < max; j++)
            if (i >> j & 1)
                b++;
        ans.push(b);
    }
    return ans;
};
