// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let max = 0;
    let secondMax = 0;
    let copyStones = stones;
    while (true) {
        console.log(copyStones);
        if(copyStones.length === 0) {
            return 0;
        } else if (copyStones.length === 1) {
            return copyStones[0];
        }
        copyStones = copyStones.sort(function(a, b){return b-a});
        max = copyStones[0];
        secondMax = copyStones[1];
        copyStones.shift()
        copyStones.shift();
        console.log(copyStones);
        if (max !== secondMax) {
            copyStones.push(max - secondMax);
        } 
    }
};

// lastStoneWeight([2,7,4,1,8,1]);
lastStoneWeight([3,7,2]);
