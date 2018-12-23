module.exports = class Base {
  constructor () {
    this.app = require('../context')
    this.ctx = this.app.context
  }
}
