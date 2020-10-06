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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root === null) {
        root = new TreeNode(val, null, null);
        return root;
    }
    let temp = root;
    let prev = temp;
    while (temp) {
        prev = temp;
        if (val < temp.val) {
            temp = temp.left;
        } else {
            temp = temp.right;
        }
    }
    if (val < prev.val) {
        prev.left = new TreeNode(val, null, null);
    } else {
        prev.right = new TreeNode(val, null, null);
    }
    return root;
};