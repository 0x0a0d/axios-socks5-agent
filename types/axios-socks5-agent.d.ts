import { AgentOptions } from 'https'

export type Socks5AgentOptions = {
  host: string
  port: number
  username?: string
  password?: string
  agentOptions: AgentOptions
}
