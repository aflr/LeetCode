/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let end = num.length;
    while (end--)
        if ("13579".includes(num.at(end)))
            return num.substring(0, end + 1);
    return "";
};
