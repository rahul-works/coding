function lastNumber(num) {
  
  num = num.toString();
  const N = num.length;
  
  let ret = '';
  let cur = num[N-1];
  for (let i = N-2; i>=0; i--) {
    if (parseInt(cur) >= parseInt(num[i])) {
      ret = cur+ret;
      cur = num[i];
    } else {
      // console.log(ret);
      let t = '';
      for (let j = 0; j < ret.length; j++) {
        t += '9';
      }
      ret = t;
      ret = '9'+ret;
      cur = parseInt(num[i])-1;
      // console.log(cur, i, num[i], num, '-'+ret);
    }
  }
  ret = cur + ret;
  return parseInt(ret);
}
console.log(lastNumber(23245));
console.log(lastNumber(11235888));
console.log(lastNumber(111110));
console.log(lastNumber(33245));
