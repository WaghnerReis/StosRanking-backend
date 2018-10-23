'use strict'

const Schema = use('Schema')

class WorkerSchema extends Schema {
  up () {
    this.create('workers', table => {
      table.increments()
      table.string('name').notNullable()
      table.string('photo').notNullable()
      table
        .string('email')
        .notNullable()
        .unique()
      table.string('password').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('workers')
  }
}

module.exports = WorkerSchema
