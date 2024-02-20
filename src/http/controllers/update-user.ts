import z from 'zod'
import type { Response, Request } from 'express'
import { makeSaveUserUseCase } from '@/services/factories/make-save-user-use-case'

const saveUserBodySchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
})

export async function SaveUserController(req: Request, res: Response) {
  const paramsBody = saveUserBodySchema.parse(req.body)

  const { id, ...params } = paramsBody

  const saveUserUseCase = makeSaveUserUseCase()
  await saveUserUseCase.execute(id, params)

  res.status(200).send()
}
