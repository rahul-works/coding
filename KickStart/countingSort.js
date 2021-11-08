function countSort(num) {
  let keys = [];
  for (let i = 0; i < num.length; i++) {
    if (!keys[num[i]]) {
      keys[num[i]] = 1;
    } else {
      keys[num[i]] += 1;
    }
  }
  if (!keys[0]) {
    keys[0] = 0;
  }
  for (let i = 1; i <keys.length; i++) {
    if (!keys[i]) {
      keys[i] = keys[i-1];
    } else {
      keys[i] += keys[i-1];
    }
  }
  let returnArr = [];
  for (let i = 0; i < num.length; i++) {
    returnArr[keys[num[i]]-1] = num[i];
    keys[num[i]]--;
  }
  return returnArr;
}

console.log(countSort([1,4,1,2,7,5,2]));