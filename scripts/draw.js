
/* My system will be:
0, 1, 2, 3,
4, 5, 6, 7,
8, 9, 10, 11,
12, 13, 14, 15.

Well that was the idea, but it ended up as:
0, 4, 8, 12
1, 5, 9, 13
2, 6, 10, 14
3, 7, 11, 15

So column is index % 4.
And row is Math.floor(index / 4).
*/

var grid = new Grid();
let w, h;

// ================================================================================
function setup() {
  createCanvas(400, 400);
  w = width;
  h = height;
  background(225);

  grid.initializeGrid();
  grid.info[0].start();

  // Trying to use CSS Grid:
  // let cont = createDiv();
  // cont.addClass('cell-container');

  // GREENSOCK ATTEMPT:
  for (let i=0; i < 16; i++) {
    let d = createDiv();
    d.addClass('cell');
    d.addClass('cell' + i);

    // Yikes, can't just use `d`:
    let x = document.getElementsByClassName('cell' + i)[0];

    const i_coord = floor(i / 4);
    const j_coord = i % 4;
    TweenLite.set(x, {x: 50 * i_coord, y: 50 * j_coord}); // Add x:0 so we don't go out of screen.
  }

  let cell1 = document.getElementsByClassName('cell1')[0];
  console.log(cell1);
  // Hmm.... We need to set position: absolute for this, but then CSS grid breaks....
  TweenLite.to(cell1, 0.7, {right: '-=100px'}); // Add x:0 so we don't go out of screen.
}

// ================================================================================
// Arrow keys (at least on my keyboard):
function keyReleased() {
  // This is heinous, because we are attaching the keys to their opposite effects, but we need to because use .reverse later:
  switch(key) {
    case '(': grid.checkRows('up'); break;
    case '&': grid.checkRows('down'); break;
    case "'": grid.checkRows('left'); break;
    case '%': grid.checkRows('right'); break;
  }
}
