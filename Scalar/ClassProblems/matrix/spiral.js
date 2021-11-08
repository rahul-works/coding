function spiral(m) {
  let N = m.length;
  let M = m[0].length; 

  let i = 0; 
  let j = 0; 
  while (N>1 && M>1) {
    for (let k = 1; k < M; k++) {
      console.log(m[i][j]);
      ++j;
    }
    for (let k = 1; k < N; k++) {
      console.log(m[i][j]);
      ++i;
    }
    for (let k = 1; k < M; k++) {
      console.log(m[i][j]);
      --j;
    }
    for (let k = 1; k < N; k++) {
      console.log(m[i][j]);
      --i;
    }
    N-=2;
    M-=2;
    i++;
    j++;
  }
  if (N===1 || M === 1) {
    if (N > 1) {
      for (let k = 1; k <= N; k++) {
        console.log(m[i][j]);
        ++i;
      }
    } else {
      for (let k = 1; k <= M; k++) {
        console.log(m[i][j]);
        ++j;
      }
    }
  }
}

m = [[1, 2, 3 ],
[1, 2, 3 ],
[1, 2, 3 ]];

// spiral(m);

// 1 2 3 3 3 2 1 1 2

m = [[1, 2, 3, 4 ],
[1, 2, 3, 4 ],
[1, 2, 3, 4 ],
[1, 2, 3, 4 ]];

spiral(m);

// 1 2 3 4 4 4 4 3 2 1 1 1 2 3 3 2
