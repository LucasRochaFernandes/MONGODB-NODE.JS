import { User } from '../models/user'
import { UsersRepository } from '../repositories/users-repository'

interface IListUsersUseCaseResponse {
  users: User[]
}

export class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<IListUsersUseCaseResponse> {
    const users = await this.usersRepository.list()
    return {
      users,
    }
  }
}
