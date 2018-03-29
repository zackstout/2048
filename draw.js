
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

// var grid = [];

var grid = new Grid();

var w, h;

function setup() {
  createCanvas(400, 400);
  w = width;
  h = height;
  // console.log(w, h);
  background(225);

  initializeGrid();

  startGame();

  console.log(grid);


}

// Initialize our array of cell-objects:s
function initializeGrid() {
  for (var i=0; i < 4; i++) {
    for (var j=0; j < 4; j++) {
      var cell = new Cell(i, j);
      cell.drawBorders();
      grid.info.push(cell);

    }
  }
}

function startGame() {
  grid.info[0].start();
}

function keyReleased() {
  if (key == ' ') {
    console.log('space');
    grid.checkRows('down');
  }
}


// function draw() {
//   if (keyIsPressed) {
//     console.log(key);
//   }
// }
