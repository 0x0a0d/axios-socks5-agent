import { AgentOptions } from 'https'
import HttpsAgent = require('socks5-https-client/lib/Agent')
import HttpAgent = require('socks5-http-client/lib/Agent')

export type Socks5AgentOptions = {
  host: string
  port: number
  username?: string
  password?: string
  agentOptions: AgentOptions
}
/**
 * @typedef {Object} AxiosSocks5AgentOptions
 * @property {string} [host='127.0.0.1']
 * @property {string|number} [port=9050]
 * @property {string|null} username?
 * @property {string|null} password?
 * @property {module:https.AgentOptions} [agentOptions={}]
 */
/**
 * @param {AxiosSocks5AgentOptions} options
 * @return { { httpAgent: Agent, httpsAgent: Agent } }
 */
export default function Socks5Agent(options: Socks5AgentOptions): {httpAgent: HttpAgent, httpsAgent: HttpsAgent} {
  const {
    host = '127.0.0.1',
    port = 9050,
    agentOptions,
    username,
    password
  } = options || {}

  const _options = Object.assign({}, agentOptions, {
    socksHost: host,
    socksPort: port,
  }, username != null && {
    socksUsername: username,
    socksPassword: password,
  })
  return {
    httpAgent: new HttpAgent(_options),
    httpsAgent: new HttpsAgent(_options),
  }
}
