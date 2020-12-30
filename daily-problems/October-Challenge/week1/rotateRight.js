/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null || head.next === null) {
        return head;
    }
    let count = 0;
    let node = head;
    while (node) {
        node = node.next;
        count++;
    }
    k = k % count;
    for (let i = 0; i < k; i++) {
        node = head;
        while (node.next.next !== null) {
            node = node.next;
        }
        let temp = new ListNode(node.next.val, head);
        head = temp;
        node.next = null;
    }
    return head;
};