import { MongoUsersRepository } from '@/repositories/mongodb/mongo-users-repository'
import { ListUsersUseCase } from '../list-users'

export function MakeListUsersUseCase() {
  const mongoUsersRepository = new MongoUsersRepository()
  const listUsersUseCase = new ListUsersUseCase(mongoUsersRepository)
  return listUsersUseCase
}
