/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let stack = [];
let levelStack = [];

function height(node)  
{  
    if (node === null)  
        return 0;  
    let lheight = height(node.left);  
    let rheight = height(node.right);  

    /* use the larger one */
    if (lheight > rheight){
        return lheight + 1 ;  
    } else {
        return rheight + 1 ;  
    } 
} 

function levelOrder(node)  
{  
    let h = height(node);  
    for (let i = 1; i <= h; i++)  {
        levelStack = [];
        visitLevel(node, i);  
        stack.push(levelStack);
    }   
} 
function visitLevel (root,level) {  
    if (root === null)  
        return;  
    if (level === 1) {
        levelStack.push(root.val);
    } else if (level > 1) {  
        visitLevel(root.left, level-1);  
        visitLevel(root.right, level-1);  
    }  
}  
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    stack = [];
    if (root != null) {
        levelOrder (root);
        stack.reverse();
    }
    return stack;
};