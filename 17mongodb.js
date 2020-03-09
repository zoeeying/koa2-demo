/**
 * 使用mongodb驱动操作数据库
 */
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'koa' // 数据库名称

// 连接数据库
console.time('test') // 用于测试耗时
MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log(err)
    return
  }
  let db = client.db(dbName) // 数据库对象

  // 增加数据
  db.collection('user').insertOne(
    {
      username: 'tyler',
      age: 28,
      sex: 'male',
      status: 1
    },
    (err, result) => {
      if (!err) {
        console.log('数据增加成功')
        console.timeEnd('test')
        client.close()
      }
    }
  )

  // 查询数据
  // var result = db.collection('user').find()
  // result.toArray((err, docs) => {
  //   console.log(docs)
  //   client.close()
  // })
})
