/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let t = 0; l = 0;
    let r = n-1, b = n-1;
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < n; j++) {
            arr[i][j] = 0;
        }
    }
    let num = 1;
    while (l <= r && t <= b){
        for (let i = l; i <= r; i++) {
            arr[t][i] = num++;
        }
        t++;
        for (let i = t; i <= b; i++) {
            arr[i][r] = num++;
        }
        --r;
        for (let i = r; i >= l; i--) {
            arr[b][i] = num++;
        }
        b--;
        for (let i = b; i >= t; i--) {
            arr[i][l] = num++;
        }
        l++;
    }
    return arr;
};