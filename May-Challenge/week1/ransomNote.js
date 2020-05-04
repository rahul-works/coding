/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let mazHack = {};
    for (const chr of magazine) {
        if (mazHack[chr] != undefined) {
            mazHack[chr] += 1;
        } else {
            mazHack[chr] = 0;
        }
    }
    console.log(mazHack);
    for (const chr of ransomNote) {
        if (mazHack[chr] != undefined){
            if (mazHack[chr] === 0) {
                delete mazHack[chr];
            } else {
                mazHack[chr] -= 1;
            }
        } else {
            console.log(mazHack);
            return false;
        }
    }
    console.log(mazHack);
    return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh"));
console.log(canConstruct("bjaajgea", "affhiiicabhbdchbidghccijjbfjfhjeddgggbajhidhjchiedhdibgeaecffbbbefiabjdhggihccec"));
