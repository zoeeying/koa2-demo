const Koa = require('koa')
// koa-bodyparser是一个Koa的中间件，用来转换body中的请求参数并且放到ctx.request.body中
const bodyparser = require('koa-bodyparser')
const app = new Koa()
app.use(bodyparser())

app.use(async ctx => {
  if (ctx.method !== 'POST' && ctx.url === '/') {
    // 使用form表单来发起POST请求
    ctx.body = `
      <h2>用于发起POST请求的表单</h2>
      <form method="POST" action="/">
        <strong>用户名：</strong><br />
        <input name="userName" /><br />
        <strong>年龄：</strong><br />
        <input name="age" /><br />
        <strong>博客：</strong><br />
        <input name="blog" /><br />
        <button type="submit">submit</button>
      </form>
    `
  } else if (ctx.method === 'POST' && ctx.url === '/') {
    ctx.body = ctx.request.body // 使用了koa-bodyparser中间件
  } else {
    ctx.body = '<h2>404</h2>'
  }
})

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
