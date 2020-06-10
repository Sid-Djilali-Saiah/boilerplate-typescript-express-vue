import 'reflect-metadata';
import HttpError from '@utils/errors/HttpError';
import UserService from './index';

import MockUserRepository from '../__mocks__/MockUserRepository';

describe('User Service', () => {
  it('should be able to create a new user', async () => {
    const mockUserRepository = new MockUserRepository();
    const userService = new UserService(mockUserRepository);

    const user = await userService.save({
      firstName: 'John',
      lastName: 'Doe',
      age: 21,
      email: 'john.doe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email from another', async () => {
    const mockUserRepository = new MockUserRepository();
    const userService = new UserService(mockUserRepository);

    await mockUserRepository.save({
      firstName: 'John',
      lastName: 'Doe',
      age: 21,
      email: 'john.doe@example.com',
      password: '123456',
    });

    expect(
      userService.save({
        firstName: 'John',
        lastName: 'Doe',
        age: 21,
        email: 'john.doe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(HttpError);
  });

  it('should be able to find user by id', async () => {
    const mockUserRepository = new MockUserRepository();
    const userService = new UserService(mockUserRepository);

    const findUser = await userService.save({
      firstName: 'John',
      lastName: 'Doe',
      age: 21,
      email: 'john.doe@example.com',
      password: '123456',
    });

    const user = await userService.findById(findUser.id);
    expect(user).not.toBeNull();
    expect(user).toHaveProperty('id');
  });

  it('should be able to find user by email', async () => {
    const mockUserRepository = new MockUserRepository();
    const userService = new UserService(mockUserRepository);

    const findUser = await userService.save({
      firstName: 'John',
      lastName: 'Doe',
      age: 21,
      email: 'john.doe@example.com',
      password: '123456',
    });

    const user = await userService.findByEmail(findUser.email);
    expect(user).not.toBeNull();
    expect(user).toHaveProperty('id');
  });

  it('should be expect not found error when find user with invalid id', async () => {
    const mockUserRepository = new MockUserRepository();
    const userService = new UserService(mockUserRepository);

    const findUser = await userService.save({
      firstName: 'John',
      lastName: 'Doe',
      age: 21,
      email: 'john.doe@example.com',
      password: '123456',
    });

    expect(userService.findById(`${findUser.id}123`)).rejects.toBeInstanceOf(HttpError);
  });

  it('should be expect not found error when delete user with invalid id', async () => {
    const mockUserRepository = new MockUserRepository();
    const userService = new UserService(mockUserRepository);

    const findUser = await userService.save({
      firstName: 'John',
      lastName: 'Doe',
      age: 21,
      email: 'john.doe@example.com',
      password: '123456',
    });

    expect(userService.remove(`${findUser.id}123`)).rejects.toBeInstanceOf(HttpError);
  });

  it('should be able to delete a user with valid id', async () => {
    const mockUserRepository = new MockUserRepository();
    const userService = new UserService(mockUserRepository);

    const findUser = await userService.save({
      firstName: 'John',
      lastName: 'Doe',
      age: 21,
      email: 'john.doe@example.com',
      password: '123456',
    });

    const result = await userService.remove(`${findUser.id}`);
    expect(result).toHaveProperty('removed');
    expect(result).toEqual({ removed: true });
  });
});
