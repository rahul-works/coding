/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let delay = null;
    let num = 0;
    let node = head;
    while (node) {
        ++num;
        if (num>n && !delay) {
            delay = head;
        } else if (delay) {
            delay = delay.next;
        }
        node = node.next;
    }
    if (n === 1 & num === 1) {
        return null;
    }
    if (delay && delay.next)
        delay.next = delay.next.next;
    else 
        head = head.next;
    
    return head;
};