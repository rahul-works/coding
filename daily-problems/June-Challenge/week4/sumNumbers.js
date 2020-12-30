/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let stackLeaf = [];
let stringList = [];
function preorder(root) {
    if (root) {
        stackLeaf.push(root.val);
        if (root.left !== null) {
            preorder(root.left);
        } 
        if (root.right !== null) {
            preorder(root.right);
        } 
        if (root.left === null && root.right === null) {
            let numString = '';
            for (const num of stackLeaf) {
                numString += num;
            }
            stringList.push(numString);
        }
        stackLeaf.pop();
    }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0;
    stackLeaf = [];
    stringList = [];
    preorder(root);
    for (const num of stringList) {
        sum += parseInt(num);
    }
    return sum;
};