'use strict'

const Schema = use('Schema')

class GameSchema extends Schema {
  up () {
    this.create('games', table => {
      table.increments()
      table
        .string('name')
        .notNullable()
        .unique()
      table.string('photo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('games')
  }
}

module.exports = GameSchema
