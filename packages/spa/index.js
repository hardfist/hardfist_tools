
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/spa.cjs.prod.js');
} else {
  module.exports = require('./dist/spa.cjs.js');
}
