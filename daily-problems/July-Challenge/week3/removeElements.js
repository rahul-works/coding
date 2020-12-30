/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) {
        return head;
    }
    let point = head;
    let prev = null;
    while (point !== null) {
        if (point.val === val) {
            if (prev !== null) {
                prev.next = point.next;
            } else {
                head = point.next;
            }
        } else {
            prev = point;    
        }
        point = point.next;
    }
    return head;
};