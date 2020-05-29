/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let inDegree = {};
    let outDegree = {};
    for (const connection of prerequisites) {
        if(inDegree[connection[1]] === undefined) {
            inDegree[connection[1]] = [];
        }
        if(outDegree[connection[0]] === undefined) {
            outDegree[connection[0]] = [];
        }
        inDegree[connection[1]].push(connection[0]);
        outDegree[connection[0]].push(connection[1]);
    }
    console.log(inDegree);
    console.log(outDegree);
    let connectionRemoved = 0;
    let indegreeZero = [];
    for (let course = 0; course < numCourses; course += 1) {
        if (inDegree[course] === undefined) {
            indegreeZero.push(course);
            connectionRemoved += 1;
        }
    }
    
    while (indegreeZero.length !== 0) {
        let node = indegreeZero.pop();
        console.log(node);
        console.log(outDegree);
        if(outDegree[node] !== undefined) {
            for (const x of outDegree[node]) {
                console.log(inDegree);
                inDegree[x].splice(inDegree[x].indexOf(x), 1);
                console.log(inDegree);
                if (inDegree[x].length === 0) {
                    indegreeZero.push(x);
                    connectionRemoved += 1;
                }
            }
        }
    }
    console.log(connectionRemoved);
    return connectionRemoved === numCourses;
};

console.log(canFinish(2
    , [[1,0],[0,1]]));