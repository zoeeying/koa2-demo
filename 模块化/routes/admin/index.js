const router = require('koa-router')()
const user = require('./user')
const focus = require('./focus')

router.get('/', async ctx => {
  ctx.body = '管理页面'
})
router.use('/user', user)
router.use('/focus', focus)

module.exports = router.routes()
