/**
 * 动态路由
 */

const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

// 配置路由，接收参数
router.get('/detail/:id', async (ctx, next) => {
  // 获取动态路由的传值
  ctx.body = ctx.params
})

// 动态路由里面可以传多个值
// router.get('/detail/:id/:name', async (ctx, next) => {
//   ctx.body = ctx.params
// })

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
