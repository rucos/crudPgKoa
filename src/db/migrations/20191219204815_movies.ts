import * as Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
	await knex.schema.createTable('movies', (table: Knex.TableBuilder) => {
		table.increments()
		table.string('name').notNullable().unique()
		table.string('genre').notNullable()
		table.integer('rating').notNullable()
		table.boolean('explicit').notNullable()
	})
}

export async function down(knex: Knex): Promise<any> {
	await knex.schema.dropTable('movies')
}
