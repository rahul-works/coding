/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    if (A.length === 0 || B.length === 0){
        return [];
    }
    let returnIntersect = [];
    let left, right;
    let aCount = 0;
    let bCount = 0;
    while (aCount < A.length && bCount < B.length) {

        left    = Math.max(A[aCount][0], B[bCount][0]);
        right   = Math.min(A[aCount][1], B[bCount][1]);
        if(left <= right){
            returnIntersect.push([left, right]);
        }
        
        if (A[aCount][1] < B[bCount][1]) {
            aCount += 1;
        } else {
            bCount += 1;
        }
        console.log(returnIntersect);
    }
    return returnIntersect;
};

console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],
    [[1,5],[8,12],[15,24],[25,26]]));