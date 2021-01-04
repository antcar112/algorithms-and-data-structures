# Graph Traversal

The simplest, most basic form of graph traversal is visiting each vertex in a graph. More complicated algorithms can perform operations such as finding the shortest path between two vertices, or closest matches to one specific vertex.

A unlike a tree, not all graphs have a clear root. This means that we may have to pick one vertex to be the root.

## [Depth First Traversal](./depthFirstTraversal.js)

Depth first traversal will prioritize visiting vertices along each branch before backtracking to the root. For example, if root vertex `R` has children `A`, `B` and `C`, the depth first traversal will fully traverse the `A` branch _before_ returning to `R` and starting to travese the `B` branch.

## [Breadth First Traversal](./breadthFirstTraversal.js)

Breadth first traversal will prioritize visiting all direct neighbouring vertices before continuing down each branch. For example, if root vertex `R` has children `A` and `B`, the breadth first traversal will visit `A` and then `B` _before_ visiting any other neighbours of `A` or `B`.
