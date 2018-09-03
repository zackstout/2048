# 2048
Building a clone of the game 2048, following the principles of Object-Oriented Programming. Here's the [demo](https://zackstout.github.io/2048/). The next step is to make some sliding animations.

## Rules:
- A move occurs when a player presses one of the arrow keys.
- After every move, a 2 or a 4 spawns in a random open cell.
- Each tile slides as far as it can; if it hits a tile with the same value, they merge.
- A merged tile cannot merge with another tile in the same move.

## Bugs:
- It seems we can remove higher numbers by iterations of arrow keys: this should not be possible.

## Questions:
- What if a row is [8, 8, 0, 0]?
  - Does the first 8 slide, and then we have [8, 0, 0, 8], and then [0, 0, 0, 16]?
  - Or does the second 8 slide, so we have [0, 16, 0, 0]?
