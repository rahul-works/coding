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
var swapPairs = function(head) {
    let point = head;
    let flag = true;
    let prev = null;
    while (point !== null) {
        if (point.next !== null) {
            //point node 1
            // point node 2
            let temp = point.next;
            point.next = temp.next;
            temp.next = point;
            if (prev !== null) {
                prev.next = temp;
            }
            
            if(flag) {
                flag = false;
                head = temp;
                prev = temp.next;
            } else {
                prev = temp;
            }
            prev = temp.next;
        } 
        
        point = point.next;
    }
    return head;
};