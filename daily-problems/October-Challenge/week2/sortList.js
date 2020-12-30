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
var sortList = function(head) {

    if (!head || !head.next) {
        return head;
    }
    let mid = getMid(head);
    let left = sortList(head);
    let right = sortList(mid);
    return merge(left, right);
};

function getMid(head) {
    let midPrev = null;
    while (head && head.next) {
        midPrev = (midPrev === null) ? head : midPrev.next;
        head = head.next.next;
    }
    let mid = midPrev.next;
    midPrev.next = null;
    return mid;
}

function merge(l1, l2) {
    let dummy = new ListNode(0, null);
    let ptr = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            ptr.next = l1;
            l1 = l1.next;
        } else {
            ptr.next = l2;
            l2 = l2.next;
        }
        ptr = ptr.next
    }
    if (l1) {
        ptr.next = l1;
    } else {
        ptr.next = l2;
    }
    return dummy.next;
}