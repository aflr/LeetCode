/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    struct ListNode *first = NULL, *last;
    while (true) {
        int min_index = -1;
        for (int i = 0; i < listsSize; i++)
            if (lists[i] && (min_index < 0 || lists[i]->val < lists[min_index]->val))
                min_index = i;
        if (min_index < 0)
            return first;
        if (!first) {
            first = lists[min_index];
            lists[min_index] = lists[min_index]->next;
            last = first;
        } else {
            last->next = lists[min_index];
            lists[min_index] = lists[min_index]->next;
            last = last->next;
        }
    }
}
