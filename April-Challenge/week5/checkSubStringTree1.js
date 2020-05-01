/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let checkPath = function(root, arr, i) {
    if (root === null) {
        return arr.length === 0;
    }
    if (i === arr.length-1 && root.left === null && root.right === null ) {
        return root.val === arr[i];
    }
    
    if (i<arr.length && root.val === arr[i]) {
        return checkPath(root.left, arr, i+1) || checkPath(root.right, arr, i+1);
    }
}

/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
    return checkPath(root, arr, 0);
};