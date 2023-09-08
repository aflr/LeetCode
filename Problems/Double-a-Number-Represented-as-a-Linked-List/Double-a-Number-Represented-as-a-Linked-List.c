/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* doubleIt(struct ListNode* head){
    if (head == NULL)
        return head;
    struct ListNode* copy;
    if (head->val > 4) {
        copy = malloc(sizeof(struct ListNode));
        copy->val = 0;
        copy->next = head;
        head = copy;
    }
    else {
        copy = head;
    }
    while (copy != NULL) {
        copy->val = (copy->val * 2 + (copy->next != NULL && copy->next->val > 4)) % 10;
        copy = copy->next;
    }
    return head;
}
