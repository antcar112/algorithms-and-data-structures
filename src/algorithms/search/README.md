# Search

This section contains common searching algorithms.

| Algorithm                                   | Time (avg) |
| :------------------------------------------ | :--------- |
| [Linear Search](linearSearch.js)            | O(n)       |
| [Binary Search](binarySearch.js)            | O(log n)   |
| [Naive String Search](naiveStringSearch.js) | O(n²)      |

## [Linear Search](linearSearch.js)

Linear search takes an array and a value to find, and returns the first index of the array that contains that value. If the array does not contain that value, it returns `-1` instead.

Linear search has an `O(n)` average time complexity.

## [Binary Search](binarySearch.js)

Binary search takes a sorted array and a value to find. The array must be sorted, because binary search continually looks at the middle value and compares it to the value to find. It then ignores and "throws away" half of the remaining values based on the middle value. This process repeats until it finds the value and returns it's index. Again, `-1` is returned if the value is not found.

Binary search has an `O(log n)` average time complexity.

## [Naive String Search](naiveStringSearch.js)

The naive string search looks in a string to find how many times a substring occurs in it. It then returns how many times that substring appears.

Naive string search has an `O(n²)` average time complexity.

## [KNP search]()
