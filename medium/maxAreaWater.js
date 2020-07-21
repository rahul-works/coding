/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaWater = function(height) {
    let maxArea = Number.MIN_VALUE;
    let dp = [];
    for (let x = 1; x <= height.length; x+= 1) {
        for (let y = 1; y <= height.length; y+= 1) {
            if (x !== y) {
                if (x > y) {
                    if (height[x-1] < height[y-1]){
                        if ((x-y) * height[x-1] > maxArea) {
                            maxArea = (x-y) * height[x-1];
                        }
                    } else {
                        if ((x-y) * height[y-1] > maxArea) {
                            maxArea = (x-y) * height[y-1];
                        }
                    }
                }
            } else {
                if (maxArea < 0) {
                    maxArea = 0;
                } 
            }
        }
    }
    return maxArea;
};

// console.log(maxAreaWater([1,8,6,2,5,4,8,3,7])); //49
// console.log(maxAreaWater([1,4,6,2,5,4,8,3,7])); // 36
// console.log(maxAreaWater([1,4,6,2,5,4,8,3,1])); // 24
module.exports = maxAreaWater;