/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const comparator = ([h1, k1], [h2, k2]) => {
        if (h1 !== h2) return h2-h1;
        else if (k1 !== k2) return k1-k2;
    }
    people.sort(comparator);
    let result = [];
    for (const person of people) {
        result.splice(person[1], 0, person);
        console.log(result);
    }
    return result;
};
module.exports = reconstructQueue;
// console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));
// console.log(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));