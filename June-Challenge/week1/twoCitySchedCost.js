/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let travelCostDiff = 0;
    let N = costs.length/2;
    console.log(N);
    travelCostDiff = costs.sort(function(a,b){
        return (a[0]-a[1]) - (b[0]-b[1]);
    });
    // console.log(travelCostDiff);
    let effectiveTravelCost = 0;
    for (const key in travelCostDiff) {
        if (key < N) {
            effectiveTravelCost += travelCostDiff[key][0];
        } else {
            effectiveTravelCost += travelCostDiff[key][1];
        }
    }   
    return effectiveTravelCost;
};

console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]));
console.log(twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]));
