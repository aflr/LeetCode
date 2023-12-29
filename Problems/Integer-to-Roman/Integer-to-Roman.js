/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const IR = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM']
    ];
    return IR[3][~~(num / 1000)] + IR[2][~~(num / 100) % 10] + IR[1][~~(num / 10) % 10] + IR[0][num % 10];
};
