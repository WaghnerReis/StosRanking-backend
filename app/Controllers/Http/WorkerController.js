'use strict'

const Worker = use('App/Models/Worker')

class WorkerController {
  async index () {
    const workers = await Worker.all()

    return workers
  }

  async store ({ request }) {
    const data = request.all()
    const worker = await Worker.create(data)

    return worker
  }

  async show ({ params }) {
    const worker = await Worker.findOrFail(params.id)

    return worker
  }

  async update ({ params, request }) {
    const data = request.all()

    const worker = await Worker.findOrFail(params.id)
    worker.merge(data)
    await worker.save()

    return worker
  }

  async destroy ({ params }) {
    const worker = await Worker.findOrFail(params.id)

    await worker.delete()
  }
}

module.exports = WorkerController
