/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) return [];
    
    const solArr = [];
    
    let l = 0;
    let t = 0;
    let r = matrix[0].length - 1;
    let b = matrix.length - 1;
    
    while (l <= r && t <= b) {
        for (let i = l; i <= r; i++) {
            solArr.push(matrix[t][i]);
        }
        
        t++;
        
        for (let i = t; i <= b; i++) {
            solArr.push(matrix[i][r]);
        }
        
        r--;
                
        if (l <= r && t <= b) {
            for (let i = r; i >= l; i--) {
                solArr.push(matrix[b][i]);
            }
            
            b--;

            for (let i = b; i >= t; i--) {
                solArr.push(matrix[i][l]);
            }            
            
            l++;
        }
    }
    
    return solArr;
};