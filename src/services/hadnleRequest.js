const formatResponse = require('./formatResponse');

const handleRequest = (string) => {
  const result = string.split(/\r?\n/);

  return formatResponse(result);
};

module.exports = {
  handleRequest
};