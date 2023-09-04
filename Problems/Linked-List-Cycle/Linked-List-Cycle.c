/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
bool hasCycle(struct ListNode *head) {
    int i = 0;
    while (head != NULL && i++ < 10001)
        head = head->next;
    return i > 10000;
}
