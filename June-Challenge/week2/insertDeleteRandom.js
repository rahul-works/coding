/**
 * Initialize your data structure here.
 */
let numSet = []; 
let min = Math.MAX_VALUE;
let max = Math.MIN_VALUE;
var RandomizedSet = function() {
   numSet = []; 
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(numSet.indexOf(val) > -1) {
        return false;
    } 
    numSet.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const index = numSet.indexOf(val);
    if (index > -1) {
        numSet.splice(index, 1);
        return true;
    } 
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    if (numSet.length > 0) {
        return numSet[Math.floor(Math.random() * Math.floor(numSet.length))];
    }
    return false;
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */