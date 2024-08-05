/*
 * This solution uses uthash
 * More info:  https://troydhanson.github.io/uthash/
 * #include "uthash.h"
*/

struct hash_entry {
    int num;
    UT_hash_handle hh;
};

bool add_num(struct hash_entry **hash_nums, int num) {
    struct hash_entry *s;

    HASH_FIND_INT(*hash_nums, &num, s);
    if (s != NULL)
        return false;
    s = (struct hash_entry *)malloc(sizeof(struct hash_entry));
    if (s == NULL)
        return false;
    s->num = num;
    HASH_ADD_INT(*hash_nums, num, s);
    return true;
}

void delete_all(struct hash_entry **hash_nums) {
    struct hash_entry *curr_en, *tmp;

    HASH_ITER(hh, *hash_nums, curr_en, tmp) {
        HASH_DEL(*hash_nums, curr_en);
        free(curr_en);
    }
}

bool containsDuplicate(int* nums, int numsSize) {
    struct hash_entry *hash_nums = NULL;

    while (numsSize--)
        if (!add_num(&hash_nums, *nums++))
            return (delete_all(&hash_nums), true);
    return (delete_all(&hash_nums), false);
}
