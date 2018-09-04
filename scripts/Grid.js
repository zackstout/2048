
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
        // cell.colorBackground();
        cell.drawBorders();
        this.info.push(cell);
      }
    }
  }

  // ================================================================================
  drawGrid() {
    background(225);
    this.info.forEach(cell => {
      // console.log('yessir');
      cell.colorBackground();
      cell.drawBorders();
      if (cell.val > 0) {
        // Adding offsets to center text:
        fill('black');
        text(cell.val, cell.i * w/4 + w/8, (cell.j + 1) * h/4 - h/8);
      }
    });
  }

  // ================================================================================
  // Find an empty cell, then spawn a 2 or a 4 in it (light recursion):
  spawnNew() {
    const ran = Math.floor(Math.random() * 16);
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
      const nonZero = this.getNewArray(row);

      // Update the cell's info:
      for (let j=0; j < 4; j++) {
        row[j].prevVal = row[j].val;
        row[j].val = nonZero[j];
      }
    });
  }

  // ================================================================================
  // The main game logic:
  // Argument is a row or a col, in either direction (a "selection"):
  getNewArray(row) {
    row = row.reverse(); // E.g. if user pushes UP, we get 4 cols, each of form [btm, x, x, top].

    let result = []; // the result to be returned
    const nonZero = row.filter(c => c.val > 0).map(c => c.val); // Array of non-zero values.
    let zeroCount = 4 - nonZero.length;

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
    let sel = [];

    // Get cols and rows:
    const c1 = grid.info.slice(0, 4);
    const c2 = grid.info.slice(4, 8);
    const c3 = grid.info.slice(8, 12);
    const c4 = grid.info.slice(12, 16);
    const r1 = [c1[0], c2[0], c3[0], c4[0]];
    const r2 = [c1[1], c2[1], c3[1], c4[1]];
    const r3 = [c1[2], c2[2], c3[2], c4[2]];
    const r4 = [c1[3], c2[3], c3[3], c4[3]];

    // Get the proper selection (checking from the END):
    // Solution: we use .reverse in getNewArray, and we invert the UI:
    switch(direction) {
      case 'down': sel = [c1, c2, c3, c4]; break;
      case 'up': sel = [c1.reverse(), c2.reverse(), c3.reverse(), c4.reverse()]; break;
      case 'right': sel = [r1, r2, r3, r4]; break;
      case 'left': sel = [r1.reverse(), r2.reverse(), r3.reverse(), r4.reverse()]; break;
    }

    this.update(sel);
    this.spawnNew();
    this.drawGrid();
  }

}
