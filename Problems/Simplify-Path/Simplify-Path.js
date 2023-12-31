/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let dirs = path.split('/').filter(s => s !== '' && s !== '.'), p = [];
    for (let i = 0; i < dirs.length; i++)
        (dirs[i] === '..') ? p.pop() : p.push(dirs[i]);
    return '/' + p.join('/');
};
