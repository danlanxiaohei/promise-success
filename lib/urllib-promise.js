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
