# Data Structures

## [Singly Linked List](SinglyLinkedList.js)

| Operation         | Time (avg) | Array Time | vs. Array |
| :---------------- | :--------- | ---------- | --------- |
| Insertion         | O(1)       | O(n)       | Faster    |
| Removal (at Head) | O(1)       | O(n)       | Faster    |
| Removal(at Tail)  | O(n)       | -          | -         |
| Searching         | O(n)       | -          | -         |
| Access            | O(n)       | O(1)       | Slower    |

<br />
Compared to Arrays:

- Singly linked lists excel when insertion & deletion at the beginning are frequent.
- Slower than accessing elements at a given index

## [Doubly Linked List](DoublyLinkedList.js)

| Operation | Time (avg) | SinglyList time | Array Time |
| :-------- | :--------- | --------------- | ---------- |
| Insertion | O(1)       | -               | O(n)       |
| Removal   | O(1)       | O(1) - O(n)     | O(n)       |
| Searching | O(n)       | -               | -          |
| Access    | O(n)       | -               | O(1)       |

<br />
Compared to SinglyLinkedLists:

- Almost identical, except each node has an additional pointer to the previous node
- Removing nodes at the end of a Doubly Linked List much faster than a Singly Linked List
- Better than Singly Linked Lists for finding nodes
- Extra point takes up more memory than a Singly Linked List

## [Stack](Stack.js)

A data structure that follows a LIFO (last in, first out) principle. This means that the last element added to a stack will be the first element removed.

| Operation | Time (avg) |
| :-------- | :--------- |
| Insertion | O(1)       |
| Removal   | O(1)       |
| Searching | O(n)       |
| Access    | O(n)       |

**Note** Searching & accessing don't matter for Stacks, since we're only ever getting the most recent element. If you do care about searching or accessing specific indexes, better data structures exist
