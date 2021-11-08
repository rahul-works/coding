function isPrime(N) {
  let c = 0; 
  for (i = 1; i <= N; i++) {
    if (N%i === 0) {
      ++c;
    }
  }
  if (c === 2) {
    return true;
  }
  return false;
}

console.log(isPrime(5));

function isPrimeOp(N) {
  if (N===1) return false;
  for (let i = 2; i*i <= N; i++ ) {
    if (N%i === 0) {
      return false;
    }
  }
  return true;
}

console.log('5:'+isPrime(5));
console.log('7:'+isPrime(7));
console.log('8:'+isPrime(8));