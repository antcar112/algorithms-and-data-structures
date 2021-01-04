# [Doubly Linked List](DoublyLinkedList.js)

| Operation | Time complexity | SinglyList time | Array Time |
| :-------- | :-------------- | :-------------- | :--------- |
| Insertion | **O(1)**        | **O(1)**        | O(n)       |
| Removal   | **O(1)**        | O(1) - O(n)     | O(n)       |
| Searching | O(n)            | O(n)            | O(n)       |
| Access    | O(n)            | O(n)            | **O(1)**   |

<br />
Compared to SinglyLinkedLists:

- Almost identical, except each node has an additional pointer to the previous node
- Removing nodes at the end of a Doubly Linked List much faster than a Singly Linked List
- Better than Singly Linked Lists for finding nodes
- Extra point takes up more memory than a Singly Linked List
