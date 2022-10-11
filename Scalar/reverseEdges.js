var eventualSafeNodes = function(graph) {
  const N = graph.length;
  let safe = {}; // new boolean[N];

  let parents = {};
  let rgraph = {};
  for (let i = 0; i < N; ++i) {
    parents[i] = new Set();
    rgraph[i] = new Set();
  }

  let queue = [];

  for (let i = 0; i < N; ++i) {
    if (graph[i].length === 0)
      queue.push(i);
    for (let j = 0; j < graph[i].length; j++) {
      parents[i].add(graph[i][j]);
      rgraph[graph[i][j]].add(i);
    }
  }

  while (queue.length > 0) {
    const j = queue.shift();
    safe[j] = true;
    for (const i of rgraph[j]) {
      debugger;
      parents[i].delete(j);
      if (parents[i].size === 0)
        queue.push(i);
    }

  }

  let ans = [];
  for (let i = 0; i < N; ++i) if (safe[i])
    ans.push(i);

  return ans;
}

const g = new Array(
  new Array(1, 2),
  new Array(2, 3),
  new Array(4, 3),
  new Array(4, 5));
console.log(eventualSafeNodes(g));