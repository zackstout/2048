
var grid = [];
var w, h;


function setup() {
  createCanvas(400, 400);
  w = width;
  h = height;
  console.log(w, h);
  background(225);

  initializeGrid();

  console.log(grid);
}

// Initialize our array of cell-objects:s
function initializeGrid() {
  for (var i=0; i < 4; i++) {
    for (var j=0; j < 4; j++) {

      var cell = new Cell(i, j);

      // console.log(j);
      cell.drawBorders();
      grid.push(cell);

      // Draw borderlines:
      // We forgot to divide by 4!:
      // var iPix = i * w/4;
      // var jPix = j * h/4;
      // line(iPix, jPix, iPix + w/4, jPix);
      // line(iPix, jPix, iPix, jPix + h/4);
      // line(iPix, jPix + h/4, iPix + w/4, jPix + h/4);
      // line(iPix + w/4, jPix, iPix + w/4, jPix + h/4);

    }
  }
}
