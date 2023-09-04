int strStr(char * haystack, char * needle){
    char *found = strstr(haystack, needle);
    return found == NULL ? -1 : (int)(found - haystack);
}
