/*



ouput: 
2
2 1 4
3 0 2 3 

2 -> (0, 1) (0, 3)
3 -> (0, 1, 2) 49
4  -> (0, 1, 2, 3) 
2 3 -> 4(1, 4) 7(0, 2, 3) 4^2 + 7^2 = 65 

number # 5
*/

function maxScore(numP, teamArr, pizza) {
  // teamArr 0 - 2, 1 - 3, 2 - 4
  // master ingradiant list -> 7 
  // single team 
  // minimum team size > numP return 0; -> 2
  pizza.sort(function (a, b) {
    return b.length-a.length;
  });

  let teamSizeArr = [] 
  for (let i = 0; i < teamArr.length; i++) { // 1 2 1
    for (let j = 0; j < teamArr[i]; j++) {
      teamSizeArr.push(i+2); // 2 3 3 4
    }
  }
  
  let bestCommbination = [];
  bestCommbination = bestPossibleCombination(teamSizeArr);
  
  return bestCommbination;
  // timesize equal to number of pizza then that team is best team 

  // matrix (col # team)-> 2 3 3 4
  // helper function : chooseOneTeamPizza []
  // combination of team 
  // 7 + 
}

function bestPossibleCombination(teamSizeArr) {
  console.log(teamSizeArr);
  let minDiff = Number.MAX_SAFE_INTEGER;
  let bestCommbination = [];
  for (let i = 0; i <teamSizeArr.length; i++) { 
    let stack = [];
    let sum = teamSizeArr[i];
    let diff = numP-sum;
    if(diff>=0 && minDiff>diff) {// 6-2
      minDiff = diff; //4
    }
    console.log('-', stack);
    // 2 3 3 4
    
    for (let j = i+1; j<teamSizeArr.length; j++) { //2334
      sum += teamSizeArr[j]; // 4
      diff = numP-sum // 2
      if(diff>=0){
        stack.push(teamSizeArr[j]); //2, 2, 2, 3
      }
      console.log(stack, sum);
      if(diff>=0 && minDiff>diff) { 
        minDiff = diff; //0
      } else if (diff<0) {
        sum = teamSizeArr[j];
        for(let k = 0;k<stack.length; k++) {
          sum += stack[k] //6
        }
        diff = numP-sum
        if (minDiff === diff) { 
          console.log('push')
          stack.unshift(teamSizeArr[j])
          bestCommbination.push(stack) //222
          break;
        }
        sum = teamSizeArr[i]
        diff = numP-sum
        stack = []
      } 
    } // j loop
    console.log(stack)
  }
  return bestCommbination
}

function chooseOneTeamPizza(teamSize, pizza) {// 5 2 pizza
  let selectedPizza = [];
  selectedPizza.push(pizza[0]);
  let maxCountDiff = pizza[0].length; // 3
  
  for (let j = 1; j < teamSize; j++) {//
    let tempCount = 0, tempIndex;
    for (let i = 1; i < pizza.length; i++) {
      const commonIngredient = selectedPizza[0].filter(value => pizza[i].includes(value));
      if (tempCount > pizza[i].length-commonIngredient.length) {
        tempCount = pizza[i].length-commonIngredient.length;
        tempIndex = i;
      }
    }
    maxCountDiff+=tempCount
    selectedPizza.push(pizza[tempIndex])
  }
  
  return maxCountDiff;
}

const numP = 5; 
const teamArr = [1, 2, 1];
const pizza = [['onion', 'pepper', 'olive'],
['mushroom', 'tomato', 'basil'], 
['chicken', 'mushroom', 'pepper'], 
['tomato', 'mushroom', 'basil'],
['chicken', 'basil']] ;
console.log(maxScore(numP, teamArr, pizza)); // 65 

/*

2 2 2 3 3 4

6

2 2 2 3 3 -> combination 0 0 
1 1
2 2 
7 7 7 4 4







*/