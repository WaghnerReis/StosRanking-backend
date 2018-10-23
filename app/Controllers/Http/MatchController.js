'use strict'

const Match = use('App/Models/Match')

class MatchController {
  async index () {
    const matchs = await Match.query()
      .with('workerOne')
      .with('workerTwo')
      .with('winner')
      .with('game')
      .fetch()

    return matchs
  }

  async store ({ request }) {
    const data = request.all()
    const match = await Match.create(data)

    return match
  }

  async show ({ params }) {
    const match = await Match.findOrFail(params.id)

    return match
  }
}

module.exports = MatchController
