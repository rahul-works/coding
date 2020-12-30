/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var result1 = Number.MIN_SAFE_INTEGER;

function maxPathSumOp(root) {
    if(!root) {
        return 0;
    }
    let left    = maxPathSumOp(root.left);
    let right   = maxPathSumOp(root.right);
    console.log('result:'+result1);
    console.log('left:'+left);
    console.log('right:'+right);
    let maxStraight = Math.max(Math.max(left, right)+root.val, root.val);
    console.log('maxStraight:'+maxStraight);
    let maxCaseVal = Math.max(maxStraight, left + right + root.val);
    console.log('maxCaseVal:'+maxCaseVal);
    result1 = Math.max(maxCaseVal, result1);
    console.log(result1);
    return maxStraight;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    console.log('result1:'+result1);
    maxPathSumOp (root);
    console.log(result1);
    return result1;
};