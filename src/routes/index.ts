import { Router } from 'express';

import userRouter from './user';
import authRouter from './auth';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/user', userRouter);

export default routes;
