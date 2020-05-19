/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    // s1 = s1.split('').sort();
    // s2 = s2.split('').sort();

    let arraySlider = [];
    s1 = s1.split('').sort();
    console.log(s1.length);
    for (const key in s2) {
        // if (arraySlider.indexOf(s2[key]) === -1) {
            arraySlider.push(s2[key]);
        // }  // else do nothing 
        if (key >= s1.length) {
            arraySlider.shift();
            // do Nothing
        }
        console.log(arraySlider);
        if (isEquivalentArray(s1, arraySlider)) {
            // console.log(key-s1.length+1);
            // result.push(key-s1.length+1);
            return true;
        }
    }
    return false;
};

function isEquivalentArray(a, [...b]) {
    if (a.length != b.length) {
        return false;
    }
    b = b.sort();
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
// console.log(checkInclusion( "ab", "eidbaooo"));
// console.log(checkInclusion( "ab", "eidboaoo"));
console.log(checkInclusion("adc", "dcda"));