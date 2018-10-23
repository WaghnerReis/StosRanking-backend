'use strict'

const Schema = use('Schema')

class MatchSchema extends Schema {
  up () {
    this.create('matches', table => {
      table.increments()
      table
        .integer('worker_one_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('workers')
        .onUpdate('CASCADE')
      table
        .integer('worker_two_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('workers')
        .onUpdate('CASCADE')
      table
        .integer('winner_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('workers')
        .onUpdate('CASCADE')
      table
        .integer('game_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('games')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('matches')
  }
}

module.exports = MatchSchema
