var RecentCounter = function() {
    this.hash = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.hash.push(t);
    return this.hash.filter(time => time >= t - 3000 && time <= t).length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */