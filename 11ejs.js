const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

app.use(
  views(path.join(__dirname, './templates'), {
    extension: 'ejs'
  })
)

app.use(async ctx => {
  let title = 'EJS DEMO'
  await ctx.render('index', { title })
})

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
