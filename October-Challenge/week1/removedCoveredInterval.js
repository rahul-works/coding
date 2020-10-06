/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    let ans = 0;
    const n = intervals.length;
    const coveredBy = (a, b) => {
        return b[0] <= a[0] && a[1] <= b[1];
    };
    for (let i = 0; i < n; i++) {
        const a = intervals[i];
        let covered = false;
        for (let j = 0; j < n; j++) {
            if (j === i) continue;
            const b = intervals[j];
            if (coveredBy(a, b)) {
                covered = true;
                break;
            }
        }
        if (!covered) ans++;
    }
    return ans;
};