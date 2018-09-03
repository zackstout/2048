
class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.val = 0;
    this.prevVal = 0;
  }

  getRandom(x) {
    return Math.floor(Math.random() * x);
  }

  // ================================================================================
  // Only called when the game starts:
  start() {
    var cell1 = this.getRandom(16);
    var cell2 = this.getRandom(16);
    // Changed if to while:
    while (cell1 == cell2) {
      cell2 = this.getRandom(16);
    }
    var val1 = this.spawn() ? 2 : 4;
    var val2 = this.spawn() ? 2 : 4;

    // Get coordinates:
    var r1 = Math.floor(cell1 / 4);
    var r2 = Math.floor(cell2 / 4);
    var c1 = cell1 % 4;
    var c2 = cell2 % 4;

    // Should just delegate responsibility of drawing the text of the value to each cell object:
    // Adding w/8 and subtracting h/8 to center text:
    text(val1, r1 * w/4 + w/8, (c1 + 1) * h/4 - h/8);
    text(val2, r2 * w/4 + w/8, (c2 + 1) * h/4 - h/8);

    grid.info[cell1].val = val1;
    grid.info[cell2].val = val2;
    
    // Would this work as is?
    grid.info[cell1].prevVal = val1;
    grid.info[cell2].prevVal = val2;
  }

  // ================================================================================
  // will it just know about w and h? Let's find out. Answer: yes.:
  drawBorders() {
    var iPix = this.i * w/4;
    var jPix = this.j * h/4;
    line(iPix, jPix, iPix + w/4, jPix);
    line(iPix, jPix, iPix, jPix + h/4);
    line(iPix, jPix + h/4, iPix + w/4, jPix + h/4);
    line(iPix + w/4, jPix, iPix + w/4, jPix + h/4);
  }

  // ================================================================================
  // Kind of a stretch for needing a fn:
  spawn() {
    return Math.random() > 0.5;
  }
}
