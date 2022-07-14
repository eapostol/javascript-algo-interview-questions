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
var reverseList = function(head) {
    let prevHead = null;
    
    while (head) {
        let recordNext = head.next;
        head.next = prevHead;
        prevHead = head;
        head = recordNext;
    }
    return prevHead;
};