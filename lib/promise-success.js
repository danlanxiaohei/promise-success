'use strict'
const urllib = require('urllib')
const query = require('querystring')
const AgentHttps = require('agentkeepalive').HttpsAgent
const Agent = require('agentkeepalive')

const httpsAgent = new AgentHttps({keepAlive: true})
const httpAgent = new Agent({keepAlive: true})

const request = (path, params, urllibOptions, opt) => {
  urllibOptions = urllibOptions || {}
  params = params || {}
  const url = `${path}?${query.stringify(params)}`
  const agent = (url.indexOf('https') === 0) ? {httpsAgent: httpsAgent} : {agent: httpAgent}
  urllibOptions = Object.assign(urllibOptions, agent)

  return new Promise((resolve, reject) => {
    urllib.request(url, urllibOptions)
      .then(result => {
        const statusCode = result.res.statusCode
        const data = result.res.data
        let jsonData = (typeof data === 'string') ? JSON.parse(data) : {}
        let specialResolve = false
        if (opt && opt instanceof Object && opt.resolveCodes instanceof Array) {
          specialResolve = (opt.resolveCodes.indexOf(statusCode) !== -1)
        }
        if (statusCode !== 200 && specialResolve === false) {
          // 这里返回一个对象，包含了服务器返回的json数据和请求的statusCode
          reject(Object.assign(jsonData, {status: statusCode}))
        } else {
          resolve(jsonData)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = request
