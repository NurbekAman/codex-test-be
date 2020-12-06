const { NOT_EMPTY_CELL, EMPTY_CELL } = require('./constant');

class Canvas {
  constructor() {
    this.canvas;
  }

  drawCanvas(instructions) {
    const [width, height] = instructions;

    this.canvas = new Array(+height);
    for (let i = 0; i < this.canvas.length; i++) {
      this.canvas[i] = new Array(+width).fill(0);
    }

    return this.canvas;
  }

  drawLines(coord) {
    const x1 = +coord[0];
    const y1 = +coord[1];
    const x2 = +coord[2];
    const y2 = +coord[3];
    for (let i = y1 - 1; i < y2; i++) {
      for (let j = x1 - 1; j < x2; j++) {
        this.canvas[i][j] = NOT_EMPTY_CELL;
      }
    }

    return this.canvas;
  }

  drawRectangle(coord) {
    const x1 = +coord[0];
    const y1 = +coord[1];
    const x2 = +coord[2];
    const y2 = +coord[3];

    for (let i = y1 - 1; i < y2; i++) {
      for (let j = x1 - 1; j < x2; j++) {
        if (i === y1 - 1) {
          this.canvas[i][j] = NOT_EMPTY_CELL;
        } if (i === y2 - 1) {
          this.canvas[i][j] = NOT_EMPTY_CELL;
        } else if (i > y1 - 1 && i < y2 - 1 && (j === x1 -1 || j === x2 - 1)) {
          this.canvas[i][j] = NOT_EMPTY_CELL;
        }
      }
    }

    return this.canvas;
  }

  bucketFill(options) {
    const x = +options[0];
    const y = +options[1];
    const c = options[2];
    let i = +y - 1;
    let j = +x - 1;
    const helper = (i, j) => {
      if(i < 0 || j < 0 || i > this.canvas.length - 1 || j > this.canvas[0].length - 1) {
        return;
      }

      if (this.canvas[i][j] === c) {
        return;
      } else if (this.canvas[i][j] !== EMPTY_CELL) {
        return;
      } else {
        this.canvas[i][j] = c;
      }

      helper(i + 1, j);
      helper(i - 1, j);
      helper(i, j - 1);
      helper(i, j + 1);
    }
    helper(i, j);

    return this.canvas;
  }
};

const canvas = new Canvas();

module.exports = canvas;