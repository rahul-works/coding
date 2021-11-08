/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
 let gcount = 0;
 let gtarget = 0;
 let gf = 0
 let MAX = Math.pow(10, 9) + 7;
 
 var numRollsToTarget = function(d, f, target) {
     gcount = 0;
     gtarget = target;
     gf = f;
     recur ( target, d);
     return gcount;
 };
 
 
 function recur ( count, d) {
     
     if (d === 0 && count === 0) {
         gcount += 1;
         if (gcount > MAX) {
             gcount = 0
         }
     } else if (count > 0){
         for (let i = 1; i <= gf; i++) {
             if (count-i >= 0)
                 recur ( count-i, d-1);
         }
     }
     return;
 }
 
let d = 1, f = 6, target = 3;
console.log(numRollsToTarget(d, f, target));