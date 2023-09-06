/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let ct = [0, 0, 0];
    for (let i = 0; i < moves.length; i++)
        switch (moves.charAt(i)) {
            case 'L': ct[1]++; break;
            case 'R': ct[2]++; break;
            case '_': ct[0]++;
        }
    return ct[0] + Math.abs(ct[1] - ct[2]);
};
