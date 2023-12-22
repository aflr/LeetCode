/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    if (l1 == NULL && l2 == NULL)
        return NULL;
    struct ListNode *sum = calloc(1, sizeof(struct ListNode));
    if (sum == NULL)
        return NULL;
    int sumval = (l1 ? l1->val : 0) + (l2 ? l2->val : 0);
    sum->val = sumval % 10;
    if (sumval > 9)
        if (l1 && l1->next)
            l1->next->val++;
        else if (l2 && l2->next)
            l2->next->val++;
        else {
            sum->next = calloc(1, sizeof(struct ListNode));
            if (sum->next == NULL)
                return (NULL);
            sum->next->val = 1;
            return sum;
        }
    sum->next = addTwoNumbers(l1 ? l1->next : NULL, l2 ? l2->next : NULL);
    return sum;
}
