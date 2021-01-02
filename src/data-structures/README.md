# Data Structures

This module includes a collection of common data strutures written in JavaScript.

- [Hash Table](./hash-table)

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

## [Stack](Stack.js)

A data structure that follows a LIFO (last in, first out) principle. This means that the last element added to a stack will be the first element removed.

| Operation | Time complexity | Array Time |
| :-------- | :-------------- | :--------- |
| Insertion | **O(1)**        | O(n)       |
| Removal   | **O(1)**        | O(n)       |
| Searching | O(n)            | O(n)       |
| Access    | O(n)            | **O(1)**   |

**Note:** Searching & accessing don't matter for Stacks, since we're only ever getting the most recent element. If you do care about searching or accessing specific indexes, better data structures exist

## [Queue](Queue.js)

Similar to a Stack, but follows a FIFO (first in, first out) principle. This means that the first element added will be also the first element removed.

| Operation | Time complexity | Array Time |
| :-------- | :-------------- | :--------- |
| Insertion | **O(1)**        | O(n)       |
| Removal   | **O(1)**        | O(n)       |
| Searching | O(n)            | O(n)       |
| Access    | O(n)            | **O(1)**   |

**Note:** Again, as searching & accessing aren't used by Stacks, they don't actually matter.

## [Binary Search Tree](BinarySearchTree.js)

A Tree data strucutre, in which every parent has at most two children. Every node to the left of a parent node is always less than that parent. Ever node to the right of a parent node is always greater than that parent. This organization makes searching a Binary Search Tree extremely fast.

| Operation | Time complexity | Array Time |
| :-------- | :-------------- | :--------- |
| Insertion | **O(log n)**    | O(n)       |
| Searching | **O(log n)**    | O(n)       |

## [Binary Heaps](MaxBinaryHeap.js)

Heaps are another type of Tree data structure. Binary Heaps are a type of Binary Tree, with each parent having at most two child nodes. Binary heaps are as compact as possible, meaning that all children of each node are as full as possible, with the left child being filled out first.

In a Max Binary Heap, parent nodes are always larger than child nodes. In a Min Binary Heap, parents are smaller than child nodes.

Binary Heaps a great data structure for sorting. They excel at inserting and removing data in an set order.

| Operation | Time complexity | Array Time |
| :-------- | :-------------- | :--------- |
| Insertion | **O(log n)**    | O(n)       |
| Removal   | **O(log n)**    | O(n)       |
| Searching | O(n)            | O(n)       |

## [Priority Queue](PriorityQueue.js)

A priority queue is a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities. An example use case of this is the start up process of an OS. Most processes will be called in the order they are added to the queue, but certain processes with higher priorities will "cut-in" and be run first.

Priority queues are an abstract concept, meaning they can be stored as any data stucuture. However, an Array or Linked List will result in poor speeds, as the entire list will need to be checked for each operation. Using a Heap is a much better choice.
