/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let kthSmallestElement = Number.MIN_SAFE_INTEGER;
let counter = 0;
function inorder (root, k) {
    if (root === null) {
        return null;
    }
    inorder (root.left, k);
    counter += 1;
    if (counter === k) {
        kthSmallestElement = root.val;
    }
    inorder (root.right, k);
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if (root === null) {
        return root;
    }
    kthSmallestElement = Number.MIN_SAFE_INTEGER;
    counter = 0;
    inorder(root, k);
    return kthSmallestElement;
};