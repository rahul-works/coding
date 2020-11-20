/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */

var stringShift = function(s, shift) {
    if(s === undefined || s.length === 0) {
        return s;
    }
    if(shift.length === 0){
        return s;
    }
    s = s.split('');
    for( const direction of shift) {
        if (direction[0] == 0) { // left shift
            for (let count=0; count<direction[1]; count += 1) {
                s.push(s.shift());
            }
            console.log(s);
        } else { // right shift 
            for (let count=0; count<direction[1]; count += 1) {
                s.unshift(s.pop());
                console.log(s);
            }
        }
    }
    s = s.join('');
    return s;
};

Input: s = "abc", shift = [[0,1],[1,2]]
stringShift(s, shift);
