# Basic Python Scripting
** Use python3 for this exercise

Given two linked lists, your task is to complete the function makeUnion, that returns the union of two linked lists. This union should include all the distinct elements only.


### Input:
The function takes 2 arguments, reference pointer to the head of the first linked list (head1) and reference pointer to the head of the second linked list (head2). 
There are multiple test cases and for each test case this function will be called separately.

### Output:
The function should return reference pointer to the head of the new list that is formed by the union of the two the lists. 
Note: The new list formed should be in non-decreasing order.



### Example(To be used only for expected output) :

Input:

9 6 4 2 3 8
1 2 8 6 2

Output:
1 2 3 4 6 8 9

### Explanation:

In the first test case N = 3
The linked list with nodes N = 3 is given. here x=2 which means last node is connected with xth node of linked list. Therefore, there exists a loop. 

In the second test where N = 4 and x = 0, which means lastNode->next = NULL, thus the Linked list does not contains any loop.
