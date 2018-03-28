
class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.val = 0;
  }

  // Only called when the game starts:
  start() {
    var out = [];
    var ran1 = Math.floor(Math.random() * 15);
    var ran2 = Math.floor(Math.random() * 15);
    out.push({spot: ran1, value: this.spawn() ? 2 : 4});
    out.push({spot: ran2, value: this.spawn() ? 2 : 4});
    return out;
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
