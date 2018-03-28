
class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.val = 0;
  }

  // Only called when the game starts:
  start() {
    // Ok sure there's duplication here, I'm gonna skip over it:
    var ran1 = Math.floor(Math.random() * 15);
    var ran2 = Math.floor(Math.random() * 15);
    // terrible fix, just check it again:
    if (ran1 == ran2) {
      ran2 = Math.floor(Math.random() * 15);
    }
    var bool1 = this.spawn() ? 2 : 4;
    var bool2 = this.spawn() ? 2 : 4;

    var r1 = Math.floor(ran1 / 4);
    var r2 = Math.floor(ran2 / 4);
    var c1 = ran1 % 4;
    var c2 = ran2 % 4;
    // console.log(r1, r2, c1, c2);

    // textAlign(CENTER, CENTER);
    text(bool1, r1 * w/4, (c1 + 1) * h/4);
    text(bool2, r2 * w/4, (c2 + 1) * h/4);

    grid[ran1] = bool1;
    grid[ran2] = bool2;
  }


  // will it just know about w and h? Let's find out. Answer: yes.:
  drawBorders() {
    var iPix = this.i * w/4;
    var jPix = this.j * h/4;
    line(iPix, jPix, iPix + w/4, jPix);
    line(iPix, jPix, iPix, jPix + h/4);
    line(iPix, jPix + h/4, iPix + w/4, jPix + h/4);
    line(iPix + w/4, jPix, iPix + w/4, jPix + h/4);
  }



  spawn() {
    return Math.random() > 0.5;
  }
}
