/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (listSizeLT(head, k))
            return head;
        ListNode last = head, prev = null, curr = head;
        for (int i = 0; i < k; i++) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        last.next = reverseKGroup(curr, k);
        return prev;
    }

    private static boolean listSizeLT(ListNode head, int k) {
        int i = 0;
        for (ListNode node = head; i < k && node != null; node = node.next)
            i++;
        return i < k;
    }
}
