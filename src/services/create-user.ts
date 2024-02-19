import { User } from '../models/user'
import { UsersRepository } from '../repositories/users-repository'

interface ICreateUserUseCaseResponse {
  user: User
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}
  async execute({
    email,
    name,
    password,
  }: User): Promise<ICreateUserUseCaseResponse> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email)
    if (emailAlreadyExists) {
      throw new Error('Email Already Exists')
    }
    const user = await this.usersRepository.create({
      email,
      name,
      password,
    })
    return {
      user,
    }
  }
}
