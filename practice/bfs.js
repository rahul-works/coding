/*arr = [1, 5, 6, 2, 3, 8]
    1
   / \
   5  6
  / \ / \
  2 3 8
  output: 
  1 5 6 2 3 8

  */

function bfs(arr) {
    let queue = [];
    queue.push(arr[0]);
    while (queue.length) {
        const curr = queue.shift();
        console.log(curr);
        let i = arr.indexOf(curr);
        let left = i * 2 + 1;
        let right = left + 1;
        if (arr[left] !== undefined) {
            queue.push(arr[left]);
        }
        if (arr[right] !== undefined) {
            queue.push(arr[right]);
        }
    }
}
let arr = [1, 5, 6, 2, 3, 8];
bfs(arr); //1 5 6 2 3 8