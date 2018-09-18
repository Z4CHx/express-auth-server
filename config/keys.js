// dev or production keys are used based on environment
if (process.env.NODE_ENV === 'production' ) {
  module.exports = require('./prod')
} else {
  module.exports = require('./dev.js')
}
