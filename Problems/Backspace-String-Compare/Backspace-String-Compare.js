/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    const process = (str) => {
        let res = [];
        [...str].forEach(c => c == '#' ? res.pop() : res.push(c));
        return res.join('');
    };
    return process(s) == process(t);
};
