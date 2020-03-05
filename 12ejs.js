const Koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')
const app = new Koa()

// 配置模板引擎中间件（第三方中间件），下面两种方法都可以
// app.use(views('views', { map: { html: 'ejs' } })) // 模板后缀名必须是.html
app.use(
  views('views', {
    extension: 'ejs' // 应用EJS模板引擎，模板后缀名必须是.ejs
  })
)
app.use(async (ctx, next) => {
  ctx.state = {
    username: 'zoeeying',
    age: '18'
  }
  await next()
})

router.get('/', async ctx => {
  // 把后台数据传到前台去渲染
  const title = '这是一个EJS的模板'
  // 这里必须加await
  await ctx.render('index', { title })
})

router.get('/news', async ctx => {
  const list = [1111, 2222, 3333]
  const content = '<h4>HTML内容</h4>'
  const num = 102
  await ctx.render('news', { list, content, num })
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
