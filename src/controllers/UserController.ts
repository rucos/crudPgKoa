import { Body, Delete, Get, JsonController, Param, Post, Put } from 'routing-controllers'
import { User } from '../entity/User'
import UserRepository from '../repository/UserRepository'
import { getCustomRepository } from 'typeorm'

@JsonController()
export class UserController {

	private readonly userRepository: UserRepository

	constructor() {
		this.userRepository = getCustomRepository(UserRepository)
	}

	@Get('/users/:id')
	getOne(@Param('id') id: number): Promise<User> {
		return this.userRepository.findOne(id)
	}

	@Post('/users')
	post(@Body() user: any) {
		return 'Saving user...'
	}

	@Put('/users/:id')
	put(@Param('id') id: number, @Body() user: any) {
		return 'Updating a user...'
	}

	@Delete('/users/:id')
	remove(@Param('id') id: number) {
		return 'Removing user...'
	}

}
