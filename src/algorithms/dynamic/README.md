# Dynamic Programming

Dynamic programming is a method for solving complex problems. It works by breaking down the problem into a collection of simpler subproblems. Those subproblems are then each solved just once, and their solutions are stored.

Dynamic programming only works on problems with optimal substructure and overlapping subproblems.

## Overlapping Subproblems

A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times.

For example, in the Fibonacci sequence, each number is the sum of the two proceding numbers. To find the 5th number, we need the 3rd and 4th number. To find the 4th number, we need the 2nd and 3rd number. In this case, we are finding the 3rd number twice, so we have an overlapping subproblem.

## Optimal Substructure

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

For example, the shortest path from `A` to `D` in a graph is `A` -> `B` -> `C` -> `D`. The shortest path from `A` to `C` is `A` -> `B` -> `C`. The shortest path from `B` to `D` is `B` -> `C` -> `D`. These subproblems will also give us the solution to our main problem. This is an optimal substructure.

## Memoization

In problems where we are solving the same subproblem multiple times (ex. [recursive fibonacci solution](fibonacci.js)), we can use memoization to drastically improve performance. Memoization is storing the results of expensive function calls, and then returning the cached results when the same input occurs again.
