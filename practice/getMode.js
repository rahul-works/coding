function getMode(A, B) {
    let retArr = [];
    const hash = Array.length(A.length).fill(0);
    let max = 0;
    let min = 0;
    for (const num of A) {
        if (hash[num] === undefined) {
            hash[num] = 1;
        } else {
            hash[num] += 1;
        }
        if (max < hash[num]) {
            max = hash[num];
            min = num;
        }
    }
    for (const num in hash) {
        if (hash[num] === max && min > parseInt(num)) {
            min = parseInt(num);
        }
    }
    for (const update of B) {
        A[update[0] - 1] = update[1];

        hash[update[0] - 1] -= 1;
        hash[update[1]] += 1;
        console.log(hash);
        for (const num of A) {
            if (max < hash[num]) {
                max = hash[num];
                min = num;
            }
        }
        for (const num in hash) {
            if (hash[num] === max && min > parseInt(num)) {
                min = parseInt(num);
            }
        }
        retArr.push(min);
    }
    return retArr;
}

console.log(getMode([7, 5, 7, 11, 6, 2, 11, 7, 11, 4, 7], [
    [1, 2],
    [2, 2],
    [1, 2],
    [1, 10],
    [3, 8],
    [2, 9],
    [2, 10],
    [6, 3],
    [4, 6],
    [3, 10],
    [3, 4]
]));

//[
//     7,  2,  2, 7, 11,
//     11, 11, 11, 6, 10,
//      4
//   ]