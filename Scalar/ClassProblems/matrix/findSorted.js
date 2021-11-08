function findSorted (m, k) {
  let N = m.length;
  let M = m[0].length;

  let i = 0; 
  let j = M-1;
  while ( i < N && j >= 0) {
    if (m[i][j] === k) {
      return true;
    }
    if (m[i][j]>k) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}
m = [[1, 2, 3 ],
[1, 2, 3 ],
[1, 2, 3 ]];
console.log(findSorted(m, 2));
console.log(findSorted(m, 4));
