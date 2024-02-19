import { mongoClient } from '@/database/mongo'
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
    const users = await mongoClient.db
      .collection<Omit<User, 'id'>>('users')
      .find({})
      .toArray()
    const usersMap = users.map(({ _id, ...user }) => {
      return {
        ...user,
        id: _id.toHexString(),
      }
    })
    return usersMap
  }
}
