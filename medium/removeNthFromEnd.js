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
    let hash = [];
    let num = 0;
    while (head !== null) {
        ++num;
        hash[num] = head;
        head = head.next;
    }
    if (num > n)
        hash[num-n].next = hash[num-n+1].next;
    else 
        hash[1] = hash[1].next;
    
    return hash[1] !== undefined ? hash[1] : null;
};