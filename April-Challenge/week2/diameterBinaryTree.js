/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// function pathCount (root) {
//     let edge = 1;
//     while (root.left!=null || root.right!=null) {
//         edge += 1
//         if (root.left != null) {
//             root = root.left;
//         } else if (root.right != null) {
//             root = root.right;
//         }
//     }
//     return edge;
// }
// Returns value of deepest node 
function pathCount(root) 
{ 
    // Initialze result and max level 
    let res = -1; 
    const maxLevel = -1; 
  
    // Updates value "res" and "maxLevel" 
    // Note that res and maxLen are passed 
    // by reference. 
    console.log('find : '+find(root, 0, maxLevel)); 
    console.log('maxEdge:'+maxEdge);
    
    return maxEdge; 
} 
let maxEdge = 0;
function find ( root, level, maxLevel) 
{ 
    if (root != null) 
    { 
        find(root.left, ++level, maxLevel); 
  
        // Update level and resue
        console.log('level:'+level+', maxLevel:'+maxLevel+', maxEdge:'+maxEdge);
        if (level > maxEdge) 
        { 
            res = root.val; 
            maxLevel = level; 
            maxEdge = level;
        } 
  
        console.log('*'+maxLevel);
        find(root.right, level, maxLevel); 
    } 
    return maxLevel;
} 

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let longestLeftPath = 0, longestRightPath = 0;
    const rootCopy = root;
    if (rootCopy == null) {
        return 0;
    }
    if (rootCopy.left === null && rootCopy.right === null) {
        return 0;
    }
    if (rootCopy.left != null) {
        longestLeftPath = pathCount(rootCopy.left);
    } 
    maxEdge = 0;
    if (rootCopy.right != null) {
        longestRightPath = pathCount(rootCopy.right);
    }
    return longestLeftPath+longestRightPath;
};

[1,4,3,null,null,null,2]
[4,2,null,3,1,null,null,5]
[1,2,3,4,5]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let ans = 1;
function depth(node) {
    if (node == null) return 0;
    let L = depth(node.left);
    let R = depth(node.right);
    ans = Math.max(ans, L+R+1);
    return Math.max(L, R) + 1;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    
    depth(root);
    return ans - 1;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let ans = 1;
function depth(node) {
    if (node == null) return 0;
    let L = depth(node.left);
    let R = depth(node.right);
    ans = Math.max(ans, L+R+1);
    return Math.max(L, R) + 1;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (root == null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return 0;
    }
    depth(root);
    return ans - 1;
};