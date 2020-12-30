/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let possibleJudge = Array.from({length: N}, (_, i) => i+1);
    console.log(possibleJudge);
    // loop 1: to check left hand side 
    for (let pair of trust) {
        if (possibleJudge.indexOf(pair[0]) !== -1) {
            possibleJudge.splice(possibleJudge.indexOf(pair[0]), 1);
        }
    }
    console.log(possibleJudge);
    const stageJudge = possibleJudge[0] !== undefined?possibleJudge[0]: -1;
    if (stageJudge === -1) {
        return stageJudge;
    }
    let notTrustJudge = Array(N-1).fill().map((_, i) => {if (i+1 !== stageJudge) { return i+1}});
    console.log(notTrustJudge);
    for (let pair of trust) {
        if (pair[1] === stageJudge) {
            notTrustJudge.splice(possibleJudge.indexOf(pair[0]), 1);
        }
    };
    console.log(notTrustJudge);
    if (notTrustJudge.length === 0) {
        return stageJudge;
    }
    return -1;
};

// console.log(findJudge(2, [[1,2]]));
// console.log(findJudge(3, [[1,3],[2,3]]));
// console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
// console.log(findJudge(3, [[1,2],[2,3]]));
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]));