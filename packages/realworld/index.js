
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/realworld.cjs.prod.js');
} else {
  module.exports = require('./dist/realworld.cjs.js');
}
