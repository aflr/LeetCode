/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    const l = s.toUpperCase();
    let kc = 0;
    for (let i = 1; i < l.length; i++)
        kc += l.at(i) != l.at(i - 1);
    return kc;
};
