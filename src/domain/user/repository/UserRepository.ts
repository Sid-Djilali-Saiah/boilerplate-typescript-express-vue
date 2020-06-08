import { Repository, getRepository, DeleteResult } from 'typeorm';

import IUserRepository from './IUserRepository';
import User from '../entity';
import { IUser } from './IUser';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    return this.repository.findOne(id);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({
      where: { email },
    });

    return user;
  }

  public async save(user: IUser): Promise<User> {
    return this.repository.save(user);
  }

  public async remove(id: string): Promise<DeleteResult> {
    return this.repository.delete({ id });
  }
}

export default UserRepository;
