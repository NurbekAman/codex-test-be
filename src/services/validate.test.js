// const regexC = /C \d \d(\r?\n)|$/;
const regexOther = /^C \d+ \d+(\r?\n|$)/;
const text = `C 20 4
L 1 2 6 2
L1 6 3 6 4
R1 16 1 20 3
B1 10 3 23`;

describe('validate', () => {
  it('should ', () => {
    // expect(regexC.test(text)).toBeTruthy();
    expect(regexOther.test(text)).toBeTruthy();
  });
});