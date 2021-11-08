function magic(A) {
  let ans = 0;
  let p = 1;
  while (A > 0) {
    p *= 5;
    if (A%2 === 1) ans += p;
    A = Math.floor(A/2);
    console.log(A, p, ans)
  }
  return ans;
} 

console.log(magic(10));