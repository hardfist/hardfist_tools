
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/api.cjs.prod.js');
} else {
  module.exports = require('./dist/api.cjs.js');
}
