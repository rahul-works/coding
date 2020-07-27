/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 
var buildTree = function(inorder, postorder) {
    let root = null;
    let level = 0;
    let rootIndex, index;
    let point = null;
    for (let i = postorder.length-1; i>=0; i-= 1) {
        const val = postorder[i];
        if (root === null) {
            root = new TreeNode(val, null, null);
            level++;
        } else {
            index = inorder.indexOf(val);
            point = root;
            while (point !== null) {
                rootIndex = inorder.indexOf(point.val);
                if (rootIndex < index) {
                    if (point.right !== null) {
                        point = point.right;
                    } else {
                        point.right = new TreeNode(val, null, null);
                        point = null;
                    }
                } else {
                    if (point.left !== null) {
                        point = point.left;
                    } else {
                        point.left = new TreeNode(val, null, null);
                        point = null;
                    }
                }
            }
        }
    }
    return root;
};