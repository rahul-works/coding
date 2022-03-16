function powMod(a, n, m) {
  let ans = 1;
  for (let i = 0; i < n; i++) {
    ans = ((ans % m) * (a%m))%m; 
  }

  return ans %m;
}

console.log(powMod(2, 4, 14));