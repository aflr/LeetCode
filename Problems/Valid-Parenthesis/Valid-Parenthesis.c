#include <stdlib.h>

typedef struct s_node
{
    char c;
    struct s_node *next;
}   t_node;

void push(t_node **start, char character)
{
    t_node *tmp;

    tmp = malloc(sizeof(t_node));
    tmp->c = character;
    tmp->next = *start;
    *start = tmp;
}

char pop(t_node **start)
{
    char character;
    t_node *tmp;

    if (*start == NULL)
        return '\0';
    character = (*start)->c;
    tmp = *start;
    *start = (*start)->next;
    free(tmp);
    return character;
}

bool isValid(char * s)
{
    t_node *start = NULL;
    char prev;
    while (*s != '\0')
    {
        switch (*s)
        {
            case '(':
            case '{':
            case '[':
                push(&start, *s);
                break;
            case ')':
            case '}':
            case ']':
                prev = pop(&start);
                if (!((prev == '(' && *s == ')') || (prev == '[' && *s == ']') || (prev == '{' && *s == '}')))
                    return false;
                break;
            default:
                return false;
        }
        ++s;
    }
    return (pop(&start) == 0);
}
