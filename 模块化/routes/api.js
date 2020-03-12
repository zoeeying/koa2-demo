const router = require('koa-router')()
const DB = require('../module/db')

router.get('/', async ctx => {
  ctx.body = { title: '这是一个api接口' }
})
router.get('/userlist', async ctx => {
  const data = await DB.find('user')
  ctx.body = data
})
module.exports = router.routes() // 暴露出去的就是启动好的路由
