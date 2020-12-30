/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    
    if (A.length === 1) {
        return A;
    }
    let even = 0;
    let odd = A.length-1;
    while (even < odd) {
        if(A[even]%2 !== 0 && A[odd]%2 !== 1 ) {
            let temp = A[even];
            A[even] = A[odd];
            A[odd] = temp;
        }
        while (A[even]%2 === 0) {
            even++;
        }
        while (A[odd]%2 === 1) {
            odd--;
        }
    }
    return A;
};