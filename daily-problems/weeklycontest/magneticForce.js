/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {
    if (m == 2) {
        return Math.max(...position)-Math.min(...position);
    }
    let maxPos = Math.max(...position);
    let maxForce = Math.floor(maxPos/m)+1;
    let placeBall = m;
    if (position.length === m) {
        position = position.sort(function(a, b){
           return a-b; 
        });
        let prev = position[0];
        let min  = position[0];
        for (let i = 1; i < position.length; i++) {
            if (position[i]-prev < min) {
                min = position[i]-prev;                
            }
            prev = position[i];
        }
        return min;
    }
    while (placeBall !== 0) {
        placeBall = m;
        let prev = position[0];
        placeBall--;
        for (let i = 1; i < position.length; i++) {
            if ((position[i]-prev) === maxForce) {
                placeBall--;
                prev = position[i];
            }
        }
        if (placeBall !== 0) {
            maxForce--;    
        }
    }
    return maxForce;
};