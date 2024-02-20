import { MongoUsersRepository } from '../../repositories/mongodb/mongo-users-repository'

import { SaveUserUseCase } from '../save-user'

export function makeSaveUserUseCase() {
  const mongoUsersRepository = new MongoUsersRepository()
  const saveUserUseCase = new SaveUserUseCase(mongoUsersRepository)
  return saveUserUseCase
}
