/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let slider = '';
    let maxLength = 0;
    for (const chr of s) {
        // console.log(slider.indexOf(chr));
        if (slider.indexOf(chr)>0) {
            slider = slider.replace(slider.substr(0, slider.indexOf(chr)), '');
        }
        while (slider.indexOf(chr)>-1) {
            slider = slider.replace(chr, '');
        } 

        slider += chr;
        // console.log(slider);
        if (slider.length>maxLength) {
            maxLength = slider.length;
        }
    }
    return maxLength;
};
// console.log(lengthOfLongestSubstring("abcabcbb")); //3
// console.log(lengthOfLongestSubstring("bbbbb")); //1
// console.log(lengthOfLongestSubstring("pwwkew")); //3
// console.log(lengthOfLongestSubstring("aab")); //2
// console.log(lengthOfLongestSubstring("dvdf")); //3
// console.log(lengthOfLongestSubstring("ohvhjdml")); //6
// console.log(lengthOfLongestSubstring("pwwkew")); //3
module.exports = lengthOfLongestSubstring;