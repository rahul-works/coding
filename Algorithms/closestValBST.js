// Average time O(log(N)) | space O(1)
// Worst  time : O(N) | space : O(1)
function findClosestValueInBST(tree, target) {
    let curr = 0;
    let closest = tree[curr];
    while (tree[curr]) {
        let diff = Math.abs(target-tree[curr]);
        if (diff === 0) {
            return tree[curr];
        }
        if (diff < Math.abs(closest-target)) {
            closest = tree[curr];
        }
        if (tree[curr]>target) {
            curr = curr * 2+1; // left
        } else {
            curr = curr * 2+2; // right
        }
    }
    return closest;
}
// Average  time : O(log(N)) | space : O(log(N))
// Worst  time : O(N) | space : O(N)
function findClosestValueInBSTRHelper(tree, target, closest, curr) {
    if (!tree[curr])
        return closest;
    if ( Math.abs(closest-target) > Math.abs(tree[curr]-target)) 
        closest = tree[curr];
    if (target > tree[curr]) {
        return findClosestValueInBSTRHelper(tree, target, closest, curr*2+2); // right 
    } else if (target < tree[curr]) {
        return findClosestValueInBSTRHelper(tree, target, closest, curr*2+1); // left
    } else {
        return closest;
    } 
}
function findClosestValueInBSTR(tree, target) {
    return findClosestValueInBSTRHelper(tree, target, tree[0], 0);
}
const tree = [10, 
            5, 15,
        2, 5, 13, 22,
    1, null, null, null, null, 14];
console.log(findClosestValueInBST(tree, 12));
console.log(findClosestValueInBSTR(tree, 12));