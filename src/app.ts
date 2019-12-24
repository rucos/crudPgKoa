import * as Koa from 'koa'
import { createKoaServer } from 'routing-controllers'
import logging from './logging'

class App {
	public app: Koa.DefaultContext

	constructor() {
		this.app = createKoaServer({
			routePrefix: '/api',
			controllers: [__dirname + '/controllers/**/*.ts'],
		})

		this.setMiddleware()
	}

	private setMiddleware(): void {
		this.app.use(logging)
	}
}

export default new App().app
