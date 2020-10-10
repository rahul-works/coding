/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (!points || points.length === 0) return 0;
    points.sort((a, b) => a[1] - b[1]);
    let ans = 0;
    let leftBound = -Infinity;
    for (let [start, end] of points) {
        if (leftBound < start) {
            leftBound = end;
            ans++;
        }
    }
    return ans;
};