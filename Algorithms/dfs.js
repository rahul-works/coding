function node (val){
    this.value = val;
    this.children = [];
    
}
// time O(V+E) | space O(V)
function dfs (root, array) {
    array.push(root.value);
    for (let i = 0; i < root.children.length; i++) {
        dfs (root.children[i], array);
    }
    return array;
}
let root = new node('A');
console.log(root);
let B = new node ('B');
let C = new node ('C');
let D = new node ('D');
root.children.push(B);
root.children.push(C);
root.children.push(D);
let E = new node ('E');
let F = new node ('F');
B.children.push(E);
B.children.push(F);
let I = new node ('I');
let J = new node ('J');
F.children.push(I);
F.children.push(J);
let G = new node ('G');
let H = new node ('H');
D.children.push(G);
D.children.push(H);
let K = new node ('K');
G.children.push(K);

let list = dfs (root, []);
console.log(list);
