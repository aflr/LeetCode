const KB = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
];

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length == 0) return [];
    let nums = [''];
    for (const d of digits) {
        let tmp = [...nums], newnums = [];
        for (const l of KB[d - 2])
            tmp.forEach(e => newnums.push(e + l));
        nums = newnums;
    }
    return nums;
};
