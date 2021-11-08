function maxHeap () {
  let nums = [];

  function insert(num) {
    nums.push(num);
    let i = nums.length-1;
    let parent = i;
    if (i%2 === 0) {
      parent = i -1 ;
    } 
    parent = Math.floor(parent/2);
    console.log(parent, i);
    while (parent >= 0 && nums[i] > nums[parent]) {
      let temp = nums[i];
      console.log(nums[parent], nums[i]);
      nums[i] = nums[parent];
      nums[parent] = temp;
      
      parent = i;
      if (i%2 === 0) {
        parent = i-1;
      } 
      i = Math.floor(parent/2);
      parent = i;
      if (i%2 === 0) {
        parent = i-1;
      } 
      parent = Math.floor(parent/2);
      console.log(parent);
    }
    return nums;
  }

  function remove(copy) {
    let num = copy[0];
    let i = 0;
    while (i < copy.length) {
      if (copy[i*2+1]>copy[i*2+2]) {
        copy[i*2] = copy[i*2+1];
        i = i*2+1;
      } else {
        copy[i*2] = copy[i*2+2];
        i = i*2 + 2;
      }
    }
    copy.pop();
    copy = copy.filter(el => {
      return el != null && el != '';
    });
    console.log(copy, copy.length);
    return num;
  }
  function kLargest (k) {
    let copyNums = [...nums];
    remove(copyNums);
    remove(copyNums);

  }
  console.log(insert(2));
  console.log(insert(4));
  console.log(insert(5));
  console.log(insert(8));  
  console.log(insert(3));  
  console.log(insert(5));  
  console.log(insert(10));  
  console.log(insert(9));  
  console.log(insert(4));  
  console.log(kLargest(1));
}

maxHeap();