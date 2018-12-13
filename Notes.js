// Notes
/*

int main - makes function in which will overall give you an int from that specific function.
%i - find a specific integer in which is specified later, once the Hello is called and then executes the integer

2 things to focus on in C - Memory and that's key and Processing

For string - you must use "string name" tp grab a specific in which you want to execute
%s - same process with "%i" just not with number but with strings..
s
make hello - grabs the warning that clang wouldn't show you
Werror - Gives you a warning in which can lead to an error to the code itself
A warning in C is giving you an idea of what can transpire if you don't check your code and fix the issue that can get bigger

cs50 library function
get_int - ensures that the user input is either positive or negative,
or it just equals to 0 or it gives the command in which you have to retry putting the integer.

*/

// Recursions
/*

Describing a implementation of an algorithm as being particularly "elegant" if it solves a problem in a way that is both interesting and easy to visualize
The technique of recursion is very common way to implement such a 'elegant' solution

Defintion - recursive function is one that, as part of it's execution, invokes itself

------------------

factorial function (n!) is defined over all positive integers

n! equals all of the positive integers less then or equal to n,
multiplied together.

Thinking in terms of programming, we'll define the mathmatical function n! as "fact (n)".
----------------------------

Forms the basics for a recursive defintion of the factorial function

Ever recursive function has two cases that could apply, given any input.
   - The base case, which when triggered will terminate the recursive process.
    - The recursive case, which is where the recursion will actually occur.
--------------------------------

In General but not always, recursive functions replace loops in non-recursive functions.

It's also possible to have more then one base or recursive case, if the program might recurse or terminate in different ways, depending on the input being passed in.
-----------------

Mutliple bases cases : Fibonacci number sequence
first element is 0
second element is 1
the nth element is the sum of the (n-1)th and (n-2)th elements.

Multiple recursive cases: The Collatz conjecture
Collatz Conjecture-
Applies the positive integers and speculates that it is always possible to get "back to 1" if you follow the steps:
If n is 1, stop.
Otherwise, if n is even, repeat this process on n/2.
Otherwise, if n is odd, repeat this process on 3n + 1.

Overall calculates how many steps it takes to get to 1 if you start from n
-------------------------------


*/