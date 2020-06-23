let assert = require('assert');
let singleNumber = require('./singleNumber');
describe('check single number', function() {
    it('single number', function() {
        assert.equal(singleNumber([2,2,3,2]), 3);
        assert.equal(singleNumber([0,1,0,1,0,1,99]), 99);
        assert.equal(singleNumber([43,16,45,89,45,-2147483648,45,2147483646,-2147483647,-2147483648,43,2147483647,-2147483646,-2147483648,89,-2147483646,89,-2147483646,-2147483647,2147483646,-2147483647,16,16,2147483646,43]), 2147483647);
    });
});
// console.log(singleNumber([2,2,3,2]));
// console.log(singleNumber([0,1,0,1,0,1,99]));
// console.log(singleNumber([43,16,45,89,45,-2147483648,45,2147483646,-2147483647,-2147483648,43,2147483647,-2147483646,-2147483648,89,-2147483646,89,-2147483646,-2147483647,2147483646,-2147483647,16,16,2147483646,43]));
// 2147483647