/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let result = [];
    if (s.length < p.length) {
        return result;
    }

    let hashCheck   = {};
    for( const char of p.split('')) {
        if(hashCheck[char] === undefined) {
            hashCheck[char] = 1;
        } else {
            hashCheck[char] += 1;
        }
    }
    console.log(hashCheck);
    let hashSlider = {};
    
    for (const key in s) {
        if (hashSlider[s[key]] === undefined) {
            hashSlider[s[key]] = 1;
        } else {
            hashSlider[s[key]] += 1;
        }
        if (key >= p.length) {
            if (hashSlider[s[key - p.length]] === 1) {
                delete hashSlider[s[key - p.length]];
            } else {
                hashSlider[s[key - p.length]] -= 1;
            }
        }
        console.log(hashSlider);
        if (isEquivalent(hashCheck, hashSlider)) {
            console.log(key-p.length+1);
            result.push(key-p.length+1);
        }
    }
    return result;
};

function isEquivalent(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    return true;
}


console.log(findAnagrams( "cbaebabacd", "abc"));
console.log(findAnagrams( "abab", "ab"))