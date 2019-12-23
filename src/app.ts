import * as Koa from 'koa'
import Routes from './routes'
import logging from './logging'

class App {
	public app: Koa.DefaultContext

	private readonly router: Routes = new Routes()

	constructor() {
		this.app = new Koa()

		this.setMiddleware()
	}

	private setMiddleware(): void {
		this.app.use(logging)
		this.app.use(this.router.routes())
	}
}

export default new App().app
