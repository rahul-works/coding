/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let i = 0;
    while (i < arr.length-1) {
        let maxIndex=i;
        let j = i;
        while (j < arr.length) {
            if (arr[maxIndex] < arr[j]) {
                maxIndex = j;
            }
            j++;
        }
        j = maxIndex;
        while (j >= i) {
            arr[j] = arr[maxIndex];
            j--;
        }
        arr[maxIndex] = -1;
        i = maxIndex;
    }
    arr[arr.length-1] = -1;
    return arr;
};