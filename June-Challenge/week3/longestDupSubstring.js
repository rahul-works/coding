/**
 * @param {string} S
 * @return {string}
 */
let prime = 10000001;
let power = [];

function rabin_karp (s, len) {
    if (len == 0) return '';
    let n = s.length;
    let curr = 0;

    let hash = {};
    for (let i = 0; i < len; i += 1) {
        curr = (curr * 26 + (s[i]-'a')) % prime;
    }

    hash[curr] = [0];
    for (let i =len; i<n; i +=1) {
        curr = ((curr - power[len-1]*(s[i-len]-'a')) % prime +prime) % prime;
        curr = (curr * 26 + (s[i]-'a')) % prime;

        if (hash[curr].length == 1) {
            hash[curr].push(1-len-1);
        } else {
            for (const key in hash[curr]) {
                let str = s.substr(i-len+1, len);
                if (s.substr(key, len) == str) {
                    return s.substr(key, len);
                }
            }
            hash[curr].push(i-len+1);
        }
    }
    return '';
}

var longestDupSubstring = function(S) {
    const n = S.length;
    let l = 0, r = n-1;
    power[0] = 1;
    for (let i = 1; i < n; i += 1) {
        power[i] = (power[i-1] * 26) % prime;
    }
    let res = '';
    while (l <= r) {
        let mid = l + (r-l)/2;
        let curr = rabin_karp(S, mid);
        if(curr.length > res.length) {
            res = curr;
            i = mid+1;
        } else {
            r = mid -1
        }
    }
    return res;
};

console.log(longestDupSubstring("banana"));