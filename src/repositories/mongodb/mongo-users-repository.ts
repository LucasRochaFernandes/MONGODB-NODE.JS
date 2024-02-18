import { User } from '../../models/user'
import { UsersRepository } from '../users-repository'

export class MongoUsersRepository implements UsersRepository {
  async create(data: User): Promise<User> {
    return data
  }

  async findByEmail(email: string): Promise<User> {
    return {
      name: 'Lucas',
      email,
      password: '123456',
    }
  }

  async list(): Promise<User[]> {
    return [
      {
        name: 'Lucas',
        email: 'example@example.com',
        password: '123456',
      },
    ]
  }
}
