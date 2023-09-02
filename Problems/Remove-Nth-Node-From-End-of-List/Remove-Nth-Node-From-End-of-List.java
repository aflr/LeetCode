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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode tmp1 = head;
        int count = 1;
        while (tmp1.next != null){
            tmp1 = tmp1.next;
            count++;
        }
        if (count == n)
            return head.next;
        ListNode tmp2 = head;
        for (int i = 0; i < count - n - 1; i++)
            tmp2 = tmp2.next;
        try{
            tmp2.next = tmp2.next.next;
        } catch (NullPointerException ex) {
            tmp2.next = null;
        }
        return head;
    }
}
