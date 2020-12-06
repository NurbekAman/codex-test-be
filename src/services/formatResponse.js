const cloneDeep = require('lodash/cloneDeep');
const canvas = require('./Canvas');

const RULES = {
  CANVAS: 'C',
  LINE: 'L',
  RECTANGLE: 'R',
  BUCKET_FILL: 'B'
};

const formatResponse = (instructions) => {
  const result = [];
  instructions.forEach((instruction) => {
    const [R, ...rest] = instruction.split(' ');

    switch (R) {
      case RULES.CANVAS:
        result.push(cloneDeep(canvas.drawCanvas(rest)));
        break;
      case RULES.LINE:
        result.push(cloneDeep(canvas.drawLines(rest)));
        break;
      case RULES.RECTANGLE:
        result.push(cloneDeep(canvas.drawRectangle(rest)));
        break;
      case RULES.BUCKET_FILL:
        result.push(cloneDeep(canvas.bucketFill(rest)));
        break;
      default:
        return;
    }
  });

  return result;
};

module.exports = formatResponse;