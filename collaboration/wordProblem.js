/*
There is a new alien language that uses the English alphabet. However, the order among letters are unknown to you.

You are given a list of strings words from the dictionary, where words are sorted lexicographically by the rules of this new language.

Derive the order of letters in this language, and return it. If the given input is invalid, return "". If there are multiple valid solutions, return any of them.

 

Example 1:

Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"
Example 2:

Input: words = ["z","x"]
Output: "zx"
Example 3:

Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".


["wrt","wrf","er","ett","rftt"]

[w < e, e < r]
[r < t, t < f]

wertf

["z","x","z"]

[z < x, x < z] - skip 

""

["za","xb","zc"]

[z < x, x < z] - skip
[a<b, b<c]
"abc"

1. build a adj graph
w: [e]
e: [r]
r: [t]
t: [f]
f

w v 
e v
r v
t v
f v


2. use the graph to find an ordering
   DFS: w->e->r->t....f      <- wertf
https://www.geeksforgeeks.org/topological-sorting/



*/


function lexicalOrder(words) {
    let adj = {};
    for (let i = 0; i < words.length-1; i++) {
  
      for (let j = 0; j < Math.max(words[i].length, words[i+1].length); j++) {
        if (words[i][j] === words[i+1][j]) continue;
        if (words[i][j] !== undefined && words[i+1][j] !== undefined)
          adj[words[i][j]] = words[i+1][j];
      }
    }
    
    return adj;
  }
  
  let words = ["wrt","wrf","er","ett","rftt"];
  console.log(lexicalOrder(words));  
  