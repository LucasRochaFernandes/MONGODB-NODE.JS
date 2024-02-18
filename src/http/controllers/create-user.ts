import { makeCreateUserUseCase } from '@/services/factories/make-create-user-use-case'
import type { Response, Request } from 'express'

export async function CreateUserController(req: Request, res: Response) {
  const { email, name, password } = req.body
  const createUserUseCase = makeCreateUserUseCase()
  const { user } = await createUserUseCase.execute({ email, name, password })
  res.status(201).send(user)
}
