/**
 * 简单使用koa-router
 */

const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  // 从ctx.request中获取GET传值
  let req_query = ctx.request.query
  let req_querystring = ctx.request.querystring

  // 从ctx中获取GET传值
  let ctx_query = ctx.query
  let ctx_querystring = ctx.querystring

  ctx.body = {
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
