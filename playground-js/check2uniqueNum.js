
const solve = function(A){
  let ExOr = A[0];
  for (let i = 1; i <A.length; i++) {
      ExOr ^= A[i];
  }
  
console.log(ExOr, ExOr.toString(2), checkSetBit(ExOr));
  const pos = checkSetBit(ExOr);
  const ar= [], br = [];
  for (const num  of A) {
        if (num>>pos & 1) {
            ar.push(num);
        } else {
            br.push(num);
        }
    }
    console.log(ar, br);
    let num1 = ar[0];
    for (let i = 1; i <ar.length; i++) {
      num1 ^= ar[i];
      }
    let num2 = br[0];
    for (let i = 1; i <br.length; i++) {
      num2 ^= br[i];
    }
    const retArr = [];
    retArr.push(num1);
    retArr.push(num2);
    return retArr;
  }
 
 
 function checkSetBit(num){
     let count = 0;
     while ((num & 1 )!== 1) {
       console.log('-0');
        ++count;
        num = num >>1;
     }
     return count;
 }
 function setBitCount(num) {
  let count = 0;
  while (num) {
     if (num&1 === 1){
       ++count;
     }
      num = num >>1;
  }
  return count;
}
//  console.log(solve([ 2308, 1447, 1918, 1391, 2308, 216, 1391, 410, 1021, 537, 1825, 1021, 1729, 669, 216, 1825, 537, 1995, 805, 410, 805, 602, 1918, 1447, 90, 1995, 90, 1540, 1161, 1540, 2160, 1235, 1161, 602, 880, 2160, 1235, 669 ]
  // ));
  console.log(solve([ 186, 256, 102, 377, 186, 377 ]));