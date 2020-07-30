const HttpsAgent = require('socks5-https-client/lib/Agent')
const HttpAgent = require('socks5-http-client/lib/Agent')

/**
 * @typedef {Object} AxiosSocks5AgentOptions
 * @property {string} [host='127.0.0.1']
 * @property {string|number} [port=9050]
 * @property {module:https.AgentOptions} [agentOptions={}]
*/
/**
 * @param {AxiosSocks5AgentOptions} options
 * @return { { httpAgent: Agent, httpsAgent: Agent } }
 */
module.exports = function ({ host = '127.0.0.1', port = 9050, agentOptions = {} }) {
  const options = Object.assign(agentOptions, {
    socksHost: host,
    socksPort: port
  })
  return {
    httpAgent: new HttpAgent(options),
    httpsAgent: new HttpsAgent(options),
  }
}