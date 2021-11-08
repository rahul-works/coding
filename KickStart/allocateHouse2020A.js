var readline = require('readline');
var rl = readline.createInterface(
     process.stdin, process.stdout);
let expect = 'begin';
var house;
var budget;
var costList;
var num_test_case;
let testCase = 1;
rl.on('line', function(line){
   if (expect === 'begin') {
       num_test_case = parseInt(line);
       expect = 'house_budget';
   } else if (expect === 'house_budget') {
       var house_budget = line.split(' ');
       house = parseInt(house_budget[0]);
       budget = parseInt(house_budget[1]);
       expect = 'costList';
   } else if (expect === 'costList') {
       costList = line.split(' ');
       costList = costList.map(function (x) { 
        return parseInt(x, 10); 
       });
       expect = 'house_budget';
       
      if (num_test_case > 0){
        console.log("Case #"+testCase+": "+maximumHouseCanBuy(budget, costList));
        testCase++;
        num_test_case--;
      } 
      if (num_test_case<1) {
        rl.close();
      }
   }
});

function maximumHouseCanBuy(budget, costList) {
  let count = 0;
  costList = countSort(costList);

  while (costList[count]<=budget) {
    budget -= costList[count];
    count++;
  }
  return count;
}


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

// const house = 4;
// const budget = 100;
// const costList = [20, 90, 40, 90];

// console.log(maximumHouseCanBuy(house, budget, costList));
// console.log(maximumHouseCanBuy(4, 50, [30, 30, 10, 10]));
// console.log(maximumHouseCanBuy(3, 300, [999, 999, 999]));

/*let input = "3
4 100
20 90 40 90
4 50
30 30 10 10
3 300
999 999 999"*/