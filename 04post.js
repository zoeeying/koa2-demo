const Koa = require('koa')
const app = new Koa()
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
    ctx.body = await getPostData(ctx)
  } else {
    ctx.body = '<h2>404</h2>'
  }
})

const getPostData = ctx =>
  new Promise((resolve, reject) => {
    try {
      let postStr = ''
      // 使用Node的request对象中的addListener方法
      ctx.req.addListener('data', data => {
        postStr += data
      })
      ctx.req.on('end', () => {
        resolve(parsePostData(postStr))
      })
    } catch (error) {
      reject(error)
    }
  })

const parsePostData = postStr => {
  let postData = {}
  let strArr = postStr.split('&')
  for (let item of strArr) {
    let itemArr = item.split('=')
    postData[itemArr[0]] = decodeURIComponent(itemArr[1])
  }
  return postData
}

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
