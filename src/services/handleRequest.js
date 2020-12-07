const formatResponse = require('./formatResponse');

const handleRequest = (string) => formatResponse(string.split(/\r?\n/));

module.exports = {
  handleRequest
};