#define MIN(a,b) (a < b ? a : b)
#define MAX(a,b) (a < b ? b : a)

int myAtoi(char *s){
    long res = 0;
    int sign = 1;
    while (isspace(*s))
        ++s;
    if (*s == '-' || *s == '+')
        if (*s++ == '-')
            sign = -1;
    while (*s && isdigit(*s) && res > INT_MIN && res < INT_MAX) {
        res *= 10;
        res += *s++ - '0';
    }
    res *= sign;
    return (int)MIN(MAX(res, INT_MIN), INT_MAX);
}
