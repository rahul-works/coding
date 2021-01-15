// time O(N) | space O(H)
function nodeDepthsBFSI(root){ // bfs iterative
    let sumOfDepth = 0;
    if (root) {
        let queue = [];
        let depth = 0;
        queue.push([root, depth]);
        while (queue.length>0) {
            root = queue.shift();
            sumOfDepth += root[1];
            if (root[0].left)
                queue.push([root[0].left, root[1]+1]);
            if (root[0].right)
            queue.push([root[0].right, root[1]+1]);
        }
    }
    return sumOfDepth;
}
// time O(N) | space O(H)
function nodeDepthsDFSI(root){ // dfs iterative
    let sumOfDepth = 0;
    if (root) {
        let stack = [];
        let depth = 0;
        stack.push([root, depth]);
        while (stack.length>0) {
            root = stack.pop();
            sumOfDepth += root[1];
            if (root[0].left)
            stack.push([root[0].left, root[1]+1]);
            if (root[0].right)
            stack.push([root[0].right, root[1]+1]);
        }
    }
    return sumOfDepth;
}
// time O(N) | space O(H)
function nodeDepthRecursion(root, d) {
    if (root) {
         return d + nodeDepthRecursion(root.left, d+1) + nodeDepthRecursion(root.right, d+1);
    } 
    return 0;
}
function nodeDepths(root) {
    return nodeDepthRecursion(root, 0);
}
function binaryTree(value) {
    this.val = value;
    this.visited = 0;
    this.left = null;
    this.right = null;
}

let root = new binaryTree(1);
root.left = new binaryTree(2);
root.right = new binaryTree(3);
root.left.left = new binaryTree(4);
root.left.right = new binaryTree(5);
root.right.left = new binaryTree(6);
root.right.right = new binaryTree(7);
root.left.left.left = new binaryTree(8);
root.left.left.right = new binaryTree(9);
// root.left.right.left = new binaryTree(10);
// console.log(nodeDepthsDFSI(root));
console.log(nodeDepths(root));