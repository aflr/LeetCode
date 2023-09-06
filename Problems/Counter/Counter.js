/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let c = n;
    return function() {
        return c++;
    };
};
