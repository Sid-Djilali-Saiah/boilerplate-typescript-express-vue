import { injectable } from 'tsyringe';
import { compare } from 'bcryptjs';

import User from '@domain/user/entity';
import UserRepository from '@domain/user/repository/UserRepository';
import HttpError from '@utils/errors/HttpError';
import HTTP_STATUS from '@utils/resource/HttpStatus.enum';
import { createToken } from '@utils/jwt';

interface IResponse {
  user: User;
  token: string;
}

@injectable()
export default class AuthService {
  constructor(private userRepository: UserRepository) {}

  public async login(email: string, password: string): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new HttpError(HTTP_STATUS.UNAUTHORIZED, 'Incorrect email/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new HttpError(HTTP_STATUS.UNAUTHORIZED, 'Incorrect email/password combination.');
    }

    const token = createToken(user);
    delete user.password;

    return {
      user,
      token,
    };
  }
}
