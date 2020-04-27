'use strict';
/**
 * @param {number} capacity
 */
function dll(key, val) {
    this.key = key;
    this.val = val;
    this.prev = this.next = null;
}
    
var LRUCache = function(capacity) {
    this.head = new dll(-1, -1);
    this.tail = this.head;
    this.hash = {'test':'t'};
    this.capacity = capacity;
    this.length = 0;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.hash != undefined && !this.hash[key]) {
        return -1;
    }
    node = this.hash[key];
    val = node.val;
    while (node.next) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        this.tail = node;
    }
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    if (this.hash[key]) {
        node = this.hash[key];
        node.val = value;
        while (node.next) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            this.tail.next = node;
            node.prev = this.tail;
            node.next = null;
            this.tail = node;
        }
    } else {
        let node = new dll(key, value);
        this.hash[key] = node;
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.length += 1;
        if (this.length > this.capacity) {
            remove = this.head.next;
            this.head.next = this.head.next.next;
            this.head.next.prev = this.head;
            delete this.hash[remove.key];
            this.length -= 1;
        }
                
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */