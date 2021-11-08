function boundry(m) {
  const N = m.length;
  const M = m[0].length;

  for (let j = 0; j < M-1; j++) {
    console.log(m[0][j]);
  }
  for (let i = 0; i < N-1; i++) {
    console.log(m[i][M-1]);
  }
  for (let j = M-1; j > 0; j--) {
    console.log(m[N-1][j]);
  }
  for (let i = N-1; i > 0; i--) {
    console.log(m[i][0]);
  }
}

const m = [[1, 2, 3 ],
[1, 2, 3 ],
[1, 2, 3 ]];

boundry(m);