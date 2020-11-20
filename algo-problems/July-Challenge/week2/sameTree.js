/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let flag = false;
function inOrder (p, q) {
    if ( flag === false && p !== null && q !== null) {
        if (p.val !== q.val) {
            flag = true;
        }
        if ( flag === false) {
            inOrder (p.left, q.left);
        }
        if ( flag === false) {
            inOrder (p.right, q.right);
        }
    }
    if(p === null && q !== null) {
        flag = true;
    } else if(p !== null && q === null) {
        flag = true;
    }
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    flag = false;
    if (p === null && q === null) {
        return true;
    }
    inOrder (p, q);
    if (flag === false) {
        return true;
    } else {
       return false;
    }
};