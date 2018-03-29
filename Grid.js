
class Grid {
  constructor() {
    // Populated when we create new cells
    this.info = [];
  }

  // Initialize our array of cell objects:
  initializeGrid() {
    for (var i=0; i < 4; i++) {
      for (var j=0; j < 4; j++) {
        var cell = new Cell(i, j);
        cell.drawBorders();
        this.info.push(cell);
      }
    }
  }

  drawGrid() {
    // clear out before re-drawing:
    background(225);
    this.info.forEach(cell => {
      cell.drawBorders();
      if (cell.val > 0) {
        text(cell.val, cell.i * w/4, (cell.j + 1) * h/4);
      }
    });
  }

  spawnNew() {
    var ran = Math.floor(Math.random() * 16);
    if (this.info[ran].val == 0) {
      this.info[ran].val = Math.random() > 0.5 ? 4 : 2;
    } else {
      // I suspect this is the proper way to solve the problem:
      this.spawnNew();
    }
  }

  getNewArray(row) {
    var zeroCount = 0;
    var nonZero = [];

    row.forEach(cell => {
      if (cell.val == 0) {
        zeroCount++;
      } else {
        nonZero.push(cell.val);
      }
    });

    nonZero.forEach((num, i) => {
      if (num == nonZero[i + 1]) {
        console.log('got one');
        // set the one at i to 0, and i+1 to double:
        // Ok this *will* break it if we have more than 2 elements, because we're altering the array we're walking through:
        nonZero = [num * 2].concat(nonZero.slice(i + 2));
        zeroCount++;
      }
    });

    for (var i=0; i < zeroCount; i++) {
      nonZero.unshift(0);
    }

    return nonZero;
  } // end getNewArray


  checkRows(direction) {
    // console.log('check');
    console.log(grid.info);
    var rows = [];

    // start with assumption they are pressing 'down':
    // the irksome part is going to be thinking through the math for the other direction -- changing to Up should be straightforward.
    var r1 = grid.info.slice(0, 4);
    var r2 = grid.info.slice(4, 8);
    var r3 = grid.info.slice(8, 12);
    var r4 = grid.info.slice(12, 16);
    rows = [r1, r2, r3, r4];

    rows.forEach(row => {
      var nonZero = this.getNewArray(row);
      // attempting to check if anything moves:
      var numSame = 0;
      // Update the cell's info:
      for (var j=0; j < 4; j++) {
        row[j].val = nonZero[j];

        // check for sameness:
        if (row[j].val == row[j].prevVal && row[j].val > 0) {
          console.log('same');
          numSame++;
        }

        row[j].prevVal = row[j].val;
      }

    }); // end forEach(row)

    // Only want to call this *IF SOMETHING MOVED*:
    this.spawnNew();
    this.drawGrid();
  }

}
