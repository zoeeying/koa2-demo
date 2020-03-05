const Koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')
const app = new Koa()
const common = require('./common/origin')
const bodyParser = require('koa-bodyparser')

app.use(
  views('views', {
    extension: 'ejs'
  })
)
// 配置中间件
app.use(bodyParser())

router.get('/', async ctx => {
  await ctx.render('form')
})

// 接收POST提交过来的数据
router.post('/post', async ctx => {
  // 使用原生的Node.js在Koa中获取POST提交的数据
  // let data = await common.getPostData(ctx)
  // ctx.body = data
  // 使用body-parser获取POST提交的数据，并且转换成了对象
  ctx.body = ctx.request.body
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
