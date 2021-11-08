
  largestRectangleArea = function(A){
    // each element in N 
    // stack -> 2 -> 2
    // stack -> 2 1 -> 2
    // stack -> 2 1 5 -> 3 | 5 * 1 -> 5
    // stack -> 5
    // stack -> 5 6 -> 4
    let stack = [];
    let maxArea = 0;
    for ( let i = 0; i < A.length; i++) { // 0 to 5 ->  2, 1, 5, 6, 2, 1
                                                      //0  1  2  3  4  5
      if (stack.length === 0) { // 2 1 5 6 2
        start = 0;
        stack.push(A[i]); // 2
      } else { // 1 5 6 2
        // check with all stack element with A[i]
        let sarea = 0;
        let min = A[i]; // 2 -> 5 2
        for (let j = 0; j < stack.length; j++) { // 2 1 -> 5 6 
          if (min > stack[j]) { 
            min = stack[j]; // - 1 5
          }
        }
        if (start !== 0)
          sarea = min * (i-start+1); // 2 2 5 6
        else 
          sarea = min * (i-start); 
        // console.log(stack, min, sarea); 
        if (maxArea < sarea) 
          maxArea = sarea; // 2 10
        
        if (sarea < A[i]) { 
          start = i; // 3
          stack = []; // clear stack 
          stack.push(A[i]); // 5
        } else { 
          stack.push(A[i]); // 2 1 -> 5 6 2
        }
      }
    }
    return maxArea;
  }

 console.log(largestRectangleArea([2, 1, 5, 6, 2, 1]));  // 10 