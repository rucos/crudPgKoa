import { config as dotEnvConfig } from 'dotenv'

interface IConfig {
	port: number
	prettyLog: boolean
}

dotEnvConfig()

const config: IConfig = {
	port: Number(process.env.NODE_PORT),
	prettyLog: process.env.NODE_ENV === 'development',
}
export default config
