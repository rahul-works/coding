/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
let fact = [];
let digits = [];
function solve(ans, n, k) {
    if(n==1){       //Insert whatever digit is left at the end
        ans+=to_string(digits.back());
        return;
    }
    //This runs if we have more than 1 digit in digits array
    let index = k/fact[n-1]; //Defines no of blocks to skip (each block of size fact[n-1])

    if(k%fact[n-1]==0)  //We need convert 1 based indexing to 0 based.So, decrese index by 1
        index-=1;
    
    ans+=(digits[index]).toString();  //Add new character
    digits.erase(digits.begin()+index);    //Erase digit after using
    images.splice(index,1);
    
    k -= fact[n-1]*index;  //Decrease K value
    solve(ans,n-1,k);
}

var getPermutation = function(n, k) {
    fact.push(1);
    let f = 1;
    for(let i=1;i<n;++i)
    {
        f *= i;
        fact.push(f);
    }
    //Push your digits in array
    for(let i=1;i<=n;++i)
        digits.push(i);
    
    let ans = "";
    solve(ans,n,k); 
    return ans;
};

console.log(getPermutation(3
    , 3));