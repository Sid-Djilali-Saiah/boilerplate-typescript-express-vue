import { Router } from 'express';

import AuthResource from '@domain/auth/resource';

const authRouter = Router();
const authResource = new AuthResource();

authRouter.post('/', authResource.login);

export default authRouter;
