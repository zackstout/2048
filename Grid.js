
class Grid {
  constructor() {
    this.info = [];
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

  checkRows(direction) {
    // console.log('check');
    console.log(grid.info);
    var rows = [];

    // start with assumption they are pressing 'down':
    var r1 = grid.info.slice(0, 4);
    var r2 = grid.info.slice(4, 8);
    var r3 = grid.info.slice(8, 12);
    var r4 = grid.info.slice(12, 16);
    rows = [r1, r2, r3, r4];

    // console.log(r1, r2, r3, r4);

    rows.forEach(row => {
      // can't use this, unless we want to make new cells:
      // var nonZero = row.filter((c) => c.val > 0);
      var zeroCount = 0;
      var nonZero = [];
      row.forEach(cell => {
        if (cell.val == 0) {
          zeroCount++;
        } else {
          nonZero.push(cell.val);
        }
      });
      // console.log(nonZero);

      for (var i=0; i < zeroCount; i++) {
        nonZero.unshift(0);
      }
      console.log(nonZero);

      // had to be 4, not 3:
      for (var j=0; j < 4; j++) {
        console.log(nonZero[j]);
        row[j].val = nonZero[j];
      }

      console.log(row);

    });





    this.drawGrid();

  }

}