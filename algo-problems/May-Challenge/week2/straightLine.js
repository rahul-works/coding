/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length <= 0 ) {
        return false;
    }
    if (coordinates.length < 2 ) {
        return true;
    }
    const m = (coordinates[0][1]-coordinates[1][1])/(coordinates[0][0]-coordinates[1][0]);
    console.log(m);
    const b = coordinates[0][1] - m * coordinates[0][0];
    console.log(b);
    for (let point of coordinates) {
        if (point[1] !== (m * point[0] + b)) {
            console.log(false)
            return false;
        }
    }
    console.log(true);
    return true;
};

checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]);