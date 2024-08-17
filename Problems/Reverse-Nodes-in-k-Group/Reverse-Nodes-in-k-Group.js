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
var reverseKGroup = function(head, k) {
    if (listSizeLT(head, k))
        return head;
    let [last, prev, curr] = [head, null, head];
    for (let i = 0; i < k; i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    last.next = reverseKGroup(curr, k);
    return prev;
};

var listSizeLT = (head, k) => {
    let i = 0;
    for (let node = head; i < k && node; node = node.next)
        i++;
    return i < k;
}
