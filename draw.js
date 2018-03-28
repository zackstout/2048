
var grid = [];


function setup() {
  createCanvas(400, 400);
  background(225);

  initializeGrid();

  console.log(grid);
}


function initializeGrid() {
  for (var i=0; i < 4; i++) {
    for (var j=0; j < 4; j++) {
      grid.push({r: i, c: j});
    }
  }
}
