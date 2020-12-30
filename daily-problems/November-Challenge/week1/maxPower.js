/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    const hash = {};
    let max = 1;
    let prev = '';
    for (const chr of s) {
        if (hash[chr] === undefined) {
            hash[chr] = 1;
        } else {
            if(prev === chr && hash[chr] > 0) {
                hash[chr]++;
                if (max < hash[chr]){
                    max = hash[chr];
                    console.log(hash[chr], chr, max);
                }
            } else {
                hash[chr] = 1;
            }
        }
        prev = chr;
    }
    return max;
};