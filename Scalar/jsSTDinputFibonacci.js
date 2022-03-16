// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("", function(N) {
    function fibHelper(N, F) {
        if (N === 0 || N === 1) {
            F[N] = 1;
            return 1;
        }
        if (F[N] !== undefined) {
            return F[N];
        }
        F[N] = fibHelper(N-1, F)+fibHelper(N-2, F);
        // console.log(F);
        return F[N];
    }
    
    console.log(fibHelper(N-1, []));
   
});