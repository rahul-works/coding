function insertionSort(arr) {
  for (let j = 1; j < arr.length; j++) {
    const key = arr[j];
    let i = j-1;
    while (i >= 0 && arr[i]>key) {
      arr[i+1] = arr[i];
      --i;
    }
    arr[i+1] = key;
  }
  return arr;
}

console.log(insertionSort([31, 41, 59, 26, 41, 58]));