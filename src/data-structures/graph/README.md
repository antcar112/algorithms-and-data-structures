# [Graph](Graph.js)

A graph data structure is a collection of nodes and connections (known as _edges_) between those nodes.

Some common uses of graphs are friends on a social network, Google maps, and recommendations on Netflix.

## Graph Terms

- Vertex - a node
- Edge - a connection between nodes
- Weighted/Unweighted - values assigned to distances between vertices
- Directed/Undirected - directions assigned to distances between vertices

## Types of Graphs

There are many, many different types of graphs.

- Tree - A graph in which there are no cycles. This means that for any two nodes, there is only ever one path between them.
- Undirected graph - Edges have no direction between vertices. All connections are 2-way.
- Directed graph - Edges have a set direction between vertices. Connections can be either 1-way or 2-way.
- Unweighted graph - Edges have no values assigned to them.
- Weighted graph - Edges have values assigned to them. Could be used to show distance, priority, etc.

## Storing Graphs

There are two common approaches to storing graphs as a data strucutre. These approaches are **Adjacency Matrices** and **Adjacency Lists**.

### Adjacency Matrix

An Adjacency Matrix is simply a table that shows lists vertices on a graph. This table shows all possible connections, and then marks whether any two nodes are connected. It can also track edge directions and/or weight.

### Adjacency List

Uses a hash table in which each vertex has its own nested array as a value. For example, vertix `a`'s nested array will be stored at key `a`. These nested arrays list all connections for that vertex.

If all the nodes are numeric and ordered, an array can be used instead.

### Comparison

| Adjacency List                   | Adjacency Matrix                 |
| -------------------------------- | -------------------------------- |
| Less space (in sparse graphs)    | More space (in sparse graphs)    |
| Faster to iterate over all edges | Slower to iterate over all edges |
| Slower to lookup specific edge   | Faster to lookup specific edge   |

The implementation in this repo uses an Adjacency List. This is because most real world data tends to be sparse, so using a list makes sense as it will take up less space.

## Graph Traversal

The simplest, most basic form of graph traversal is visiting each vertex in a graph. More complicated algorithms can perform operations such as finding the shortest path between two vertices, or closest matches to one specific vertex.
