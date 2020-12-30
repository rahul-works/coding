/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let retHead = null;
function inOrder(node, retNode) {
    if (node) {
        inOrder(node.left, retNode);
        if (!retHead) {
            retNode = new TreeNode(node.val, null, null);
            retHead = retNode;
        } else {
            retNode = retHead;
            while (retNode.right) {
                retNode = retNode.right;
            }
            retNode.right = new TreeNode(node.val, null, null);
            retNode = retNode.right;
        }
        inOrder(node.right, retNode);
    }
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let retNode = null;
    retHead = null;
    inOrder(root, retNode);
    return retHead;
};