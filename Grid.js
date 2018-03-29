
class Grid {
  constructor() {
    this.info = [];
  }


    drawGrid() {
      background(225);

      this.info.forEach((cell) => {
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

    this.drawGrid();

  }

}
