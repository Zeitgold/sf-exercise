
# Node class 
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
class LinkedList:
    # Function to initialize head
    def __init__(self):
        self.head = None
    # Function to insert a new node at the beginning
    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node
    # Utility function to print the linked LinkedList
    def printList(self, node):
        temp = node
        while(temp):
            print(temp.data)
            temp = temp.next
    def getHead(self):
        return self.head


''' Please note that it's Function problem i.e.
you need to write your solution in the form of Function(s) only.
Driver Code to call/invoke your function is mentioned above. '''

#Your task is to complete this function
def findUnion(head1,head2):
    #code here

# Driver program
if __name__=='__main__':
    arr=list(map(int, input().strip().split()))
    lst1=LinkedList()
    for i in arr:
        lst1.push(i)
    arr=list(map(int, input().strip().split()))
    lst2=LinkedList()
    for i in arr:
        lst2.push(i)
    print(findUnion(lst1.getHead(),lst2.getHead()))

