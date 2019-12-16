import * as Koa from 'koa'
import Routes from './routes'

class App {
	public app: Koa.DefaultContext

	private readonly router: Routes = new Routes()

	constructor() {
		this.app = new Koa()

		this.setConfig()
	}

	private setConfig(): void {
		this.app.use(this.router.routes())
	}
}

export default new App().app
