function binarySearchR(arr, target) {
    return binarySearchHelper(arr, target, 0, arr.length-1);
}
function binarySearchHelper(arr, target, left, right) {
    let mid = left + Math.floor((right-left)/2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearchHelper(arr, target, left, mid-1);
    } else if (arr[mid] < target) {
        return binarySearchHelper(arr, target, mid+1, right);
    }
}

console.log(binarySearchR([1, 5, 23, 111], 111));