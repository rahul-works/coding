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
  let p = null;
  let n = head;
  while (n) {
      // console.log(p, n);
      if (n.val === val) {
          if (p === null) {
              head = n.next;
          } else {
              while (n && n.val === val) {
                  n = n.next;
              }
              p.next = n;
              p = n;
          }
      } else {
          p = n;
      }
      if (n)
      n = n.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let n2 = new ListNode(1, null);
let n1 = new ListNode(2, n2);
let n = new ListNode(2, n1);
let head = new ListNode(1, n);

// console.log(head);
console.log(removeElements(head, 2));