const dir = require('dir_filenames')
const _ = require('lodash')

const files = dir(`${process.env.PWD}/service`)
_.remove(files, n => {
  return n === `${process.env.PWD}/service/base`
})

const service = {}
files.map(file => {
  let name = file.split('/').pop().replace(/\.\w+$/, '')
  service[name] = require(file).prototype
})

module.exports = service
