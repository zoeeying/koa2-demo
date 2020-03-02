let success = true

function step1 (resolve, reject) {
  console.log('step1-开始-洗菜做饭')
  if (success) {
    resolve('洗菜做饭-完成')
  } else {
    reject('洗菜做饭-错误')
  }
}
function step2 (resolve, reject) {
  console.log('step2-开始-坐下来吃饭')
  if (success) {
    resolve('坐下来吃饭-完成')
  } else {
    reject('坐下来吃饭-错误')
  }
}
function step3 (resolve, reject) {
  console.log('step3-开始-收拾桌子洗碗')
  if (success) {
    resolve('收拾桌子洗碗-完成')
  } else {
    reject('收拾桌子洗碗-错误')
  }
}

new Promise(step1)
  .then(function (val) {
    console.log(val)
    return new Promise(step2)
  })
  .then(function (val) {
    console.log(val)
    return new Promise(step3)
  })
  .then(function (val) {
    console.log(val)
  })