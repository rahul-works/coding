function repeat2except2 (A) {
  let xor = 0; 
  const N = A.length;
  for (let i = 0; i < N; i++) {
    xor ^= A[i];
  }
  let pos = 0;
  for (let i = 0; i < 31; i++) {
    if (checkBits(xor, i)) {
      pos = i;
      break;
    }
  }
  let set = 0; unset = 0;
  for (let i = 0; i < N; i++) {
    if (checkBits(A[i], pos)) {
      set ^= A[i];
    } else {
      unset ^= A[i];
    }
  }
  return [set, unset];
}
function checkBits(N, i) {
  return (N >> i) & 1 === 1;
}

let A = [1,1, 2, 2, 3, 3, 4, 5];
console.log(repeat2except2(A));
