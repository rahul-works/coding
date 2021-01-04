// time O(N)
// space O(1)
function validSeq(array, sequence) {
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (sequence[seqIdx] === array[arrIdx]) {
            ++seqIdx;
        }
        ++arrIdx;
    }
    return seqIdx === sequence.length;
}


console.log(validSeq([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
console.log(validSeq([], []));