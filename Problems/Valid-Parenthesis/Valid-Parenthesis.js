/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (c of s) {
        switch (c) {
            case '(': case '[': case '{':
                stack.push(c); break;
            case ')':
                if (stack.pop() !== '(')
                    return false;
                break;
            case ']':
            if (stack.pop() !== '[')
                    return false;
                break;
            case '}':
            if (stack.pop() !== '{')
                    return false;
                break;
            default: return false;
        }
    }
    return (stack.length == 0);
};
