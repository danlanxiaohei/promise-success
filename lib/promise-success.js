'use strict'
const urllib = require('urllib')
const query = require('querystring')
const AgentHttps = require('agentkeepalive').HttpsAgent
const Agent = require('agentkeepalive')

const httpsAgent = new AgentHttps({keepAlive: true})
const httpAgent = new Agent({keepAlive: true})

const request = (path, params, urllibOptions) => {
  urllibOptions = urllibOptions || {}
  params = params || {}
  const url = `${path}?${query.stringify(params)}`
  const agent = (url.indexOf('https') === 0) ? {httpsAgent: httpsAgent} : {agent: httpAgent}
  urllibOptions = Object.assign(urllibOptions, agent)

  return new Promise((resolve, reject) => {
    urllib.request(url, urllibOptions)
      .then(result => {
        const statusCode = result.res.statusCode
        // TODO: 这里考虑一下遇到JSON.parse(result.res.data)处理结果不是一个json的情况
        let jsonData = JSON.parse(result.res.data)
        if (statusCode >= 200 && statusCode < 300) {
          resolve(jsonData)
        } else {
          // 这里返回一个对象，包含了服务器返回的json数据和请求的statusCode
          reject(Object.assign(jsonData, {status: statusCode}))
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = request
