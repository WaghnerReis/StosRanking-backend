'use strict'

const Game = use('App/Models/Game')

class GameController {
  async index () {
    const games = await Game.all()

    return games
  }

  async store ({ request }) {
    const data = request.all()
    const game = await Game.create(data)

    return game
  }

  async show ({ params }) {
    const game = await Game.findOrFail(params.id)

    return game
  }

  async update ({ params, request }) {
    const data = request.all()

    const game = await Game.findOrFail(params.id)
    game.merge(data)
    await game.save()

    return game
  }

  async destroy ({ params }) {
    const game = await Game.findOrFail(params.id)

    await game.delete()
  }
}

module.exports = GameController
