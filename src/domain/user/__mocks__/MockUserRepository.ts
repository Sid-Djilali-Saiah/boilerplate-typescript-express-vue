import { uuid } from 'uuidv4';

import { DeleteResult } from 'typeorm';
import User from '../entity';
import IUserRepository from '../repository/IUserRepository';
import { IUserDTO } from '../repository/IUserDTO';

class MockUserRepository implements IUserRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  public async save(userData: IUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, userData);
    this.users.push(user);

    return user;
  }

  public async remove(id: string): Promise<DeleteResult> {
    const index = this.users.findIndex(user => user.id === id);
    return {
      raw: null,
      affected: index === -1 ? 0 : 1,
    } as DeleteResult;
  }
}

export default MockUserRepository;
