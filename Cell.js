
class Plant {
  constructor() {
    this.energy = 3 + Math.random() * 4;
  }

  act(view) {
    if (this.energy > 15) {
      var space = view.find(" ");
      if (space) {
        return {type: "reproduce", direction: space};
      }
    }

    // max energy-level is 20:
    if (this.energy < 20) {
      return {type: "grow"};
    }
  }
}


class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
  }

  // will it just know about w and h? Let's find out:
  drawBorders() {
    var iPix = this.i * w/4;
    var jPix = this.j * h/4;
    line(iPix, jPix, iPix + w/4, jPix);
    line(iPix, jPix, iPix, jPix + h/4);
    line(iPix, jPix + h/4, iPix + w/4, jPix + h/4);
    line(iPix + w/4, jPix, iPix + w/4, jPix + h/4);
  }
}
