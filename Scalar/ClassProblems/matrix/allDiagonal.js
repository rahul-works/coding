function allDiagonal(m) {
  const N = m.length;
  const M = m[0].length;

  for (let j = 0; j < M; j++) {
    let s = 0;
    let e = j;
    let d = '';
    while (s < N && e >= 0 ) {
      d += m[s][e] + ' - ';
      s++;
      e--;
    }
    console.log(d);
  }

  for (let i = 0; i < N; i++) {
    let s = i;
    let e = M-1;
    let d = '';
    while (s < N ) {
      d += m[s][e] + ' - ';
      s++;
      e--;
    }
    console.log(d);
  }

}
m = [[1, 2, 3 ],
[1, 2, 3 ],
[1, 2, 3 ]];
allDiagonal(m);