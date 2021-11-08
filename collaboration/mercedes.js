function getDistance (time, N) {
  let B = [];

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (!B[i])
        B[i] = 0;
      B[i] += time[j] * F(i, j, N);
    }
  }

  function F(i, j, N) {
    if (i <= j) {
      return Math.min(i, N-j+1);
    } else {
      return F(j, i, N);
    }
  }
  B.shift();
  return B;
}

console.log(getDistance ([-1, 3, 1, 4], 3));