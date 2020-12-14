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

  isFillabel(i, j, c) {
    if(i < 0 || j < 0 || i > this.canvas.length - 1 || j > this.canvas[0].length - 1) {
      return false;
    }

    if (this.canvas[i][j] === c) {
      return false;
    }

    if (this.canvas[i][j] !== EMPTY_CELL) {
      return false;
    }

    return true;
  };

  bucketFill(options) {
    const c = options[2];
    let i = +options[1] - 1;
    let j = +options[0] - 1;

    let queue = [];
    queue.push([i, j]);
    const marked = {};

    while(queue.length) {
      const [x, y] = queue.shift();

      this.canvas[x][y] = c;

      const eastX = x + 1;
      const eastY = y;
      if (this.isFillabel(eastX, eastY, c) && !marked[`${eastX}, ${eastY}`]) {
        marked[`${eastX}, ${eastY}`] = true;
        queue.push([eastX, eastY]);
      }

      const westX = x - 1;
      const westY = y;
      if (this.isFillabel(westX, westY, c) && !marked[`${westX}, ${westY}`]) {
        marked[`${westX}, ${westY}`] = true;
        queue.push([westX, westY]);
      }

      const northX = x;
      const northY = y + 1;
      if (this.isFillabel(northX, northY, c) && !marked[`${northX}, ${northY}`]) {
        marked[`${northX}, ${northY}`] = true;
        queue.push([northX, northY]);
      }

      const southX = x;
      const southY = y - 1;
      if (this.isFillabel(southX, southY, c) && !marked[`${southX}, ${southY}`]) {
        marked[`${southX}, ${southY}`] = true;
        queue.push([southX, southY]);
      }
    }

    return this.canvas;
  }
};

const canvas = new Canvas();

module.exports = canvas;