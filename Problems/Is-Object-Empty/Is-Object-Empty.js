/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for (const k in obj)
        return false;
    return true;
};

/* Alternative solution:

var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};

*/
