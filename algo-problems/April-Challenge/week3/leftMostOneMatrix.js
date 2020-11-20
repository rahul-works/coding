/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    const dimension = binaryMatrix.dimensions();
    let start;
    let end = dimension[1]-1;; 
    let mid;
    let leftMost =  -1;
    for( let row = 0; row < dimension[0]; row += 1) {
        if(binaryMatrix.get(row, end) === 1){
            start = 0;
            end = dimension[1]-1;
            while (start < end) {
                mid = start + Math.floor((end-start)/2);
                if (binaryMatrix.get(row, mid) === 1) {
                    end = mid; 
                } else {
                    start = mid+1;
                }
                // console.log('start:'+start+', end:'+end+', mid:'+mid);
            }
            if (start === end) {
                if (leftMost === -1 || leftMost > start) {
                    leftMost = start;
                }
            }
            // console.log('start:'+start+', end:'+end+', mid:'+mid+', leftMost:'+leftMost);
        }
    }
    
    return leftMost;
};
