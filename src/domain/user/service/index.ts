import { injectable, inject } from 'tsyringe';
import { uuid } from 'uuidv4';
import { hashSync } from 'bcryptjs';

import HttpError from '@utils/errors/HttpError';
import HTTP_STATUS from '@utils/resource/HttpStatus.enum';
import IUserRepository from '../repository/IUserRepository';
import { IUserDTO } from '../repository/IUserDTO';

@injectable()
export default class UserService {
  constructor(@inject('UserRepository') private userRepository: IUserRepository) {}

  public async findById(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new HttpError(HTTP_STATUS.NOT_FOUND, 'User Not Found!');
    }
    delete user.password;
    return user;
  }

  public async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  public async save(user: IUserDTO) {
    const checkUserExists = await this.userRepository.findByEmail(user.email);

    if (checkUserExists) {
      throw new HttpError(HTTP_STATUS.CONFLICT, 'Email address already used.');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...savedUser } = await this.userRepository.save({
      ...user,
      id: uuid(),
      password: hashSync(user.password, 10),
    });

    return savedUser;
  }

  public async remove(id: string) {
    const result = await this.userRepository.remove(id);

    if (result?.affected === 0) {
      throw new HttpError(HTTP_STATUS.NOT_FOUND, 'User Not Found!');
    }
    return { removed: true };
  }
}
