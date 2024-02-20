import { Router } from 'express'
import { CreateUserController } from './controllers/create-user'
import { ListUsersController } from './controllers/list-users'
import { SaveUserController } from './controllers/update-user'

export const router = Router()

router.post('/users', CreateUserController)
router.get('/users', ListUsersController)
router.patch('/users', SaveUserController)
