import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
  public async main({ view }: HttpContextContract) {
    return view.render('pages/main') // Render the main page
  }
}