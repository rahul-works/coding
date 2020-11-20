/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    if (src === dst) {
        return 0;
    }
    let location = {};
    let prices = {};
    for (const stop of flights) {
        if (location[stop[0]] === undefined) {
            location[stop[0]] = [];    
        }
        location[stop[0]].push([stop[1], stop[2]]);
    }
    console.log(location);
    for (let i = 0; i < n; i += 1) {
        prices[i] = Number.MAX_VALUE;
    }
    let q = [[src, -1, 0]];
    while (q.length !== 0) {
        let currentStop = q.pop(0);
        console.log(currentStop[0] === dst );
        console.log(dst );
        console.log(currentStop[0]  );
        if (currentStop[0] === dst || currentStop[1] === K) {
            continue;
        }
        if (location[currentStop[0]] !== undefined) {
            for (const loc of location[currentStop[0]]) {
                console.log(loc);
                if (currentStop[2]+loc[1] >= prices[loc[0]]) {
                    continue;
                } else {
                    prices[loc[0]] = currentStop[2]+loc[1];
                    q.push([loc[0], currentStop[1]+1, currentStop[2]+loc[1]]);
                }
            }
        }
        console.log(prices);
    }
    if (prices[dst] !== Number.MAX_VALUE)
        return prices[dst];
    else 
        return -1;
};

// console.log(findCheapestPrice(3
//     , [[0,1,100],[1,2,100],[0,2,500]]
//     , 0
//     , 2
//     , 1));
    // console.log(findCheapestPrice(3
    //     , [[0,1,100],[1,2,100],[0,2,500]]
    //     , 0
    //     , 2
    //     , 0));

    console.log(findCheapestPrice(5, [
        [ 4, 1, 1 ],
        [ 1, 2, 3 ],
        [ 0, 3, 2 ],
        [ 0, 4, 10 ],
        [ 3, 1, 1 ],
        [ 1, 4, 3 ]
      ], 2 ,1, 1))