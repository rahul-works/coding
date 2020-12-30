/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if ( preorder === null || preorder.length === 0 ) {
        return null;
    }
    if (preorder.length === 1) {
        return new TreeNode(preorder[0]);
    }
    
    let stack = new Array();
    let root;
    for(const num of preorder) {
        if(stack.length === 0) {
            root = new TreeNode(num);
            stack.push(root);
        } else {
            if (stack[stack.length-1].val > num) {
                stack[stack.length-1].left = new TreeNode(num);
                stack.push(stack[stack.length-1].left);
            } else {
                let lastPopNode = stack.pop();
                while (stack.length > 0 && stack[stack.length-1].val < num) {
                    lastPopNode = stack.pop();
                }
                lastPopNode.right = new TreeNode(num);
                stack.push(lastPopNode.right);
            }
        }
    }
    return root;
};