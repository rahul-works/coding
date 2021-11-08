function countSetBits(N) {
  let c = 0;
  for (let i = 0; i < 31; i++) {
    if (checkBits(N, i)) {
      c++;
    }
  }
  return c;
}

function checkBits(N, i) {
  return (N >> i) & 1 === 1;
}

console.log(countSetBits(6));//2
console.log(countSetBits(15));//4