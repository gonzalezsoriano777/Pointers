#include <stdio.h>
#include <string.h>
#include <cs50.h>

#define string char*

void copy(int, int);

int main(void)
{
  char* t = get_string("t: ");
  char* s = get_string("s: ");

  if (strcmp(s, t) == 0)
  {
      printf("same\n");
  }
  else
  {
      printf("different\n");
  }

}