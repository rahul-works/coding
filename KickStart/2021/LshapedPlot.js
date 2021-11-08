function checckL(p1, p2, R, C, Plot) {
  let count = 0;
  // console.log(p1, p2);
  // up -left 
  let left = 0;
  let up = 0;
  let right = 0;
  let down = 0;
  if (p1-1 > 0 && p2-1 > 0) {
    
    for (let i = p2 ; i >= 0 ; i--) {
      if (Plot[p1][i] !== '1') {
        break;
      }
      left++;
    }
    for (let i = p1 ; i >= 0 ; i--) {
      if (Plot[i][p2] !== '1') {
        break;
      }
      up++;
    }
    
    if (up > left) {
      if (left * 2 <= up) {
        up = left *2;
      } else {
        left = Math.floor(up / 2);
      }
      
      while (left > 1 && up > 0) {
        count++;
        // console.log(count, ': up > left', p1, p2, left, up);  
        left--;
        up -= 2;
      }
    } else {
      if (up * 2 <= left) {
        left = up *2;
      } else {
        up = Math.floor(left / 2);
      }
      while (up > 1 && left > 0) {
        count++;
        // console.log(count, ' else : up > left', p1, p2, left, up);  
        
        up--;
        left -= 2;
      }
    }
  }
  
  // up -right 
  if (p1-1 >0 && p2+1 < C) { // row -1 , col +1
    right = 0;
    up = 0;
    for (let i = p2 ; i < C; i++) {
      if (Plot[p1][i] !== '1') {
        break;
      }
      right++;
    }
    for (let i = p1 ; i >= 0 ; i--) {
      if (Plot[i][p2] !== '1') {
        break;
      }
      up++;
    }
    // console.log(' - : up > right', p1, p2, right, up);//1
    if (up === right && up > 2) {
      while (right > 2) {
        count += 2;
        right -= 2;
        up -= 2;
      }
    } else if (up > right) {
      if (right * 2 <= up) {
        up = right *2;
      } else {
        right = Math.floor(up / 2);
      }
      while (right > 1 && up > 1) {
        count++;
        // console.log(count, ': up > right', p1, p2, right, up);
        right--;
        up -= 2;
      }
    } else { // else 
      if (up *2 <= right) {
        right = up*2;
      } else {
        up = Math.floor(right/2);
      }
      while (up > 1 && right > 1) {
        count++;
        // console.log(count, ' else : up > right', p1, p2, right, up);  
        up--;
        right -= 2;
      }
    }
  }

  // down - right 
  if (p1+1 < R && p2+1 < C) { // row + 1 , col +1
    right = 0;
    down = 0;
    for (let i = p2 ; i < C; i++) {
      if (Plot[p1][i] !== '1') {
        break;
      }
      right++;
    }
    for (let i = p1 ; i < R ; i++) {
      if (Plot[i][p2] !== '1') {
        break;
      }
      down++;
    }
    if (down === right && down > 2) {
      while (right > 2) {
        count += 2;
        right -= 2;
        down -= 2;
      }
    } else if (down === right && down > 2) {
      while (right > 2) {
        count += 2;
        right -= 2;
        down -= 2;
      }
    } else if (down > right) {
      if (right * 2 <= down) {
        down = right *2;
      } else {
        right = Math.floor(down / 2);
      }
      while (right > 1 && down > 1) {
        count++;
        // console.log(count, ': down > right', p1, p2, right, down);
        right--;
        down -= 2;
      }
    } else { /// else 
      if (down*2 <= right) {
        right = down * 2;
      } else {
        down = Math.floor(right/2);
      }
      while (down > 1 && right > 1) {
        count++;
        // console.log(count, ' else :down > right', p1, p2, right, down);  //2
        down--;
        right -= 2;
      }
    }
  }

  // down - left 
  if (p1+1 < R && p2-1 > 0) { // row + 1 , col - 1
    left = 0;
    down = 0;
    for (let i = p2 ; i >= 0; i--) {
      if (Plot[p1][i] !== '1') {
        break;
      }
      left++;
    }
    for (let i = p1 ; i < R ; i++) {
      if (Plot[i][p2] !== '1') {
        break;
      }
      down++;
    }
    if (down === left && down > 2) {
      while (left > 2) {
        count += 2;
        left -= 2;
        down -= 2;
      }
    } else if (down > left) {
      if (left * 2 <= down) {
        down = left *2;
      } else {
         down = Math.floor(left / 2);
      }
      while (left > 1 && down > 0) {
        count++;
        
        // console.log(count, ':down > left', p1, p2, left, down);
        left--;
        down -= 2;
      }
    } else {
      if (down * 2 <= left) {
        left = down *2;
      } else {
        left = Math.floor(down / 2);
      }
      while (down > 1 && left > 1) {
        count++;
        // console.log(count, ' else :down > left', p1, p2, left, down);  
        down--;
        left -= 2;
      }
    }
  }

  return count;
}
function LShapedPlot(R, C, Plot) {
  let count = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      
      if (Plot[i][j] === '1') {
        count += checckL(i, j, R, C, Plot);
      }
    }
  }
  return count;
}

// let Plot = [
//   [1, 0, 0],
//   [1, 0, 1],
//   [1, 0, 0],
//   [1, 1, 0]];
// console.log(LShapedPlot(4, 3, Plot));
// Plot = [[1, 0, 0, 0],
// [1, 0, 0, 1],
// [1, 1, 1, 1],
// [1, 0, 1, 0],
// [1, 0, 1, 0],
// [1, 1, 1, 0]];
// console.log(LShapedPlot(6, 4, Plot));


var readline = require('readline');
var rl = readline.createInterface(
     process.stdin, process.stdout);
let expect = 'begin';
var R, C;
var num_test_case;
let testCase = 1;
let row = 0;
let plot = [];
rl.on('line', function(line){
   if (expect === 'begin') {
       num_test_case = parseInt(line);
       expect = 'start';
   } else if (expect === 'start') {
       var R_C = line.split(' ');
       R = parseInt(R_C[0]);
       C = parseInt(R_C[1]);
       expect = 'plot';
   } else if (expect === 'plot') {
    plot[row] = line.split(' ');
    row++;
    if (row>=R) {
      row = 0;
      expect = 'start';
      if (num_test_case > 0){
        console.log("Case #"+testCase+": "+LShapedPlot(R, C, plot));
        testCase++;
        num_test_case--;
      } 
      if (num_test_case<1) {
        rl.close();
      }
    }
   }
});