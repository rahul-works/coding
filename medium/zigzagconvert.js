/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length === 0 || s.length === 1 || s.length === 2) {
        return s;
    }
    let matrix = [];
    let col = 0;
    let row = 0;
    let i = 0;
    let mid = 0;
    while (i < s.length) {
        if (matrix[row] === undefined) {
            matrix[row] = [];
        }
        if (col%(numRows-1) === 0){
            matrix[row][col] = s[i];
            i += 1;
            mid = 1;
        } else {
            if (row === numRows - mid) {
                matrix[row][col] = s[i];
                i += 1;
            }
        }
        row += 1;
        if (row === numRows) {
            col += 1;
            mid += 1;
            row = 0;
        }
    }
    let result = '';
    for (const row in matrix) {
        for (const col in matrix[row]) {
            if (matrix[row][col]) {
                result += matrix[row][col];
            }
        }
    }
    return result;
};

//console.log(convert("PAYPALISHIRING", 3));
// console.log(convert("PAYPALISHIRING", 4)); //PINALSIGYAHRPI
// console.log(convert("AB", 1));
// console.log(convert("ABC", 1));
module.exports = convert;