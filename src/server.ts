import 'reflect-metadata'
import app from './app'
import config from './config'
import { createConnection } from 'typeorm'

const { port } = config;

(async () => {
	try {
		await createConnection()
		console.log('Database connect success')


		app.listen(port, () => {
			console.log(`Server listening on port: ${port}`)
		})
	} catch (error) {
		console.error(error)
	}
})()
