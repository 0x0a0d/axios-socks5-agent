"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpsAgent = require("socks5-https-client/lib/Agent");
const HttpAgent = require("socks5-http-client/lib/Agent");
function Socks5Agent(options) {
    const { host = '127.0.0.1', port = 9050, agentOptions, username, password } = options || {};
    const _options = Object.assign({}, agentOptions, {
        socksHost: host,
        socksPort: port,
    }, username != null && {
        socksUsername: username,
        socksPassword: password,
    });
    return {
        httpAgent: new HttpAgent(_options),
        httpsAgent: new HttpsAgent(_options),
    };
}
exports.default = Socks5Agent;
