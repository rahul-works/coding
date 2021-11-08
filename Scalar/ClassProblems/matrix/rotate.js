function rotate(m) {
  m = transpose(m);
  let N = m.length;
  let M = m[0].length;
  console.log(m);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < Math.floor(M/2); j++) {
      m[i][j] = m[i][j] ^ m[i][M-1-j];
      m[i][M-1-j] = m[i][j] ^ m[i][M-1-j];
      m[i][j] = m[i][j] ^ m[i][M-1-j];
    }
  }
  return m;
}

function transpose(m) {
  let N = m.length;
  let M = m[0].length;
  for (let i = 0; i < N; i++) {
    for (let j = i+1; j < M; j++) {
      m[i][j] = m[i][j] ^ m[j][i];
      m[j][i] = m[i][j] ^ m[j][i];
      m[i][j] = m[i][j] ^ m[j][i]; 
    }
  }
  return m;
}
m = [[1, 2, 3 ],
[1, 2, 3 ],
[1, 2, 3 ]];

console.log(rotate(m));