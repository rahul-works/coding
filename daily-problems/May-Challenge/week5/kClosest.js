/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    let hashDistance = {};
    for (const key in points) {
        hashDistance[key] = Math.pow(points[key][0], 2) + Math.pow(points[key][1], 2);
    }
    let sortable = [];
    for (const key in hashDistance) {
        sortable.push([key, hashDistance[key]]);
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    let kClosest = [];
    for (let i = 0; i < K; i++) {
        kClosest.push(points[sortable[i][[0]]]);
    }
    console.log(kClosest);
    return kClosest;
};

console.log(kClosest([[1,3],[-2,2]]
, 1));
