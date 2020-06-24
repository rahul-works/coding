/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (root === undefined || root === null) {
        return 0;
    }
    let count = 1;
    let rightNodeStack = [];
    while (root!==undefined && root !== null) {
        if (root.left !== null) {
            count += 1;
        }
        if (root.right !== null) {
            count += 1;
            rightNodeStack.push(root.right);
        }
        if (root.left !== null){
            root = root.left;
        } else if (root.right !== null){
            root = root.left;
        } else {
            root = rightNodeStack.pop();
        }
        
    }
    return count;
};