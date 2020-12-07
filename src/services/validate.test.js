const validate = require('./validate');
const text = `C 20 4
L 1 2 6 2
L1 6 3 6 4
R1 16 1 20 3
B1 10 3 23`;

describe('validate', () => {
  it('should ', () => {
    expect(validate(text)).toBeTruthy();
  });
});