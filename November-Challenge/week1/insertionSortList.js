/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    let idx = head;
    while (idx) {
        let min = idx;
        let node = idx;
        while (node) {
            if (min.val > node.val) {
                min = node;
            }
            node = node.next;
        }
        if (min.val !== idx.val) {
            let temp = min.val;
            min.val = idx.val;
            idx.val = temp;
        }
        idx = idx.next;
    }
    return head;
};