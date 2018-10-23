'use strict'

const Model = use('Model')

class Match extends Model {
  workerOne () {
    return this.belongsTo('App/Models/Worker', 'worker_one_id')
  }

  workerTwo () {
    return this.belongsTo('App/Models/Worker', 'worker_two_id')
  }

  winner () {
    return this.belongsTo('App/Models/Worker', 'winner_id')
  }

  game () {
    return this.belongsTo('App/Models/Game')
  }

  static get hidden () {
    return ['worker_one_id', 'worker_two_id', 'winner_id', 'game_id']
  }
}

module.exports = Match
