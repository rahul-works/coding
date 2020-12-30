// brute force approach 
// time O(n^2) space O(1)
function twoSum1 (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j]  === target) {
                return [arr[i], arr[j]];
            }
        }
    }
    return [];
}

console.log(twoSum1([1, 2, 3, 4, 5, 6, 7, 8], 10));

// hash approach
// time O(N) space O(N)
function twoSum2 (arr, target) {
    let visited = {};
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (visited[diff]) {
            return [arr[i], diff];
        }
        visited[arr[i]] = true;
    }
    return [];
}

console.log(twoSum2([1, 2, 3, 4, 5, 6, 7, 8], 10));

// 2 pointer approach 
//
function twoSum3 (arr, target) {
    let l = 0;
    let r = arr.length-1;
    while (l <= r) {
        if (arr[l]+arr[r] === target) {
            return [arr[l], arr[r]];
        } else if (arr[l]+arr[l] > target) {
            --r;
        } else {
            ++l;
        }
    }
    return [];
}

console.log(twoSum3([1, 2, 3, 4, 5, 6, 7, 8], 10));
