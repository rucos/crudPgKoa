import * as Router from 'koa-router'

export default class Routes extends Router {
	constructor() {
		super()

		// eslint-disable-next-line @typescript-eslint/require-await
		this.get('/*', async (ctx: any) => {
			ctx.body = {
				status: 'success',
				message: 'hello, world!!',
			}
		})
	}
}
