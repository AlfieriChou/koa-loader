const Base = require('./base')

module.exports = class Hello extends Base {
  constructor () {
    super()
    this.hewo = 'hewo'
  }
  index () {
    console.log('0--->', 'Hello World')
    return 'Hello World'
  }
}
