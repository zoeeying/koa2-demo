const Koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')
const app = new Koa()
const static = require('koa-static')

app.use(
  views('views', {
    extension: 'ejs'
  })
)
// 静态资源放在static目录中
// 访问静态资源的时候，无需加上static目录，比如http://localhost:3000/css/basic.css
// 如果找不到静态资源的话，会执行next，继续向下匹配（底层封装好的，无需我们手动调用next方法）
// 两种写法都可，还可以配置多个目录
// app.use(static('./static'))
app.use(static(__dirname + '/static'))

router.get('/', async ctx => {
  await ctx.render('form')
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
