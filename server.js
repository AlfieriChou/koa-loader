const Koa = require('koa')
const service = require('./context')

const app = new Koa()

console.log('----->', service.hello.index())

app.listen(3000, () =>
  console.log(`🚀 Server ready at http://127.0.0.1:3000`)
)
