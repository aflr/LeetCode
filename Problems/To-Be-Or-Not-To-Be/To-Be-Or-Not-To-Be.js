/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const err = (str) => { throw new Error(str) };
    return {
        toBe: (value) => val === value || err("Not Equal"),
        notToBe: (value) => val !== value || err("Equal")
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
