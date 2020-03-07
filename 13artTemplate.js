const Koa = require('koa')
const router = require('koa-router')()
const path = require('path')
const render = require('koa-art-template')
const app = new Koa()

// 配置art-template模板引擎
render(app, {
  root: path.join(__dirname, 'views'), // 模板所在目录
  extname: '.html', // 模板后缀名
  debug: process.env.NODE_ENV !== 'production' // 是否开启调试模式
})

router.get('/', async ctx => {
  let data = {
    name: '小畅叙'
  }
  await ctx.render('index', { data })
})

router.get('/news', async ctx => {
  let data = {
    name: '小畅叙',
    html: '<h4>我是h4标签</h4>',
    list: ['aaa', 'bbb', 'ccc'],
    num: 10
  }
  await ctx.render('news', { data })
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
