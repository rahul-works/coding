function computeLPS(s) {
  const N = s.length;
  const lps = [];
  let i = 0;
  lps[0] = 0;
  j = 1;
  while (j < N) {
    if (s[i] === s[j]) {
      i++;
      lps[j] = i;
      j++;
    } else {
      if (i !== 0 ) {
        i = lps[i-1];
      } else {
        lps[j] = 0;
        j++;
      }
    }
  }
  return lps;
}

function reverse(p) {
  let s = [...p];
  const N = s.length;
  let i = 0; 
  let j = N-1;
  while (i < j) {
    let t = s[i];
    s[i] = s[j];
    s[j] = t;
    ++i;
    --j;
  }
  return s.join('');
}

let revS = reverse("abc");
let concatStr = "abc" + '$' + revS;
console.log(computeLPS(concatStr));