import { User } from '../models/user'

export interface ISaveUserParams {
  name?: string
  email?: string
  password?: string
}

export interface UsersRepository {
  create(data: User): Promise<User>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  list(): Promise<User[]>
  delete(id: string): Promise<void>
  save(id: string, params: ISaveUserParams): Promise<void>
}
