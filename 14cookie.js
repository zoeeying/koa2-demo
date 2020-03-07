const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()

// router.get('/', async ctx => {
//   ctx.cookies.set('username', 'zoeeying', {
//     // domain: '127.0.0.1', // Cookie域名，正常情况下不要设置，表示当前域名下面的所有页面都可以访问Cookie。当有很多个子域名的时候可以设置成.baidu.com，表示baidu.com的所有子域名，比如a.baidu.com或者b.baidu.com都可以访问Cookie
//     path: '/', // Cookie默认访问路径，默认是/，表示所有路由都可以访问
//     maxAge: 1000 * 60 * 60 * 7, // Cookie有效时长，表示多少毫秒后过期
//     expires: new Date('2020-03-10'), // Cookie失效时间
//     httpOnly: true, // 是否只是服务器端可访问Cookie, 默认是true，如果设置为false，表示Cookie既可以在客户端被访问（比如模板页面中，通过JS访问Cookie），也可以在服务器端被访问
//     secure: false, // 安全Cookie，默认false，设置成true表示只有https可以访问
//     overwrite: false // 表示是否覆盖以前设置的同名的Cookie，默认是false
//   })
//   ctx.body = 'Cookie is ok'
// })

// router.get('/news', async ctx => {
//   ctx.body = ctx.cookies.get('username')
//     ? ctx.cookies.get('username')
//     : 'No Cookie'
// })

router.get('/', async ctx => {
  const username = new Buffer('小畅叙').toString('base64')
  ctx.cookies.set('username', username, {
    maxAge: 1000 * 60 * 60 * 7
  })
  ctx.body = 'Cookie is ok'
})

router.get('/news', async ctx => {
  let response = 'No Cookie'
  if (ctx.cookies.get('username')) {
    // 获取Cookie
    let username = ctx.cookies.get('username')
    username = new Buffer(username, 'base64').toString()
    response = username
  }
  ctx.body = response
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
