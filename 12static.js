const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

// 配置了静态资源目录后，直接在地址栏输入http://127.0.0.1:3000/avatar.jpg即可访问图片资源
// 无需再加上static目录
app.use(static(path.join(__dirname, './static')))

app.use(async ctx => {
  ctx.body = '可以访问静态资源啦！'
})

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
