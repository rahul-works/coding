/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = new Array();
    return this;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    console.log(this.stack);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    console.log(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length === 0) {
        return null;
    }
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.stack);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 * MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
 */

var obj = new MinStack();
obj.push(8);
obj.push(1);
obj.push(-1);
obj.push(10);
obj.push(10);
obj.pop();
console.log (obj.top());
console.log (obj.getMin());