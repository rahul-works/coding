function findMax1s(m) {
  const N = m.length;
  const M = m[0].length;
  let c = 0;
  let i = 0;
  let j = M-1;
  while (i < N && j >= 0) {
    if (m[i][j] === 1) {
      c++;
      j--;
    } else {
      i++;
    }
  }
  return c;
}

const m = [[0,0,0,1],
[0,1,1,1],
[1,1,1,1]];

console.log(findMax1s(m));