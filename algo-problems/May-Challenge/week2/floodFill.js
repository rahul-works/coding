/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
let returnImage;
var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) {
        return image;
    }
    returnImage = image;
    fill(sr, sc, image[sr][sc], newColor);
    return returnImage;
};

function fill(row, col, color, newColor) {
    if(row < 0 || row >= returnImage.length || col < 0 || col >= returnImage[0].length || returnImage[row][col] !== color) {
        return;
    }
    returnImage[row][col] = newColor;
    fill(row-1, col, color, newColor);
    fill(row+1, col, color, newColor);
    fill(row, col-1, color, newColor);
    fill(row, col+1, color, newColor);

}

// console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
console.log(floodFill([[0,0,0],[0,0,0]], 0, 0, 2));