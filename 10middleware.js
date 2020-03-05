/**
 * 中间件执行流程
 */

const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

app.use(async (ctx, next) => {
  console.log('流程1')
  await next()
  console.log('流程5')
})

app.use(async (ctx, next) => {
  console.log('流程2')
  await next()
  console.log('流程4')
})

router
  .get('/', async (ctx, next) => {
    ctx.body = 'This is index page'
  })
  .get('/todo', async (ctx, next) => {
    console.log('流程3')
    ctx.body = 'This is todo page'
  })

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
