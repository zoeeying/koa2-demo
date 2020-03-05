const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
  if (ctx.url === '/index') {
    ctx.cookies.set('username', 'zoeeying', {
      // domain: '127.0.0.1', // Cookie域名，正常情况下不要设置，当有很多个子域名的时候可以设置成这这样.baidu.com，表示baidu.com下的子域名，比如a.baidu.com或者b.baidu.com都可以
      // path: '/user', // Cookie路径，默认是/，如果设置了/user，表示当访问/user的时候才设置这个Cookie
      maxAge: 1000 * 60 * 60 * 7, // Cookie有效时长
      expires: new Date('2020-03-10'), // Cookie失效时间
      httpOnly: true, // 是否只是服务器可访问Cookie, 默认是true
      secure: false, // 安全Cookie，默认false，设置成true表示只有https可以访问
      overwrite: false // 表示是否覆盖以前设置的同名的Cookie，默认是false
    })
    ctx.body = 'Cookie is ok'
  } else {
    ctx.body = ctx.cookies.get('username')
      ? ctx.cookies.get('username')
      : 'No Cookie'
  }
})
app.listen(3000, () => {
  console.log('server is started at port 3000')
})
