# [Hash Table](HashTable.js)

Hash tables are used to store _key-value_ pairs. Unlike arrays, the keys are not ordered. Hash tables are very commonly used, because they are extremely fast at find values, adding values and removing values.

## How Hash Tables Work

In order to look up values by a key (ex. colors["cyan"]), we need a valid way to convert keys into a valid array index (ex. colors[2]). This conversion is done with a _hash function_. In the example above we'd pass `"cyan"` to our hash function, and expect `2` to always be returned. Good hash functions should:

1. Be fast (O(1) time)
2. Distributes uniformly, doesn't cluster outputs at the same indices
3. Deterministic, always gives the same output for the same input.

## Handle Hashing Collisions

What happens when our hash function returns the same index for different keys? Even with the best hashing functions, these collisions will eventually occur. Two strategies are:

1. **Separate chaining** - store values at each index using a more sophisticated data structure (ex. an array)
2. **Linear probing** - when we find a collision, search for the next empty spot and store the data there
