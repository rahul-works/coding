const tree = function (val){
  this.val = val,
  this.left = null,
  this.right = null;
  return this;
}

//----- TREE FORMATION
const root = new tree(2);
root.left = new tree(1);
root.right = new tree(3);

const root1 = new tree(9);
root1.left = new tree(5);
root1.left.left = new tree(3);
root1.left.right = new tree(6);
root1.right = new tree(15);
root1.right.left = new tree(12);
root1.right.right = new tree(30);
//----- TREE FORMATION

// SOLUTION 
function kthSmallestElement(root, k) {
  K = k;
  return findK(root);
}
let K = 0;

// recursive function
function findK(root) {
  if (!root) {
    return -1;
  }
  findK(root.left);
  console.log('--', K, root.val);
  if (K === 0) {
    return root.val;
  }
  K--;
  console.log(K, root.val);
  if (K === 0) {
    return root.val;
  }
  findK(root.right);
}
console.log(kthSmallestElement(root, 2));
console.log(kthSmallestElement(root1, 5));