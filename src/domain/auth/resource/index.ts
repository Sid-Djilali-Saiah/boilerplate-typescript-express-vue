import { Response, NextFunction, Request } from 'express';
import { container, autoInjectable } from 'tsyringe';

import ResponseEntity from '@utils/resource/ResponseEntity';
import AuthService from '../service';

@autoInjectable()
export default class AuthResource {
  public async login(request: Request, response: Response, _: NextFunction) {
    const { email, password } = request.body;

    if (!email || !password) {
      return ResponseEntity.badRequest(response);
    }

    return ResponseEntity.ok(await container.resolve(AuthService).login(email, password), response);
  }
}
