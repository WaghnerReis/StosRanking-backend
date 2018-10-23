'use strict'

const Route = use('Route')

Route.post('user', 'UserController.create')
Route.post('session', 'SessionController.create')

Route.resource('worker', 'WorkerController').apiOnly()
Route.resource('game', 'GameController').apiOnly()
Route.resource('match', 'MatchController')
  .apiOnly()
  .except(['update', 'destroy'])
