import { makeCreateUserUseCase } from '@/services/factories/make-create-user-use-case'
import type { Response, Request } from 'express'

export async function CreateUserController(req: Request, res: Response) {
  const { email, name, password } = req.body
  const createUserUseCase = makeCreateUserUseCase()
  try {
    const { user } = await createUserUseCase.execute({ email, name, password })
    res.status(201).send(user)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({
        message: error.message,
        statusCode: 400,
      })
    }
  }
}
