import { MongoUsersRepository } from '@/repositories/mongodb/mongo-users-repository'
import { DeleteUserUseCase } from '../delete-user'

export function MakeDeleteUserUseCase() {
  const mongoUsersRepository = new MongoUsersRepository()
  const deleteUsersUseCase = new DeleteUserUseCase(mongoUsersRepository)
  return deleteUsersUseCase
}
