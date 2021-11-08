function fractionToDecimal(numerator,denominator){
  let num = (numerator/denominator).toString();
  let decimal = false;
  let returnNum = '';
  let repeat = -1;
  
  for (let i = 0; i < num.length; i++) {
      if (num[i] === '.') {
          decimal = true; 
      } 
      if (decimal) {
          if (i+1 < num.length && num[i] === num[i+1]) {
              repeat = num[i];
          } else {
            if (repeat === -1)
              returnNum += num[i];    
          }
      } else {
          returnNum += num[i];
      }
  }
  if (parseInt(repeat) > 0) {
      returnNum += '(' +repeat+')';
  }
  return returnNum;
}

// console.log(fractionToDecimal(1, 3));
// console.log(fractionToDecimal(5, 2));

let a = -1;

console.log(a>>2);