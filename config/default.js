const prod = require('./prod');
const local = require('./local');

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'ci') {
  module.exports = prod;
} else {
  module.exports = local;
}
