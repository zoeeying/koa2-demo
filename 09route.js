/**
 * 路由层级
 */

const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
// const router = new Router({
//   prefix: '/zoe'
// })

let home = new Router()
home
  .get('/todo', async ctx => {
    ctx.body = 'Home Todo Page'
  })
  .get('/self', async ctx => {
    ctx.body = 'Home Self Page'
  })

let setting = new Router()
setting
  .get('/todo', async ctx => {
    ctx.body = 'Setting Todo Page'
  })
  .get('/self', async ctx => {
    ctx.body = 'Setting Self Page'
  })

// 父路由，装载所有子路由
const router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/setting', setting.routes(), setting.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
