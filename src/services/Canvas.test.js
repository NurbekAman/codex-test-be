const canvas  = require('./Canvas');

describe('canvas', () => {
  it('should build canvas', () => {
    expect(canvas.drawCanvas([2, 2])).toMatchObject([
      [0, 0],
      [0, 0]
    ]);
    expect(canvas.drawCanvas([1, 2])).toMatchObject([
      [0],
      [0]
    ])
  });
  it('should add line to canvas', () => {
    canvas.drawCanvas([3, 3]);
    canvas.drawLines([2, 2, 2, 3]);
    expect(canvas.canvas).toMatchObject([
      [0, 0, 0],
      [0, 'x', 0],
      [0, 'x', 0]
    ]);
    canvas.drawLines([1, 1, 3, 1])
    expect(canvas.canvas).toMatchObject([
      ['x', 'x', 'x'],
      [0, 'x', 0],
      [0, 'x', 0]
    ]);
  });
  it('should add triangle to canvas', () => {
    canvas.drawCanvas([4, 4]);
    canvas.drawRectangle([2, 1, 4, 4]);
    console.log(canvas.canvas)
    expect(canvas.canvas).toMatchObject([
      [0, 'x', 'x', 'x'],
      [0, 'x', 0, 'x'],
      [0, 'x', 0, 'x'],
      [0, 'x', 'x', 'x']
    ]);
  });
  it('should fill color correctly', () => {
    canvas.drawCanvas([4, 4]);
    canvas.drawRectangle([3, 2, 4, 4]);
    canvas.bucketFill([1, 1, 'c']);
    expect(canvas.canvas).toMatchObject([
      ['c', 'c', 'c', 'c'],
      ['c', 'c', 'x', 'x'],
      ['c', 'c', 'x', 'x'],
      ['c', 'c', 'x', 'x']
    ]);
    canvas.drawCanvas([5, 5]);
    canvas.drawRectangle([2, 1, 5, 4]);
    expect(canvas.canvas).toMatchObject([
      [0, 'x', 'x', 'x', 'x'],
      [0, 'x', 0, 0, 'x'],
      [0, 'x', 0, 0, 'x'],
      [0, 'x', 'x', 'x', 'x'],
      [0, 0, 0, 0, 0]
    ]);
    canvas.drawRectangle([1, 1, 5, 4]);
    expect(canvas.canvas).toMatchObject([
      ['x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 0, 0, 'x'],
      ['x', 'x', 0, 0, 'x'],
      ['x', 'x', 'x', 'x', 'x'],
      [0, 0, 0, 0, 0]
    ]);
    canvas.bucketFill([3, 2, 'c']);
    canvas.bucketFill([5, 5, 'c']);
    expect(canvas.canvas).toMatchObject([
      ['x', 'x', 'x', 'x', 'x'],
      ['x', 'x', 'c', 'c', 'x'],
      ['x', 'x', 'c', 'c', 'x'],
      ['x', 'x', 'x', 'x', 'x'],
      ['c', 'c', 'c', 'c', 'c']
    ]);
  });
});