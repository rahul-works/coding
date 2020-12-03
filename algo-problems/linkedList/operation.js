function Node(val) {
    this.val = val;
    this.next = null;
    return this;
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    return this.head;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (this.head) {
        let node = this.head;
        for (let i = 0; node && i< index; i++) {
            node = node.next;
        }     
        if (node)
            return node.val;
        else 
            return -1;
    }
    return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if (this.head) {
        let temp = new Node(val);
        temp.next = this.head;
        this.head = temp;
    } else {
        this.head = new Node(val);
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head) {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(val);
    } else {
        this.head = new Node(val);
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (this.head) {
        let node = this.head;
        let prev = null;
        let count = 0;
        for (let i = 0; i< index && node; i++) {
            prev = node;
            node = node.next;
            ++count;
        }
        if (node) {
            let temp = new Node(val);
            if (prev) {
                prev.next = temp;
                temp.next = node;    
            } else {
                temp.next = this.head;
                this.head = temp;
            }
        } else if (index === count) {
            prev.next = new Node(val);
        }
    } else {
        this.head = new Node(val);
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (this.head) {
        let node = this.head;
        let prev = null;
        for (let i = 0; node && i < index; i++) {
            prev = node;
            node = node.next;
        }
        if (node) {
           if (prev)
                prev.next = node.next;
            else {
                this.head = node.next;
            }
        }
    } else {
        this.head = null;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 * 
 * ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
[[],[1],[3],[1,2],[1],[1],[1]]

Your answer
[null,null,null,null,2,null,3]
 */