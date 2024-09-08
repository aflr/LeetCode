/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode[] splitListToParts(ListNode head, int k) {
        int listSize = 0;
        for (ListNode tmp = head; tmp != null; tmp = tmp.next)
            listSize++;
        int div = listSize / k, mod = listSize % k;
        ListNode[] parts = new ListNode[k];
        for (int i = 0; i < k; i++) {
            parts[i] = head;
            for (int j = 1; j < div + (i < mod ? 1 : 0); j++)
                head = head.next;
            if (head != null) {
                ListNode tmp = head.next;
                head.next = null;
                head = tmp;
            }
        }
        return parts;
    }
}
