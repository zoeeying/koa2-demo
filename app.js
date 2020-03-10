const Koa = require('koa')
const render = require('koa-art-template')
const router = require('koa-router')()
const bodyparser = require('koa-bodyparser')
const path = require('path')
const DB = require('./module/db') // 引入的是实例
const app = new Koa()

app.use(bodyparser())

// 配置art-template模板引擎
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})

router
  .get('/', async (ctx, next) => {
    const data = await DB.find('user')
    await ctx.render('home', { data })
  })
  .get('/add', async (ctx, next) => {
    await ctx.render('add')
  })
  // 往数据库增加用户
  .post('/addUser', async (ctx, next) => {
    const data = await DB.insert('user', ctx.request.body)
    try {
      if (data.result.ok) {
        ctx.redirect('/')
      }
    } catch (err) {
      console.log(err)
      ctx.redirect('/add')
    }
  })
  .get('/edit', async (ctx, next) => {
    // 根据传递过来的id获取用户信息
    const { id } = ctx.query
    const data = await DB.find('user', { _id: DB.getObjectId(id) })
    await ctx.render('edit', { data: data[0] })
  })
  .post('/editUser', async (ctx, next) => {
    const { id, username, age, sex } = ctx.request.body
    const data = await DB.update(
      'user',
      { _id: DB.getObjectId(id) },
      { username, age, sex }
    )
    try {
      if (data.result.ok) {
        ctx.redirect('/')
      }
    } catch (err) {
      console.log(err)
      ctx.redirect('/add')
    }
  })
  .get('/delete', async (ctx, next) => {
    const { id } = ctx.query
    const data = await DB.delete('user', { _id: DB.getObjectId(id) })
    try {
      if (data.result.ok) {
        ctx.redirect('/')
      }
    } catch (err) {
      console.log(err)
      ctx.redirect('/')
    }
  })

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
