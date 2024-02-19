import { MakeListUsersUseCase } from '@/services/factories/make-list-users-use-case'
import type { Response, Request } from 'express'

export async function ListUsersController(req: Request, res: Response) {
  const listUsersUseCase = MakeListUsersUseCase()
  const { users } = await listUsersUseCase.execute()
  res.status(200).send(users)
}
