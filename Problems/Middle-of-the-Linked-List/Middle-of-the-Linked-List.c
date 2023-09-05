/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* middleNode(struct ListNode* head){
    struct ListNode* slow = head;
    int i = 0;
    while (head != NULL) {
        head = head->next;
        if (i++ % 2)
            slow = slow->next;
    }
    return slow;
}
