
/* My system will be:
0, 1, 2, 3,
4, 5, 6, 7,
8, 9, 10, 11,
12, 13, 14, 15.

So column is index % 4.
And row is Math.floor(index / 4).
*/

var grid = [];
var w, h;

function setup() {
  createCanvas(400, 400);
  w = width;
  h = height;
  // console.log(w, h);
  background(225);

  initializeGrid();

  console.log(grid);


}

// Initialize our array of cell-objects:s
function initializeGrid() {
  for (var i=0; i < 4; i++) {
    for (var j=0; j < 4; j++) {
      var cell = new Cell(i, j);
      cell.drawBorders();
      grid.push(cell);

      if (i == 0 && j == 0) {
        var taco = cell.start();
        console.log(taco);
        taco.forEach(function(s) {
          var r = Math.floor(parseInt(s.spot) / 4);
          var c = parseInt(s.spot) % 4;
          text(s.value, r * w/4, c * h/4 + h/4);
        });
      }

      // text(i + ''+ j, i * w/4 , j * h/4 + h/4);
      // console.log(cell.start());

    }
  }
}
