
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/hardfist-cli.cjs.prod.js');
} else {
  module.exports = require('./dist/hardfist-cli.cjs.js');
}
