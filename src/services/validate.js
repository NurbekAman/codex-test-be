const canvasRegex = /^C \d+ \d+(\r?\n|$)/;

const validate = (string) => canvasRegex.test(string);

module.exports = validate;