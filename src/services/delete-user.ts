import { UsersRepository } from '@/repositories/users-repository'

export class DeleteUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute(id: string): Promise<void> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new Error('User not Found')
    }
    await this.usersRepository.delete(id)
  }
}
