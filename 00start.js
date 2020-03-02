const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
  // ctx相当于上下文对象
  ctx.body = 'Hello Zoe' // 在页面上输出信息，服务端渲染的
})
// 监听端口
app.listen(3000, () => {
  console.log('server is started at port 3000')
})
