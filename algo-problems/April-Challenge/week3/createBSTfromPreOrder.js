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
// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
    
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
                console.log('last pop:'+lastPopNode.val);
                console.log(num);
                while (stack.length > 0 && stack[stack.length-1].val < num) {
                    lastPopNode = stack.pop();
                    console.log('last pop:'+lastPopNode.val);
                }
                lastPopNode.right = new TreeNode(num);
                stack.push(lastPopNode.right);
            }
        }

        console.log(stack);
    }
    console.log(root);
    return root;
};

bstFromPreorder([8,5,1,7,10,12]);