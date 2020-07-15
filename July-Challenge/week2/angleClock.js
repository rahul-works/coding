const reverseBits = require("./reverseBits");

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    if (hour === 12 ) {
        hour = 0
    };
    let angle = 0, reverseAngle = 0, reverseHour = 0;
    if (minutes > 0) {
        angle = Math.abs((minutes - ((hour + minutes/60) *5))*6);
        reverseAngle = ((60-minutes) + ((hour + minutes/60) *5))*6;
        reverseHour = Math.abs((minutes + (60-(hour + minutes/60) *5))*6);
        return angle < reverseAngle? (angle<reverseHour? angle: reverseHour): (reverseAngle<reverseHour?reverseAngle:reverseHour);
    } else {
        angle = hour > 6 ? (12-hour) * 30:hour * 30;
        return angle >= 0?angle:angle*-1;
        
    }
};

// console.log(angleClock(1, 57));
// console.log(angleClock(12, 30));
// console.log(angleClock(3, 30));
// console.log(angleClock(4, 50));
// console.log(angleClock(3, 15));
// console.log(angleClock(12, 0));
// console.log(angleClock(8, 7));
// console.log(angleClock(10, 0));
module.exports = angleClock;