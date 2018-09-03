
/* My system will be:
0, 1, 2, 3,
4, 5, 6, 7,
8, 9, 10, 11,
12, 13, 14, 15.

Well that was the idea, but it ended up as:
0, 4, 8, 12
1, 5, 9, 13
2, 6, 10, 14
3, 7, 11, 15

So column is index % 4.
And row is Math.floor(index / 4).
*/

var grid = new Grid();
let w, h;

// ================================================================================
function setup() {
  createCanvas(400, 400);
  w = width;
  h = height;
  background(225);

  grid.initializeGrid();
  grid.info[0].start();
}

// ================================================================================
// Arrow keys (at least on my keyboard):
function keyReleased() {
  // This is heinous, because we are attaching the keys to their opposite effects, but we need to because use .reverse later:
  switch(key) {
    case '(': grid.checkRows('up'); break;
    case '&': grid.checkRows('down'); break;
    case "'": grid.checkRows('left'); break;
    case '%': grid.checkRows('right'); break;
  }
}
