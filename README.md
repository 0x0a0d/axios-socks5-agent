# axios-socks5-agent

> npm i axios-socks5-agent

wrap for **socks5-http-client** and **socks5-https-client**. I wrote this because there is no module support socks5 for axios and allow modifying agentOptions (sth likes keepAlive)

```js
const axios = require('axios')
const SocksAgent = require('axios-socks5-agent')

const { httpAgent, httpsAgent } = new SocksAgent({
  agentOptions: {
    keepAlive: true,
  },
  // socks5
  host: '127.0.0.1',
  port: 9050,
  // socks5 auth
  username: 'admin',
  password: 'pass1234',
})

axios
  .get('http://wtfismyip.com/json', { httpAgent, httpsAgent })
  .then(res => console.log(res.data))
  .catch(e => console.error(e))
```

# Usage

* new Socks5Agent(options) => { httpAgent, httpsAgent }
  * options.host: socks5 host, default **127.0.0.1**
  * options.port: socks5 port, default **9050**
  * options.agentOptions: https.AgentOptions. For more details [https://nodejs.org/api/https.html#https_new_agent_options](https://nodejs.org/api/https.html#https_new_agent_options)

* httpAgent vs httpsAgent: axios config
