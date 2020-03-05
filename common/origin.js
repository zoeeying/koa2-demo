exports.getPostData = ctx => {
  return new Promise((resolve, reject) => {
    try {
      let str = ''
      ctx.req.on('data', chunk => {
        str += chunk
      })
      ctx.req.on('end', chunk => {
        resolve(str)
      })
    } catch (err) {
      reject(err)
    }
  })
}
