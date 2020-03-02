const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router
  .get('/', (ctx, next) => {
    ctx.body = 'This is index page'
  })
  .get('/todo', (ctx, next) => {
    ctx.body = 'This is todo page'
  })

// router.allowedMethods()表示只允许GET请求
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
