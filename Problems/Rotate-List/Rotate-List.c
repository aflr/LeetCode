/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* rotateRight(struct ListNode* head, int k) {
    struct ListNode *last, *tmp;
    int size = lstSizeLast(head, &last);
    if (size <= 1 || !(k %= size))
        return head;
    last->next = head;
    for (int i = 0; i < size - k - 1; i++)
        head = head->next;
    tmp = head->next;
    head->next = NULL;
    return tmp;
}

// Returns the size of the list, sets last to the last node
int lstSizeLast(struct ListNode *head, struct ListNode **last) {
    if (!head)
        return 0;
    int size = head ? 1 : 0;
    while (head && head->next) {
        size++;
        head = head->next;
    }
    *last = head;
    return size;
}
