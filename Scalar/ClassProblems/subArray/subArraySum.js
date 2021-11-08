// bruteforce O(N^3)
function subArraySum1(A) {
  const N = A.length;
  let s1 = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      let s = 0;
      for (let k = i; k <= j; k++) {
        s += A[k];
      }
      s1+=s;
      // console.log(s);
    }
  }
  return s1;
}
const A = [1,2,3]; // 196
const B = [3, -2, 4, -1, 2, 6]; // 196
// console.log(subArraySum1(A));
console.log(subArraySum1(B));

// carry forward O(N^2) 
function subArraySum2(A) {
  const N = A.length;
  let ans = 0;
  
  for (let i = 0; i < N; i++) {
    let s = 0;
    for (let j = i; j < N; j++) {
      s += A[j];
      ans += s;
    }
  }
  return ans;
}
// console.log(subArraySum2(A));
console.log(subArraySum2(B));

// Adding Contribution O(N)
function subArraySum3(A) {
  const N = A.length;
  let s = 0;
  
  for (let i = 0; i < N; i++) {
    let left = i +1;
    let right = N-i;
    let total = left * right;
    s += (total*A[i]);
  }
  return s;
}
// console.log(subArraySum3(A));
console.log(subArraySum3(B));
