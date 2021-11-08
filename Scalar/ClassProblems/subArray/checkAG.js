// how many pairs i, j  where a[i]='a', a[j]= 'g' && a[i]+a[j]='ag'
function checkAG(s) {
  let c = 0; 
  let ans = 0;
  const N = s.length;
  for (let i = N-1; i >= 0; i--) {
    if (s[i]==='g') {
      c++;
    } else if (s[i]==='a') {
      ans += c;
    }
  }
  return ans;
}

let s = 'aafdfgg'; // 4
console.log(checkAG(s));