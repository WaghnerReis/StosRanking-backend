'use strict'

const Model = use('Model')

class Worker extends Model {
  matchs () {
    return this.hasMany('App/Models/Match')
  }
}

module.exports = Worker
