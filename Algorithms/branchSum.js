function binaryTree(value) {
    this.val = value;
    this.visited = 0;
    this.left = null;
    this.right = null;
}

function branchSum(root) {
    let dfs = [];
    let eachNodeSum = 0;
    let branchSum = [];
    if (root) {
        eachNodeSum = root.val;
        dfs.push ([root, eachNodeSum, 0]);
        while (dfs.length>0) {
            while (root.left && root.visited === 0) {
                eachNodeSum += root.left.val;
                dfs.push([root.left, eachNodeSum]);
                root = root.left;
            }
            let temp = dfs.pop();
            root = temp[0];
            eachNodeSum = temp[1];
            root.visited = 1;
            if (root.left === null && root.right === null) {
                branchSum.push(temp[1]);    
            } 
            if (root.right) {
                eachNodeSum += root.right.val;
                dfs.push([root.right, eachNodeSum]);
                root = root.right;
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
function calculateRunningSums(node, rootentSum, sums) {
    if (!node)
        return;
    rootentSum += node.val;
    if (node.left === null && node.right === null) {
        sums.push(rootentSum);
        return;
    }
    calculateRunningSums(node.left, rootentSum, sums);
    calculateRunningSums(node.right, rootentSum, sums);
    
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
// console.log(branchSumR(root));
console.log(branchSum(root));