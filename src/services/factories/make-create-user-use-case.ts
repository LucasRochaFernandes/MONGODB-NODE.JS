import { MongoUsersRepository } from '../../repositories/mongodb/mongo-users-repository'
import { CreateUserUseCase } from '../create-user'

export function makeCreateUserUseCase() {
  const mongoUsersRepository = new MongoUsersRepository()
  const createUserUseCase = new CreateUserUseCase(mongoUsersRepository)
  return createUserUseCase
}
