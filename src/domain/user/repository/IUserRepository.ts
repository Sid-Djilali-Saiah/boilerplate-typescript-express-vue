import { DeleteResult } from 'typeorm';

import User from '../entity';
import { IUser } from './IUser';

export default interface IUserInterface {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  save(user: IUser): Promise<User>;
  remove(id: string): Promise<DeleteResult>;
}
