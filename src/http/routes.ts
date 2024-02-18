import { Router } from 'express'
import { CreateUserController } from './controllers/create-user'

export const router = Router()

router.post('/users', CreateUserController)
