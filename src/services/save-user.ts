import {
  ISaveUserParams,
  UsersRepository,
} from '@/repositories/users-repository'

export class SaveUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute(id: string, params: ISaveUserParams): Promise<void> {
    const userExists = await this.usersRepository.findById(id)
    if (!userExists) {
      throw new Error('User Not Found')
    }
    await this.usersRepository.save(id, params)
  }
}
