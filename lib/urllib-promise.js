const urllib = require('urllib')
const query = require('querystring')

const request = (path, params, options) => {
  options = options || {}
  params = params || {}
  const url = `${path}?${query.stringify(params)}`
  return new Promise((resolve, reject) => {
    urllib.request(url, options)
      .then(result => {
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = request
// 疑问，其实urllib官方也有promise的实现，为什么不是我这样的实现呢。
// 而且我的实现是封装也urllib+promise，相当于用了2个promise，要封装也要封装他的callback吧
