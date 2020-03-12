const Koa = require('koa')
const router = require('koa-router')()
const render = require('koa-art-template')
const jsonp = require('koa-jsonp')
const static = require('koa-static')
const cors = require('koa2-cors')
const path = require('path')
const app = new Koa()

render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})

app.use(jsonp())
app.use(static(__dirname + '/public'))
app.use(cors())

// 引入子路由模块
const index = require('./routes/index') // 前台
const admin = require('./routes/admin/index') // 后台
const api = require('./routes/api') // 接口

// 配置子路由（层级路由）
router.use(index)
router.use('/admin', admin)
router.use('/api', api)

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
