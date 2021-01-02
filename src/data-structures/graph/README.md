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

- Tree - A graph in which there are no cycles.
- Undirected graph - Edges have no direction between vertices. All connections are 2-way.
- Directed graph - Edges have a set direction between vertices. Connections can be either 1-way or 2-way.
- Unweighted graph - Edges have no values assigned to them.
- Weighted graph - Edges have values assigned to them. Could be used to show distance, priority, etc.

## Storing Graphs

There are two common approaches to storing graphs as a data strucutre. These approaches are **Adjacency Matrices** and **Adjacency Lists**.

### Adjacency Matrix

An Adjacency Matrix is simply a table that shows lists vertices on a graph. This table shows all possible connections, and then marks whether any two nodes are connected. It can also track edge directions and/or weight.

### Adjacency List

An array in which each vertex has its own nested array. Vertix `1`'s nested array will be stored at index `1`. These nested arrays list all connections for that vertex.

This approach works well if our nodes are numeric. If our nodes are strings, we can use a Hash Table instead of an array.

### Comparison

| Adjacency List                   | Adjacency Matrix                 |
| -------------------------------- | -------------------------------- |
| Less space (in sparse graphs)    | More space (in sparse graphs)    |
| Faster to iterate over all edges | Slower to iterate over all edges |
| Slower to lookup specific edge   | Faster to lookup specific edge   |

The implementation in this repo uses an Adjacency List. This is because most real world data tends to be sparse, so using a list makes sense as it will take up less space.