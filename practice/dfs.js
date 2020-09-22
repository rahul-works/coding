/*arr = [1, 5, 6, 2, 3, 8]
    1
   / \
   5  6
  / \ / \
  2 3 8
  output: 
 2 5 3 1 8 6
  */

function dfs(arr) {
    let stack = [];
    stack.push(arr[0]);
    let i = 0;
    let curr = i * 2 + 1;
    while (stack.length || arr[curr] !== undefined) {
        let left = curr;
        while (arr[left] !== undefined) {
            stack.push(arr[left]);
            i = arr.indexOf(arr[left]);
            left = i * 2 + 1;
        }
        curr = stack.pop();
        console.log(curr);
        i = arr.indexOf(curr);
        curr = i * 2 + 2; // right
        // console.log(' right index:' + curr);
        // console.log(stack);
    }
}
let arr = [1, 5, 6, 2, 3, 8];
dfs(arr); // 2 5 3 1 8 6