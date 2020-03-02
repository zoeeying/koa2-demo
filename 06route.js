const Koa = require('koa')
const app = new Koa()
const fs = require('fs')

const render = page => {
  return new Promise((resolve, reject) => {
    let pageUrl = `./pages/${page}`
    fs.readFile(pageUrl, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

const route = async url => {
  let page = '404.html'
  switch (url) {
    case '/':
    case '/index':
      page = 'index.html'
      break
    case '/todo':
      page = 'todo.html'
      break
    case '/404':
      page = '404.html'
      break
    default:
      break
  }
  return await render(page)
}

app.use(async ctx => {
  let url = ctx.url
  ctx.body = await route(url)
})

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
