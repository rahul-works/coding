/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

let adj = [];
function findStop(stop) {
    let match = [];
    for (const place of adj) {
        if (place[0] === stop) {
            match.push(place[1]);
        }
    }
    if(match.length>0) {
        if(match.length>1) {
            match = match.sort();
            return match[0];
        } else {
            return match[0];
        }
    } else {
        return false;
    }
}

var findItinerary = function(tickets) {
    adj = [];
    let ans = [];
    //Make graph
    for( const stop of tickets) {
        adj.push([stop[0], stop[1]]);
    }
    console.log(adj);
        
    let stack = [];
    stack.push("JFK");    //JFK is our fixed starting point
    console.log(stack);
    console.log(stack.length);
    while(stack.length > 0) {
        let src = stack[stack.length-1];
        let dst = findStop(src);
        if(dst) { //No further travel possible
            ans.push(src);
            stack.pop();
        } else {
            stack.push(dst);
            adj[src] = undefined;
        }
        console.log(stack);
    }
    console.log(ans);
    let rev = [];
    for (let i = ans.length-1; i >= 0; i -= 1) {
        rev.push(ans[i])
    }
    // reverse(ans.begin(),ans.end());
    return rev;
};

// console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]));
// //["JFK", "MUC", "LHR", "SFO", "SJC"]
// console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
// [ 'JFK', 'ATL', 'SFO', 'ATL' ]
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
// ["JFK","ATL","JFK","SFO","ATL","SFO"]