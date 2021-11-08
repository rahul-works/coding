function rowSum (m) {
  let N = m.length;
  let M = m[0].length;
  for (let i = 0; i < N; i++) {
    let s = 0;
    for (let j = 0; j < M; j++) {
      s += m[i][j];
    }
    console.log(s);
  }
}

m = [[1, 2, 3 ],
[1, 2, 3 ],
[1, 2, 3 ]];
rowSum(m);

function colSum (m) {
  let N = m.length;
  let M = m[0].length;
  for (let j = 0; j < M; j++) {
    let s = 0;
    for (let i = 0; i < N; i++) {
      s += m[i][j];
    }
    console.log(s);
  }
}
colSum(m);