const dir  = require('require-dir');
const GLOB = {
  context: __dirname,
};

module.exports = GLOB;

dir('./gulp', {recurse: true});