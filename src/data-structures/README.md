# Data Structures

This module includes a collection of common data strutures written in JavaScript.

- [Stack](./stack)
- [Queue](./queue)
- [Binary Search Tree](./binary-search-tree)
- [Binary Heap](./max-binary-heap)
- [Priority Queue](./priority-queue)
- [Hash Table](./hash-table)
- [Graph](./graph)

## [Singly Linked List](SinglyLinkedList.js)

| Operation         | Time complexity | Array time | vs. Array |
| :---------------- | :-------------- | :--------- | :-------- |
| Insertion         | **O(1)**        | O(n)       | Faster    |
| Removal (at Head) | **O(1)**        | O(n)       | Faster    |
| Removal(at Tail)  | O(n)            | O(n)       | Even      |
| Searching         | O(n)            | O(n)       | Even      |
| Access            | O(n)            | **O(1)**   | Slower    |

<br />
Compared to Arrays:

- Singly linked lists excel when insertion & deletion at the beginning are frequent.
- Slower than accessing elements at a given index

## [Doubly Linked List](DoublyLinkedList.js)

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
