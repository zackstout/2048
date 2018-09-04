
class Grid {
  constructor() {
    // Populated when we create new cells
    this.info = [];
  }

  // ================================================================================
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

  // ================================================================================
  drawGrid() {
    background(225);
    this.info.forEach(cell => {
      cell.drawBorders();
      if (cell.val > 0) {
        // Adding offsets:
        text(cell.val, cell.i * w/4 + w/8, (cell.j + 1) * h/4 - h/8);
      }
    });
  }

  // ================================================================================
  // Find an empty cell, then spawn a 2 or a 4 in it (light recursion):
  spawnNew() {
    var ran = Math.floor(Math.random() * 16);
    if (this.info[ran].val == 0) {
      this.info[ran].val = Math.random() > 0.5 ? 4 : 2;
    } else {
      this.spawnNew();
    }
  }

  // ================================================================================
  // Argument is array of 4 arrays -- which arrays depends on which ARROW was pressed.
  update(rows) {
    rows.forEach(row => {
      var nonZero = this.getNewArray(row);

      // Update the cell's info:
      for (var j=0; j < 4; j++) {
        row[j].prevVal = row[j].val;
        row[j].val = nonZero[j];
      }
    });
  }

  // ================================================================================
  // The main game logic:
  // Argument is a row or a col, in either direction (a "selection"):
  getNewArray(row) {
    // It seems like this is the key. But then we have to reverse the inputs..
    row = row.reverse();
    // E.g. if user pushes UP, we get 4 cols, each of form [btm, x, x, top].
    // console.log("row is...", row);
    let result = []; // the result to be returned

    const nonZero = row.filter(c => c.val > 0).map(c => c.val); // Array of non-zero values.
    let zeroCount = 4 - nonZero.length;

    console.log('nonzeros are...', nonZero);
    // Not working for cases like [2, 2, 2, 2]..
    // and [16, 4, 4, 4] turned into [8, 8]!
    // [8, 4, 4] became [4, 8]
    // 2242 went to 0424instead of 0442 (from origin toward arrow direction)
    for (let i=0; i < nonZero.length; i++) {
      const num = nonZero[i];
      const next = nonZero[i + 1];
      if (num === next) {
        result.push(num * 2);
        zeroCount++;
        // adding in the CRUCIAL:
        i++;
      } else {
        result.push(num);
      }
    }

    for (var i=0; i < zeroCount; i++) {
      result.unshift(0); // add to beginning of array
    }

    return result;
  }

  // ================================================================================
  checkRows(direction) {
    // console.table(grid.info); // Nice
    var sel = [];

    // Get cols and rows:
    var c1 = grid.info.slice(0, 4);
    var c2 = grid.info.slice(4, 8);
    var c3 = grid.info.slice(8, 12);
    var c4 = grid.info.slice(12, 16);
    var r1 = [c1[0], c2[0], c3[0], c4[0]];
    var r2 = [c1[1], c2[1], c3[1], c4[1]];
    var r3 = [c1[2], c2[2], c3[2], c4[2]];
    var r4 = [c1[3], c2[3], c3[3], c4[3]];

    // Get the proper selection:
    // I think we may need to reverse these (i.e. swap where `reverse` is applied), because we need to check from *end* of selection:
    // Either that, or change direction we walk through in the update (or, getNewArray) function.
    // Solution: we use .reverse in getNewArray, and we invert the UI:
    switch(direction) {
      case 'down': sel = [c1, c2, c3, c4]; break;
      case 'up': sel = [c1.reverse(), c2.reverse(), c3.reverse(), c4.reverse()]; break;
      case 'right': sel = [r1, r2, r3, r4]; break;
      case 'left': sel = [r1.reverse(), r2.reverse(), r3.reverse(), r4.reverse()]; break;
    }

    this.update(sel);

    // Only want to call this *IF SOMETHING MOVED*:
    // But I guess if nothing moved.... You lost?
    this.spawnNew();
    this.drawGrid();
  }

}
