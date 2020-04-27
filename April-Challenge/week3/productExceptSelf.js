/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums == undefined || nums.length == 0 || nums.length == 1) {
        return nums;
    }
    if (nums.length == 2) {
        console.log([nums[1], nums[0]]);
        return [nums[1], nums[0]]; 
    }
    const productAll = Math.abs(nums.reduce((a, b) => a*b ));
    console.log(productAll);
    let productNums = [];
    for( const key in nums){
        if(nums[key] != 0) {
            productNums.push(Math.abs(productAll/nums[key]));
        } else {
            if (productAll == 0) {
                if (key == 0) {
                   productNums.push(nums.reduce((Accumalator, currNumber, index) => index != 1 ? Accumalator * currNumber : 1 * currNumber));
                } else {
                    productNums.push(nums.reduce((Accumalator, currNumber, index) => index != key ? Accumalator * currNumber : Accumalator ));
                }
            } else {
                productNums.push(nums[key]);
            }
        }  
    }
    console.log(productNums);
};

// productExceptSelf([1,2,3,4]);
// productExceptSelf([0, 0]);
 ///productExceptSelf([1, 0]);
//  productExceptSelf([2,3,0,0]);
 //productExceptSelf([4,3,2,1,2]);
 productExceptSelf([9,0,-2]);