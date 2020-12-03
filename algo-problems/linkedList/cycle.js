/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head){
    let fast = head.next;
    while (head && fast && fast.next) {
        if (head.val === fast.val) {
            return true;
        } 
        head = head.next;
        fast = fast.next.next;
    }}
    return false;
};