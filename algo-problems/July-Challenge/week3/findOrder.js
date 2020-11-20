/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let graph = {};
    let inDegree = {};
    for (const pair of prerequisites) {
        if (inDegree[pair[0]] === undefined) {
            inDegree[pair[0]] = 1;
        } else {
            inDegree[pair[0]] += 1;
        }
        if (graph[pair[1]] === undefined) {
            graph[pair[1]] = [];
        }
        graph[pair[1]].push(pair[0]);
    } // graph is created 
    // console.log(inDegree);
    // console.log(graph);
    let queue = [];
    for (let i = 0; i < numCourses; i += 1) {
        if (inDegree[i] === undefined) {
            queue.push(i);
        }
    }
    let order = [];
    while (queue.length > 0) {
        let course = queue.shift();
        order.push(course);
        if (graph[course] !== undefined) {
            for (const node of graph[course]) {
                if (--inDegree[node] === 0) {
                    queue.push(node);
                }
            }
        }
    }
    return order.length === numCourses ? order : [];
};

// console.log(findOrder(2, [[1,0]]));  //0, 1
// console.log(findOrder(4,  [[1,0],[2,0],[3,1],[3,2]])); //0, 1, 2, 3
// console.log(findOrder(1, [])); //0
// console.log(findOrder(2, [[0,1],[1,0]])); //
// console.log(findOrder(3, [[0,1],[0,2],[1,2]])); // 2, 1, 0
// console.log(findOrder(3, [[1,0],[2,1]])); // 0, 1, 2
// console.log(findOrder(3, [[1,0],[1,2],[0,1]])); // 
module.exports = findOrder;