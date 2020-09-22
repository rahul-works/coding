var permutation = function(str) {
    permute(str, "");
}

function permute(str, prefix) {
    if (str.length === 0) {
        console.log('answer:'+prefix);
    } else {
        for (let i = 0; i < str.length; i++) {
            const rem = str.substring(0, i) + str.substring(i+1);
            console.log(rem, str.substring(0, i), str.substring(i+1), prefix+str.charAt(i));
            permute(rem, prefix+str.charAt(i));
        }
    }
}
permutation("abc");