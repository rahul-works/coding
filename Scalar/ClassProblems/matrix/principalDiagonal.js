function principalDiagonal(m) {
  let N = m.length;
  for(let i = 0; i < N; i++) {
    let j = N-1-i;
    console.log(m[i][j]);
  }
}

m = [[1, 2, 3 ],
[1, 2, 3 ],
[1, 2, 3 ]];
principalDiagonal(m);