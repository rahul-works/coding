// Closet Min Max/ Smallest Sub Array 
function minMaxSubArray(A) {
  const N = A.length;
  let ans = A.length;
  let max = A[0];
  let min = A[0];
  for (let i = 1; i < N; i++) {
    if (max<A[i]) {
      max = A[i];
    }
    if (min>A[i]) {
      min=A[i];
    }
  }
  if (min === max) return 1;
  for (let i = 0; i < N; i++) {
    if (A[i] === max) {
      for (let j = i; j < N; j++) {
        if (A[j]===min) {
          ans = Math.min(ans, j-i+1);
          break;
        }
      }
    } else if (A[i] === min) {
      for (let j = i; j < N; j++) {
        if (A[j]===max) {
          ans = Math.min(ans, j-i+1);
          break;
        }
      }
    }
  }
  
  return ans;
}

let A = [2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1];//3
console.log(minMaxSubArray(A)); // O(N^2)

function opMinMaxSubArray(A) {
  const N = A.length;
  let ans = A.length;
  let max = A[0];
  let min = A[0];
  for (let i = 1; i < N; i++) {
    if (max<A[i]) {
      max = A[i];
    }
    if (min>A[i]) {
      min=A[i];
    }
  }
  let mini = 2*N;
  let maxi = 2*N;
  for (let i = N-1; i >= 0; i--) {
    if (A[i] === max) {
      ans = Math.min(ans, mini-i+1);
      maxi = i;
    } else if (A[i] === min) {
      ans = Math.min(ans, maxi-i+1);
      mini = i;
    }
  }
  return ans;
}

console.log(opMinMaxSubArray(A)); // O(N)