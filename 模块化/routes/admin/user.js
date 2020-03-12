const router = require('koa-router')()

router.get('/', async ctx => {
  await ctx.render('admin/user/index')
})
router.get('/list', async ctx => {
  await ctx.render('admin/user/list')
})
router.get('/add', async ctx => {
  await ctx.render('admin/user/add')
})
router.get('/edit', async ctx => {
  await ctx.render('admin/user/edit')
})

module.exports = router.routes()
