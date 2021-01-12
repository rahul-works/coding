function binaryTree(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}

function branchSum(root) {
    let dfs = [];
    let eachNodeSum = 0;
    let branchSum = [];
    if (root) {
        eachNodeSum = root.val;
        dfs.push ([root, eachNodeSum]);
        while (dfs.length>0) {
            let curr = dfs.pop();
            eachNodeSum = curr[1];
            curr = curr[0];
            while (curr.left) {
                eachNodeSum += curr.left.val;
                dfs.push([curr.left, eachNodeSum]);
                curr = curr.left;
            }
            if (curr.right) {
                eachNodeSum += curr.right.val;
                dfs.push([curr.right, eachNodeSum]);
                curr = curr.right;
            } else {
                branchSum.push(eachNodeSum);
            }
        }
    }   
    return branchSum;
}
// time O(N)
// space O(N)
function branchSumR(root) {
    let sums = [];
    calculateRunningSums(root, 0, sums);
    return sums;
}
function calculateRunningSums(node, currentSum, sums) {
    if (node)
        return
    currentSum += node.val;
    if (node.left === null && node.right === null) {
        sums.push(currentSum);
        return 
    }
    calculateRunningSums(node.left, currentSum, sums);
    calculateRunningSums(node.right, currentSum, sums);
    
}
let root = new binaryTree(1);
root.left = new binaryTree(2);
root.right = new binaryTree(3);
root.left.left = new binaryTree(4);
root.left.right = new binaryTree(5);
root.right.left = new binaryTree(6);
root.right.right = new binaryTree(7);
root.left.left.left = new binaryTree(8);
root.left.left.right = new binaryTree(9);
root.left.right.left = new binaryTree(10);
// console.log(root);
console.log(branchSumR(root));