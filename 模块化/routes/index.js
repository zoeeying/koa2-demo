// 前台路由
const router = require('koa-router')()
router.get('/', async ctx => {
  ctx.body = '首页'
})
router.get('/about', async ctx => {
  ctx.body = '关于我们'
})
router.get('/case', async ctx => {
  ctx.body = '案例页面'
})
module.exports = router.routes()
