export interface ILogData {
	method: string
	url: string
	query: string
	remoteAddress: string
	host: string
	userAgent: string
	statusCode: number
	errorMessage: string
	errorStack: string
	data: any
	responseTime: number
}
