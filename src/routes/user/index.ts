import { Router } from 'express';

import UserResource from '@domain/user/resource';
import ensureAuthenticated from '@utils/middleware/auth';

const userRouter = Router();
const userResource = new UserResource();

userRouter.post('/', userResource.save);

// Authenticated Routes
userRouter.use(ensureAuthenticated);

userRouter.get('/:id', userResource.one);
userRouter.delete('/:id', userResource.remove);

export default userRouter;
