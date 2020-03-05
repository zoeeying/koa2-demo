/**
 * 应用级中间件和路由级中间件
 */

const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

app.use(async (ctx, next) => {
  console.log('这是一个中间件')
  // 中间件通过next来实现
  // 先匹配所有路由，打印出日期，再往下匹配其它路由
  // 如果不写await next()，路由会终止，不会往下匹配了
  await next()
  // await next()写在if语句上面，表示先去下面匹配路由，匹配不到才会走这个if判断
  if (ctx.status === 404) {
    ctx.status = 400
    ctx.body = '404 Page'
  } else {
    console.log(ctx.url)
  }
})

router
  .get('/', async (ctx, next) => {
    ctx.body = 'This is index page'
  })
  // 匹配到/todo后，打印一句话，再往下匹配路由
  .get('/todo', async (ctx, next) => {
    console.log('一句话')
    await next()
  })
  .get('/todo', async (ctx, next) => {
    ctx.body = 'This is todo page'
  })

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
