# Data Structures

### [Singly Linked List](singlyLinkedList.js)

| Operation         | Time (avg) | Array Time | vs. Array |
| :---------------- | :--------- | ---------- | --------- |
| Insertion         | O(1)       | O(n)       | Faster    |
| Removal (at Head) | O(1)       | O(n)       | Faster    |
| Removal(at Tail)  | O(n)       |
| Searching         | O(n)       |
| Access            | O(n)       | O(1)       | Slower    |

Compared to Arrays:

- Singly linked lists excel when insertion & deletion at the beginning are frequent.
- Slower than accessing elements at a given index

### [Doubly Linked List](doublyLinkedList.js)

Almost identical to Singly Linked Lists, but each node has an additional pointer to the previous node. This makes removing nodes at the end of a Doubly Linked List much faster than a Singly Linked List. However, Doubly Linked Lists use more memory than Singly Linked Lists.
