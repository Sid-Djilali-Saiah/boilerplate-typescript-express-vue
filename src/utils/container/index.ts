import { container } from 'tsyringe';

import UserRepository from '@domain/user/repository/UserRepository';

container.registerSingleton('UserRepository', UserRepository);
