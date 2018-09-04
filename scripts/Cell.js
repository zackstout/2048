
const colors = ['#D3D3D3', '#7FFFD4', '#6495ED', '#008B8B', '#2F4F4F', '#483D8B', '#8B008B', '#B22222', '#F08080', '#C71585', '#FFDC00'];

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

  colorBackground() {
    var iPix = this.i * w/4;
    var jPix = this.j * h/4;

    const bin_val = this.val.toString(2);
    const pow_of_2 = bin_val.length - 1; // how many zeroes are in its binary representation.
    fill(colors[pow_of_2]);
    rect(iPix, jPix, iPix + w/4, jPix + h/4); // why does this work? It should be width and height, not end coordinates...
  }

  // ================================================================================
  // Only called when the game starts:
  start() {
    var cell1 = this.getRandom(16);
    var cell2 = this.getRandom(16);
    // Changed `if` to `while`:
    while (cell1 == cell2) {
      cell2 = this.getRandom(16);
    }

    var val1 = Math.random() > 0.5 ? 2 : 4;
    var val2 = Math.random() > 0.5 ? 2 : 4;

    // Get coordinates (could have just gotten these randomly, but 6 vs half dozen):
    var cell1_r = Math.floor(cell1 / 4);
    var cell2_r = Math.floor(cell2 / 4);
    var cell1_c = cell1 % 4;
    var cell2_c = cell2 % 4;

    // Just going to be lazy for now and hard code the coloring:
    fill(colors[val1 / 2]);
    rect(cell1_r * w/4, (cell1_c) * h/4, w/4, h/4);
    fill(colors[val2 / 2]);
    rect(cell2_r * w/4, (cell2_c) * h/4, w/4, h/4);

    // Should just delegate responsibility of drawing the text of the value to each cell object:
    // Adding w/8 and subtracting h/8 to center text:
    fill('black');
    text(val1, cell1_r * w/4 + w/8, (cell1_c + 1) * h/4 - h/8);
    text(val2, cell2_r * w/4 + w/8, (cell2_c + 1) * h/4 - h/8);

    grid.info[cell1].val = val1;
    grid.info[cell2].val = val2;
    grid.info[cell1].prevVal = val1; // Initilizing these values
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
}
