import { User } from '../models/user'

export interface UsersRepository {
  create(data: User): Promise<User>
  findByEmail(email: string): Promise<User>
  list(): Promise<User[]>
}
