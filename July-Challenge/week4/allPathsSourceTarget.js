/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
let possiblePath = [];
function findPath(graph, path, key, initial, queue) {
    if (graph[key].length !== 0) {
        while (queue.length > 0) {
            path = [...initial];
            let curr = queue.shift();
            // console.log(curr, graph[curr].length);
            path.push(curr);
            if (graph[curr].length>0) {
                findPath(graph, path, curr, path, [...graph[curr]]);
            } else {
                possiblePath.push(path);
            }
        }
        
    }
}
var allPathsSourceTarget = function(graph) {
    possiblePath = [];
    if (graph.length !== 0){
        if (graph[0].length !== 0) {
            findPath([...graph], [], 0, [0], [...graph[0]]);
        }
    }
    return possiblePath;
};

// console.log(allPathsSourceTarget([[1,2],[3],[3],[]])); // [ [ 0, 1, 3 ], [ 0, 2, 3 ] ]
// console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]])); //[[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
module.exports = allPathsSourceTarget;