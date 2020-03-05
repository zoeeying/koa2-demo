// function getSomething() {
//   return 'something'
// }
// async function testAsync() {
//   return 'Hello Async'
// }
// function takeLongTime() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('after a long time'), 3000)
//   })
// }
// async function test() {
//   // await必须在async函数中使用
//   const v1 = await getSomething() // 使用await调用普通函数（返回字符串值）
//   const v2 = await testAsync() // 使用await调用async函数
//   const v3 = testAsync() // 不使用await调用async函数，返回Promise对象
//   const v4 = await takeLongTime() // 使用await调用普通函数（返回Promise对象）
//   // 三秒钟后下面的代码才会执行
//   console.log(v1) // something
//   console.log(v2) // Hello Async
//   console.log(v3) // Promise对象
//   console.log(v4) // after a long time
// }
// test()

// callback异步编程
// function getData(callback) {
//   setTimeout(() => {
//     let name = 'zoeeying'
//     callback(name)
//   }, 1000)
// }
// getData(data => {
//   console.log(data)
// })

// Promise
// var p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let name = 'zoeeying'
//     resolve(name)
//   }, 1000)
// })
// p.then(data => console.log(data))

function getData(resolve, reject) {
  setTimeout(() => {
    let name = 'zoeeying'
    resolve(name)
  }, 1000)
}
var p = new Promise(getData)
p.then(data => console.log(data))
