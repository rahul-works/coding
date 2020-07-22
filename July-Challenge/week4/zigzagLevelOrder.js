/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function levelOrder(root, level, arr) {
    if (root) {
        if (arr[level] === undefined) {
            arr[level] = [];
        }
        if (level % 2 === 0) {
            arr[level].unshift(root.val);
        } else {
            arr[level].push(root.val);    
        }
        
        levelOrder(root.right, level+1, arr);
        levelOrder(root.left, level+1, arr)
    }
    return null;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    returnOrder = [];
    if (root) {
        levelOrder(root, 0, returnOrder);
    }
    return returnOrder;
};