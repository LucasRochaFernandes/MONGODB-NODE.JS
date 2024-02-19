import { mongoClient } from '@/database/mongo'
import { User } from '../../models/user'
import { UsersRepository } from '../users-repository'

export class MongoUsersRepository implements UsersRepository {
  async create(data: User): Promise<User> {
    const { insertedId } = await mongoClient.db
      .collection('users')
      .insertOne(data)

    const user = await mongoClient.db
      .collection<User>('users')
      .findOne({ _id: insertedId })
    if (!user) {
      throw new Error('User Not Created')
    }
    const { _id, ...rest } = user
    return {
      id: _id.toHexString(),
      ...rest,
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await mongoClient.db
      .collection<User>('users')
      .findOne({ email })
    if (!user) {
      return null
    }
    const { _id, ...rest } = user
    return {
      id: _id.toHexString(),
      ...rest,
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
