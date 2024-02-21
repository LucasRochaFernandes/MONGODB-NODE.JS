import { MakeDeleteUserUseCase } from '@/services/factories/make-delete-user-use-case'
import type { Request, Response } from 'express'
import { z } from 'zod'

const deleteUserParamsSchema = z.object({
  userId: z.string(),
})

export async function DeleteUserController(req: Request, res: Response) {
  const { userId } = deleteUserParamsSchema.parse(req.params)
  const deleteUserUseCase = MakeDeleteUserUseCase()
  try {
    await deleteUserUseCase.execute(userId)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({
        message: error.message,
        statusCode: 400,
      })
    }
  }

  res.send()
}
