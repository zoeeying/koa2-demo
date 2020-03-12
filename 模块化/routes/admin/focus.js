const router = require('koa-router')()

router.get('/', async ctx => {
  ctx.body = '轮播图管理'
})
router.get('/list', async ctx => {
  ctx.body = '轮播图列表'
})
router.get('/add', async ctx => {
  ctx.body = '轮播图新增'
})
router.get('/edit', async ctx => {
  ctx.body = '轮播图修改'
})
router.get('/delete', async ctx => {
  ctx.body = '轮播图删除'
})

module.exports = router.routes()
