/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.hash = {};
    return this;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (this.hash[key] === undefined) {
        this.hash[key] = key;
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    if (this.hash[key] !== undefined) {
        delete this.hash[key];
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if (this.hash[key] !== undefined) {
        return true;
    } else {
        return false;
    }
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */