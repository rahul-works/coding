/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
/*const IDEAL = "ideal";
var leastInterval = function(tasks, n) {
    let hash = {};
    for (const task of tasks) {
        if (hash[task]  === undefined) {
            hash[task] = 1;
        } else {
            hash[task] += 1;
        }
    }
    let order = [];
    while (Object.keys(hash).length !== 0) {
        let count = 0;
        
        for (const task in hash) {
            order.push(task);
            if (hash[task] > 1) {
                hash[task] -= 1;
            } else {
                delete hash[task];
                if (Object.keys(hash).length === 0) {
                    count = n;
                }
            }
            count++;
            if (count > n) {
                break;
            }
        }
        while (count <= n) {
            order.push(IDEAL);
            count++;
        }
        console.log(hash);
        console.log(order);
    }
    return order.length;
};*/

var leastInterval = function(tasks, n) {
    let hash = {};
    let maxVal = -1;
    for (const task of tasks) {
        if (hash[task]  === undefined) {
            hash[task] = 1;
        } else {
            hash[task] += 1;
            if (maxVal < hash[task]) {
                maxVal = hash[task];
            }
        }
    }
    let idleSlots = maxVal*n;
    for (const task in hash) {
        idleSlots -= Math.min(hash[task], maxVal);
    }
    console.log(idleSlots);
    return idleSlots > 0? idleSlots+tasks.length : tasks.length;
}

console.log(leastInterval(["A","A","A","B","B","B"], 50)); //104
// console.log(leastInterval(["A","A","A","B","B","B"], 2)); //8
// console.log(leastInterval(["A","A","A","B","B","B"], 0)); // 6
// console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)); //16
// console.log(leastInterval(["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J","K","K","L","L","M","M","N","N","O","O","P","P","Q","Q","R","R","S","S","T","T","U","U","V","V","W","W","X","X","Y","Y","Z","Z"], 2)); //8
