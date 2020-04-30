/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
    if (root === null && arr.length === 0) {
        return true;
    } else {
        return false;
    }
    let currNode = root;
    let index    = 0;
    while (currNode.left !== null || currNode.right !== null) {
        console.log(currNode.val);
        console.log('index:'+index+', num:'+arr[index]);
        if(currNode.val === arr[index]) {
            index += 1;
            console.log('currNode.left:'+currNode.left.val+', currNode.right:'+currNode.right.val);
            if (currNode.left !== null && currNode.left.val === arr[index]) {
                currNode = currNode.left;
            } else if (currNode.right !== null && currNode.right.val === arr[index]) {
                currNode = currNode.right;
            } else {
                return false;   
            }
        }
    }
    if (arr.length-1 === index) {
        return true;
    } else {
        return false;
    }
};