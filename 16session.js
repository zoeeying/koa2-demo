const Koa = require('koa')
const router = require('koa-router')()
const session = require('koa-session')
const app = new Koa()

// 配置中间件
app.keys = ['some secret hurr'] // 默认
const CONFIG = {
  key: 'koa:sess', // 默认
  maxAge: 86400000, // 因为Koa中的Session是基于Cookie的，所以这里的过期时间是指Cookie的过期时间
  overwrite: true,
  httpOnly: true,
  signed: true, // 默认
  rolling: false, // 每次请求时是否强行设置Cookie（会重置Cookie过期时间），默认false
  renew: true // 是否在Cookie即将过期时更新Cookie，默认false
}
app.use(session(CONFIG, app))

router.get('/', async ctx => {
  // 获取Session
  ctx.body = ctx.session.username
})

router.get('/login', async ctx => {
  // 设置Session
  ctx.session.username = '小畅叙'
  ctx.body = '登录成功！'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
