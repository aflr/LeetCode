/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const visited = new Set([source]);
    const remaining = [];

    edges.forEach(edge => {
        if (edge[0] == source)
            remaining.push(edge[1]), visited.add(edge[1]);
        if (edge[1] == source)
            remaining.push(edge[0]), visited.add(edge[0]);
    });
    while (remaining.length && !visited.has(destination)) {
        const vertex = remaining.pop();
        edges.forEach(edge => {
            if (edge[0] == vertex && !visited.has(edge[1])) {
                remaining.push(edge[1]);
                visited.add(edge[1]);
            }
            if (edge[1] == vertex && !visited.has(edge[0])) {
                remaining.push(edge[0]);
                visited.add(edge[0]);
            }
        });
    }
    return visited.has(destination);
};
