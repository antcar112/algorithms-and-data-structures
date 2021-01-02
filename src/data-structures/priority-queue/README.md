# [Priority Queue](PriorityQueue.js)

A priority queue is a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities. An example use case of this is the start up process of an OS. Most processes will be called in the order they are added to the queue, but certain processes with higher priorities will "cut-in" and be run first.

Priority queues are an abstract concept, meaning they can be stored as any data stucuture. However, an Array or Linked List will result in poor speeds, as the entire list will need to be checked for each operation. Using a Heap is a much better choice.
